import { useReducer } from "react";
import { Answer } from "../lib/quiz";
import { initialQuizState, quizReducer } from "./quizReducer";

const useQuiz = () => {
  const [state, dispatch] = useReducer(quizReducer, initialQuizState);

  return {
    answers: state.answers,
    currentStep: state.currentStep,
    isComplete: state.isComplete,

    setAnswer: (questionId: number, answer: Answer) =>
      dispatch({ type: "SET_ANSWER", payload: { questionId, answer } }),

    nextStep: () => dispatch({ type: "NEXT_STEP" }),
    previousStep: () => dispatch({ type: "PREVIOUS_STEP" }),
    completeQuiz: () => dispatch({ type: "COMPLETE_QUIZ" }),
  };
};

export default useQuiz;
