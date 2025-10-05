"use client";

import { useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import SummaryCard from "../components/SummaryCard";
import { useQuizContext } from "../contexts/QuizContext";
import { getMeasurementsQuestion, MeasurementAnswer } from "../lib/quiz";
import {
  calculateImperialBMI,
  convertHeightToCm,
  convertWeightToKg,
} from "../lib";
import Logo from "../components/shared/Logo";
import StatisticsPageSkeleton from "../components/StatisticsPageSkeleton";

const StatisticsPage = () => {
  const quiz = useQuizContext();
  const router = useRouter();
  const measurementsQuestion = getMeasurementsQuestion();

  const measurements = measurementsQuestion
    ? (quiz.answers[measurementsQuestion.id] as MeasurementAnswer)
    : undefined;

  const heightCm = useMemo(() => {
    if (!measurements?.heightFt) return 0;
    return convertHeightToCm(
      Number(measurements.heightFt),
      Number(measurements.heightIn)
    );
  }, [measurements?.heightFt, measurements?.heightIn]);

  const weightKg = useMemo(() => {
    if (!measurements?.weight) return 0;
    return convertWeightToKg(Number(measurements.weight));
  }, [measurements?.weight]);

  const bmi = useMemo(() => {
    if (!measurements?.weight || !measurements?.heightFt) return 0;
    return calculateImperialBMI(
      Number(measurements.weight),
      Number(measurements.heightFt),
      Number(measurements.heightIn)
    );
  }, [measurements?.weight, measurements?.heightFt, measurements?.heightIn]);

  useEffect(() => {
    if (quiz.isLoading) return;

    const hasRequiredData =
      measurements &&
      measurements.age &&
      measurements.heightFt &&
      measurements.weight &&
      quiz.gender;

    if (!hasRequiredData) {
      router.push("/");
    }
  }, [quiz.isLoading, measurements, quiz.gender, router]);

  if (quiz.isLoading) {
    return <StatisticsPageSkeleton />;
  }

  if (!measurements || !quiz.gender) {
    return null;
  }

  const age = measurements.age;
  const gender = quiz.gender;

  return (
    <div className="flex flex-col items-center size-full min-h-screen p-4">
      <div className="flex items-center justify-center w-full p-4 mb-8 z-10">
        <Logo width={126} height={40} />
      </div>
      <h1 className="text-h2 text-brand-indigo-dark text-center px-6">
        Your personal summary
      </h1>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-sm lg:max-w-6xl z-10 py-4">
        <SummaryCard
          title="YOUR BMI"
          value={bmi.toString()}
          gridSpan="col-span-2 row-span-2"
          showBmiScale
        />
        <SummaryCard title="Age" value={age.toString()} />
        <SummaryCard title="Gender" value={gender || ""} />
        <SummaryCard title="Height cm" value={`${heightCm.toString()}`} />
        <SummaryCard title="Weight kg" value={weightKg.toString()} />
      </div>
    </div>
  );
};

export default StatisticsPage;
