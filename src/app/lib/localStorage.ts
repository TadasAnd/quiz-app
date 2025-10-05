import { QuizState } from "../contexts/QuizContext/store";

const STORAGE_KEY = "quizState";

const isBrowser = (): boolean => {
  return typeof window !== "undefined";
};

export const saveQuizState = (state: QuizState): void => {
  if (!isBrowser()) return;

  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(STORAGE_KEY, serializedState);
  } catch (error) {
    console.error("Error saving quiz state to localStorage:", error);
  }
};

export const loadQuizState = (): QuizState | null => {
  if (!isBrowser()) return null;

  try {
    const serializedState = localStorage.getItem(STORAGE_KEY);

    if (serializedState === null) {
      return null;
    }

    return JSON.parse(serializedState) as QuizState;
  } catch (error) {
    console.error("Error loading quiz state from localStorage:", error);
    return null;
  }
};

export const clearQuizState = (): void => {
  if (!isBrowser()) return;

  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.error("Error clearing quiz state from localStorage:", error);
  }
};
