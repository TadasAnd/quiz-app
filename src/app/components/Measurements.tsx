import { MeasurementAnswer } from "../lib/quiz";
import Input from "./Input";

interface MeasurementsProps {
  currentAnswer?: MeasurementAnswer;
  onAnswer: (answer: MeasurementAnswer) => void;
}

const Measurements = ({ currentAnswer, onAnswer }: MeasurementsProps) => {
  const handleNumericChange = (
    field: keyof MeasurementAnswer,
    value: string
  ) => {
    // Only allow numbers and empty string
    if (value === "" || /^\d+$/.test(value)) {
      onAnswer({
        age: currentAnswer?.age || "",
        heightFt: currentAnswer?.heightFt || "",
        heightIn: currentAnswer?.heightIn || "",
        weight: currentAnswer?.weight || "",
        [field]: value,
      });
    }
  };

  return (
    <div className="grid grid-cols-2 gap-4 w-full max-w-lg mx-auto">
      <Input
        placeholder="Age"
        unit="years"
        name="age"
        value={currentAnswer?.age || ""}
        onChange={(e) => handleNumericChange("age", e.target.value)}
        extraClass="col-span-2"
      />
      <Input
        placeholder="Height"
        unit="ft"
        name="heightFt"
        value={currentAnswer?.heightFt || ""}
        onChange={(e) => handleNumericChange("heightFt", e.target.value)}
        extraClass="col-span-1"
      />
      <Input
        placeholder="In"
        unit="in"
        name="heightIn"
        value={currentAnswer?.heightIn || ""}
        onChange={(e) => handleNumericChange("heightIn", e.target.value)}
        extraClass="col-span-1"
      />
      <Input
        placeholder="Weight"
        unit="lb"
        name="weight"
        value={currentAnswer?.weight || ""}
        onChange={(e) => handleNumericChange("weight", e.target.value)}
        extraClass="col-span-2"
      />
    </div>
  );
};

export default Measurements;
