import type { Option } from "../lib/quiz";
import Button from "./Button";

interface SingleSelectionProps {
  options: Option[];
  onSelect: (answer: number) => void;
}

const SingleSelection = ({ options, onSelect }: SingleSelectionProps) => {
  const handleClick = (answer: number) => {
    console.log("clicked", answer);
    onSelect(answer);
  };
  return (
    <>
      {options.map((option) => (
        <Button
          key={option.id}
          variant="selection"
          showArrow={true}
          onClick={() => handleClick(option.id)}
        >
          {option.label}
        </Button>
      ))}
    </>
  );
};

export default SingleSelection;
