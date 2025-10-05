import React from "react";
import Checkbox from "./Checkbox";
import type { Option } from "../lib/quiz";

interface MultiSelectionProps {
  options: Option[];
  currentAnswer: number[] | undefined;
  onAnswer: (answer: number[]) => void;
}

const MultiSelection = ({
  options,
  currentAnswer,
  onAnswer,
}: MultiSelectionProps) => {
  const current = currentAnswer || [];

  const handleToggle = (optionId: number) => {
    const isChecked = current.includes(optionId);
    const newAnswer = isChecked
      ? current.filter((id) => id !== optionId)
      : [...current, optionId];
    onAnswer(newAnswer);
  };

  return (
    <>
      {options.map((option) => {
        const isChecked = current.includes(option.id);
        return (
          <Checkbox
            key={option.id}
            title={option.label}
            checked={isChecked}
            onChange={() => handleToggle(option.id)}
          />
        );
      })}
    </>
  );
};

export default MultiSelection;
