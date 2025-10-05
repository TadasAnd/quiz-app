"use client";

import Image from "next/image";
import Button from "./components/Button";
import SaleBanner from "./components/SaleBanner";
import Link from "next/link";
import { useQuizContext } from "./contexts/QuizContext";
import Logo from "./components/shared/Logo";

export default function Home() {
  const quiz = useQuizContext();

  const handleGenderSelect = (gender: "male" | "female") => {
    quiz.setGender(gender);
  };

  return (
    <main className="flex flex-col lg:flex-row lg:gap-20 items-center justify-center size-full min-h-screen">
      <section className="flex flex-col p-4 lg:p-0 size-full items-center z-10 lg:max-w-[500px] lg:items-start gap-4">
        <Logo width={126} height={40} />
        <Image
          src="/images/brain_group.webp"
          alt="Brain Group"
          width={269}
          height={210}
          role="presentation"
          className="pb-4 lg:hidden"
          priority={true}
          fetchPriority="high"
        />
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <h1 className="text-h1 text-brand-indigo-dark">
              Emotional cravings or mood swings?
            </h1>
            <h4 className="text-h4-regular text-brand-indigo">
              Curb your emotional cravings, reduce mood swings, and promote
              serotonin balance. Take a quiz to see how Suniflow can help you.
            </h4>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="text-h4-semibold text-brand-indigo-dark">
              Start by selecting your gender:
            </h4>
            <div className="flex gap-4 justify-center pb-3">
              <Link href="/quiz" className="flex-1">
                <Button
                  onClick={() => handleGenderSelect("female")}
                  variant="primary"
                  iconPath="/images/icons/female.svg"
                >
                  Female
                </Button>
              </Link>
              <Link href="/quiz" className="flex-1">
                <Button
                  onClick={() => handleGenderSelect("male")}
                  variant="secondary"
                  iconPath="/images/icons/male.svg"
                >
                  Male
                </Button>
              </Link>
            </div>
            <SaleBanner title="Summer sale" discount="60%" />
          </div>
        </div>
      </section>
      <Image
        src="/images/brain_group_desktop.webp"
        alt="Brain Group"
        width={554}
        height={433}
        role="presentation"
        className="lg:block hidden max-w-[554px]"
        priority={true}
        fetchPriority="high"
      />
    </main>
  );
}
