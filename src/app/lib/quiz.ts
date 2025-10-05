const quizData = {
  questions: [
    {
      id: 1,
      type: "single" as const,
      question: "How are you feeling today? Let us know where you're at!",
      options: [
        {
          id: 1,
          label: "Not great at all",
        },
        {
          id: 2,
          label: "Could be improved",
        },
        {
          id: 3,
          label: "Doing okay",
        },
        {
          id: 4,
          label: "Feeling good",
        },
        {
          id: 5,
          label: "Absolutely fantastic!",
        },
      ],
    },
    {
      id: 2,
      type: "multiple" as const,
      question: "Do you relate to any of these symptoms?",
      options: [
        {
          id: 1,
          label: "Mood Swings",
        },
        {
          id: 2,
          label: "Gut discomfort",
        },
        {
          id: 3,
          label: "Anxiety or stress",
        },
        {
          id: 4,
          label: "Low energy",
        },
        {
          id: 5,
          label: "None",
        },
      ],
    },
    {
      id: 3,
      type: "measurements" as const,
      question: "To receive your summary, please enter your measurements.",
      options: [],
    },
  ],
};

export type QuestionType = "single" | "multiple" | "measurements";

export interface Option {
  id: number;
  label: string;
}

export interface Question {
  id: number;
  type: QuestionType;
  question: string;
  options: Option[];
}

export type MeasurementAnswer = {
  age: string;
  heightFt: string;
  heightIn: string;
  weight: string;
};

export type Answer = number | number[] | MeasurementAnswer;

export default quizData;

export const getMeasurementsQuestion = () => {
  return quizData.questions.find((q) => q.type === "measurements");
};
