"use client";

import Image from "next/image";
import ProgressBar from "../components/ProgressBar";
import Link from "next/link";
import MultiSelection from "../components/MultiSelection";
import SingleSelection from "../components/SingleSelection";
import type { Answer, MeasurementAnswer } from "../lib/quiz";
import useQuiz from "../hooks/useQuiz";
import quizData from "../lib/quiz";
import Button from "../components/Button";
import { useRouter } from "next/navigation";
import Measurements from "../components/Measurements";

const QuizPage = () => {
  const quiz = useQuiz();
  const currentQuestion = quizData.questions[quiz.currentStep];
  const currentAnswer = quiz.answers[currentQuestion.id];
  const router = useRouter();

  const handleAnswer = (questionId: number, answer: Answer) => {
    quiz.setAnswer(questionId, answer);
  };

  const handleSingleSelect = (questionId: number, answer: number) => {
    quiz.setAnswer(questionId, answer);
    quiz.nextStep();
  };

  const handleNextStep = () => {
    if (currentQuestion.type === "measurements") {
      console.log("state", quiz.answers);
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

  const isMeasurementsComplete =
    currentQuestion.type === "measurements" &&
    currentAnswer &&
    (currentAnswer as MeasurementAnswer).age &&
    (currentAnswer as MeasurementAnswer).heightFt &&
    (currentAnswer as MeasurementAnswer).weight;

  const isMultipleComplete =
    currentQuestion.type === "multiple" &&
    currentAnswer &&
    Array.isArray(currentAnswer) &&
    currentAnswer.length > 0;

  const canProceed =
    currentAnswer &&
    (currentQuestion.type === "multiple"
      ? isMultipleComplete
      : currentQuestion.type === "measurements"
      ? isMeasurementsComplete
      : true);

  return (
    <main className="flex flex-col items-center size-full min-h-screen">
      <div className="flex flex-col gap-1 w-full z-10">
        <div className="flex items-center justify-between w-full p-4">
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={100}
              height={40}
              className="cursor-pointer"
            />
          </Link>
          <div className="flex items-center gap-1">
            <p className="text-body-semibold">{quiz.currentStep + 1}</p>
            <p className="text-body-regular">of 3</p>
          </div>
        </div>
        <ProgressBar currentStep={quiz.currentStep + 1} totalSteps={3} />
      </div>
      <section className="flex flex-col gap-8 py-8 z-10 px-4">
        <h1 className="text-h3-semibold text-brand-indigo-dark">
          {currentQuestion.question}
        </h1>
        <div className="flex flex-col gap-4 w-full max-w-lg mx-auto">
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
    </main>
  );
};

export default QuizPage;
