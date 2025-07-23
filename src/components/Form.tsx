
import { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";

export default function Form() {
  const [step, setStep] = useState(0);

const steps = [Step1, Step2, Step3];

  const goNext = () => setStep((prev) => Math.min(prev + 1, steps.length - 1));
  const goBack = () => setStep((prev) => Math.max(prev - 1, 0));

  

  return (
    <div className="relative w-full max-w-lg mx-auto overflow-hidden h-[400px] rounded-xl outline-1 outline-gray-600">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${step * 100}%)` }}
      >
        {steps.map((Component, idx) => (
          <div key={idx} className="w-full shrink-0 grow-0 basis-full">
            <Component onNext={goNext} onBack={goBack} />
          </div>
        ))}
      </div>
    </div>
  );
}
