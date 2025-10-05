import { Answer, MeasurementAnswer, Question } from "../lib/quiz";

interface UseQuizValidationProps {
  currentQuestion: Question;
  currentAnswer: Answer | undefined;
}

interface UseQuizValidationReturn {
  isMeasurementsComplete: boolean;
  isMultipleComplete: boolean;
  canProceed: boolean;
}

export const useQuizValidation = ({
  currentQuestion,
  currentAnswer,
}: UseQuizValidationProps): UseQuizValidationReturn => {
  const isMeasurementsComplete =
    currentQuestion.type === "measurements" &&
    !!currentAnswer &&
    !!(currentAnswer as MeasurementAnswer).age &&
    !!(currentAnswer as MeasurementAnswer).heightFt &&
    !!(currentAnswer as MeasurementAnswer).weight;

  const isMultipleComplete =
    currentQuestion.type === "multiple" &&
    !!currentAnswer &&
    Array.isArray(currentAnswer) &&
    currentAnswer.length > 0;

  const canProceed =
    !!currentAnswer &&
    (currentQuestion.type === "multiple"
      ? isMultipleComplete
      : currentQuestion.type === "measurements"
      ? isMeasurementsComplete
      : true);

  return {
    isMeasurementsComplete,
    isMultipleComplete,
    canProceed,
  };
};
