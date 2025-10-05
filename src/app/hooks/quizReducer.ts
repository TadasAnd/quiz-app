import { Answer } from "@/app/lib/quiz";

export interface QuizState {
  answers: Record<number, Answer>;
  currentStep: number;
  isComplete: boolean;
}

export const initialQuizState: QuizState = {
  answers: {},
  currentStep: 0,
  isComplete: false,
};

export type QuizAction =
  | { type: "SET_ANSWER"; payload: { questionId: number; answer: Answer } }
  | { type: "NEXT_STEP" }
  | { type: "PREVIOUS_STEP" }
  | { type: "COMPLETE_QUIZ" };

export function quizReducer(state: QuizState, action: QuizAction): QuizState {
  switch (action.type) {
    case "SET_ANSWER":
      return {
        ...state,
        answers: {
          ...state.answers,
          [action.payload.questionId]: action.payload.answer,
        },
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
}
