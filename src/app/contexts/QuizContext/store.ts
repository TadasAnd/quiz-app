import { Answer } from "@/app/lib/quiz";

export interface QuizState {
  answers: Record<number, Answer>;
  currentStep: number;
  isComplete: boolean;
  gender?: "male" | "female";
}

export const initialState: QuizState = {
  answers: {},
  currentStep: 0,
  isComplete: false,
  gender: undefined,
};
