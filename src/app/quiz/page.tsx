import Image from "next/image";
import ProgressBar from "../components/ProgressBar";

const QuizPage = () => {
  return (
    <main className="flex flex-col items-center size-full min-h-screen z-10">
      <div className="flex flex-col gap-1 w-full">
        <div className="flex items-center justify-between w-full p-4">
          <Image src="/images/logo.png" alt="Logo" width={100} height={40} />
          <div className="flex items-center gap-1">
            <p className="text-body-semibold">1</p>
            <p className="text-body-regular">of 3</p>
          </div>
        </div>
        <ProgressBar currentStep={1} totalSteps={3} />
      </div>
      <section></section>
    </main>
  );
};

export default QuizPage;
