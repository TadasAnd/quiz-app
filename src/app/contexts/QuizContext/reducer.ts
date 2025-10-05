import { Answer } from "@/app/lib/quiz";
import { QuizState } from "./store";

export type Action =
  | { type: "SET_ANSWER"; payload: { questionId: number; answer: Answer } }
  | { type: "SET_GENDER"; payload: "male" | "female" }
  | { type: "NEXT_STEP" }
  | { type: "PREVIOUS_STEP" }
  | { type: "COMPLETE_QUIZ" };

export const reducer = (state: QuizState, action: Action): QuizState => {
  switch (action.type) {
    case "SET_ANSWER":
      return {
        ...state,
        answers: {
          ...state.answers,
          [action.payload.questionId]: action.payload.answer,
        },
      };

    case "SET_GENDER":
      return {
        ...state,
        gender: action.payload,
      };

    case "NEXT_STEP":
      return {
        ...state,
        currentStep: state.currentStep + 1,
      };

    case "PREVIOUS_STEP":
      return {
        ...state,
        currentStep: Math.max(0, state.currentStep - 1),
      };

    case "COMPLETE_QUIZ":
      return {
        ...state,
        isComplete: true,
      };

    default:
      return state;
  }
};
