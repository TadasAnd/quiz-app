"use client";

import Image from "next/image";
import SummaryCard from "../components/SummaryCard";
import { useQuizContext } from "../contexts/QuizContext";
import { MeasurementAnswer } from "../lib/quiz";
import {
  calculateImperialBMI,
  convertHeightToCm,
  convertWeightToKg,
} from "../lib";

const StatisticsPage = () => {
  const quiz = useQuizContext();
  const measurements = quiz.answers[3] as MeasurementAnswer;
  const age = measurements.age;
  const heightFt = measurements.heightFt;
  const heightIn = measurements.heightIn;
  const weight = measurements.weight;
  const gender = quiz.gender;
  const heightCm = convertHeightToCm(Number(heightFt), Number(heightIn));
  const bmi = calculateImperialBMI(
    Number(weight),
    Number(heightFt),
    Number(heightIn)
  );
  const weightKg = convertWeightToKg(Number(weight));

  return (
    <div className="flex flex-col items-center size-full min-h-screen p-4">
      <div className="flex items-center justify-center w-full p-4 mb-8">
        <Image src="/images/logo.png" alt="Logo" width={100} height={40} />
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
