"use client";

import Image from "next/image";
import ProgressBar from "../components/ProgressBar";
import MultiSelection from "../components/MultiSelection";
import SingleSelection from "../components/SingleSelection";
import type { Answer, MeasurementAnswer } from "../lib/quiz";
import { useQuizContext } from "../contexts/QuizContext";
import quizData from "../lib/quiz";
import Button from "../components/Button";
import { useRouter } from "next/navigation";
import Measurements from "../components/Measurements";
import Logo from "../components/shared/Logo";
import { useQuizValidation } from "../hooks/useQuizValidation";

const QuizPage = () => {
  const quiz = useQuizContext();
  const router = useRouter();

  const currentQuestion = quizData.questions[quiz.currentStep];
  const currentAnswer = currentQuestion
    ? quiz.answers[currentQuestion.id]
    : undefined;

  const { canProceed } = useQuizValidation({
    currentQuestion: currentQuestion || quizData.questions[0],
    currentAnswer,
  });

  if (!currentQuestion) {
    router.push("/");
    return null;
  }

  const handleAnswer = (questionId: number, answer: Answer) => {
    quiz.setAnswer(questionId, answer);
  };

  const handleSingleSelect = (questionId: number, answer: number) => {
    quiz.setAnswer(questionId, answer);
    quiz.nextStep();
  };

  const handleNextStep = () => {
    if (currentQuestion.type === "measurements") {
      router.push("/statistics");
      return;
    }
    quiz.nextStep();
  };

  const handlePreviousStep = () => {
    if (quiz.currentStep === 0) {
      router.push("/");
      return;
    }
    quiz.previousStep();
  };

  return (
    <div className="flex flex-col items-center size-full min-h-screen">
      <div className="flex flex-col gap-1 w-full z-10">
        <div className="flex items-center justify-between w-full p-4 max-w-7xl mx-auto">
          <Logo width={126} height={40} />
          <div className="flex items-center gap-1">
            <p className="text-body-semibold">{quiz.currentStep + 1}</p>
            <p className="text-body-regular">of 3</p>
          </div>
        </div>
        <ProgressBar
          currentStep={quiz.currentStep + 1}
          totalSteps={quizData.questions.length}
        />
      </div>
      <section className="flex flex-col gap-8 py-8 z-10 px-4 justify-center">
        <h1 className="text-h3-semibold text-brand-indigo-dark text-center px-6">
          {currentQuestion.question}
        </h1>
        <div className="flex flex-col gap-4 max-w-sm mx-auto w-full">
          {currentQuestion.type === "single" && (
            <SingleSelection
              options={currentQuestion.options}
              onSelect={(answer) =>
                handleSingleSelect(currentQuestion.id, answer)
              }
            />
          )}

          {currentQuestion.type === "multiple" && (
            <MultiSelection
              options={currentQuestion.options}
              currentAnswer={currentAnswer as number[] | undefined}
              onAnswer={(answer) => handleAnswer(currentQuestion.id, answer)}
            />
          )}
          {currentQuestion.type === "measurements" && (
            <Measurements
              currentAnswer={currentAnswer as MeasurementAnswer | undefined}
              onAnswer={(answer) => handleAnswer(currentQuestion.id, answer)}
            />
          )}
          <div className="flex flex-col gap-4 pt-4">
            {currentQuestion.type !== "single" && (
              <Button
                disabled={!canProceed}
                onClick={handleNextStep}
                variant="primary"
              >
                Continue
              </Button>
            )}
            <Button onClick={handlePreviousStep} variant="ghost">
              <>
                <Image
                  src="/images/icons/arrow.svg"
                  alt="arrow"
                  width={16}
                  height={16}
                  role="presentation"
                  className="rotate-180"
                />
                <span className="text-body-semibold">Go back</span>
              </>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QuizPage;
