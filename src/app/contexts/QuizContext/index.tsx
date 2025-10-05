"use client";

import React, {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useRef,
  ReactNode,
} from "react";
import { Answer } from "@/app/lib/quiz";
import { reducer } from "./reducer";
import { initialState } from "./store";
import { saveQuizState, loadQuizState } from "@/app/lib/localStorage";

interface QuizContextValue {
  // State
  answers: Record<number, Answer>;
  currentStep: number;
  isComplete: boolean;
  gender?: "male" | "female";
  isLoading: boolean;

  // Actions
  setAnswer: (questionId: number, answer: Answer) => void;
  setGender: (gender: "male" | "female") => void;
  nextStep: () => void;
  previousStep: () => void;
  completeQuiz: () => void;
}

const QuizContext = createContext<QuizContextValue | undefined>(undefined);

interface QuizProviderProps {
  children: ReactNode;
}

export const QuizProvider = ({ children }: QuizProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isLoading, setIsLoading] = React.useState(true);
  const isInitialMount = useRef(true);

  // Load from localStorage on mount (client-only, after hydration)
  useEffect(() => {
    const savedState = loadQuizState();

    if (savedState) {
      // Validate structure
      if (
        typeof savedState === "object" &&
        "answers" in savedState &&
        "currentStep" in savedState &&
        "isComplete" in savedState
      ) {
        dispatch({ type: "LOAD_STATE", payload: savedState });
      }
    }

    setIsLoading(false);
    isInitialMount.current = false;
  }, []);

  // Sync state to localStorage (skip on initial mount to avoid saving empty state)
  useEffect(() => {
    if (!isInitialMount.current) {
      saveQuizState(state);
    }
  }, [state]);

  const value: QuizContextValue = {
    answers: state.answers,
    currentStep: state.currentStep,
    isComplete: state.isComplete,
    gender: state.gender,
    isLoading,

    setAnswer: (questionId: number, answer: Answer) =>
      dispatch({ type: "SET_ANSWER", payload: { questionId, answer } }),

    setGender: (gender: "male" | "female") =>
      dispatch({ type: "SET_GENDER", payload: gender }),

    nextStep: () => dispatch({ type: "NEXT_STEP" }),

    previousStep: () => dispatch({ type: "PREVIOUS_STEP" }),

    completeQuiz: () => dispatch({ type: "COMPLETE_QUIZ" }),
  };

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};

export const useQuizContext = () => {
  const context = useContext(QuizContext);

  if (context === undefined) {
    throw new Error("useQuizContext must be used within a QuizProvider");
  }

  return context;
};

export type { QuizState } from "./store";
export type { Action } from "./reducer";
