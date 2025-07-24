
import { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";

export default function Form() {
  const [step, setStep] = useState(0);

const steps = [Step1, Step2, Step3];

  const goNext = () => setStep((prev) => Math.min(prev + 1, steps.length - 1));
  const goBack = () => setStep((prev) => Math.max(prev - 1, 0));

  //fai i tre nav cosi sopra il form

  return (
    <div className="relative w-full max-w-md mx-4 overflow-hidden h-[432px] rounded-3xl bg-white outline-1 outline-gray-500">

      <div className="flex flex-row justify-around mt-7 text-xs mb-2 h-8">
        
        <div className="absolute bg-[#6b728087] h-[0.09rem] w-[70%] z-0 mt-4"></div>
        
        <button className="flex flex-row justify-around items-center bg-white outline-1 outline-blue-600 p-2.5 rounded-full z-1 cursor-pointer" onClick={() => setStep(0)} 
                style={{outline: step === 0 ? '2px solid #3b82f6' : '1px solid #6b7280'}}>

          <p className="text-[0.6rem] mr-1 bg-amber-300 rounded-full p-[0.125rem] w-[0.825rem] text-center leading-none" 
                        style={{opacity: step === 0 ? '100%' : '75%'}}>1</p>
          <p className="leading-none" style={{opacity: step === 0 ? '100%' : '75%'}}>Open Positions</p>
        </button>

        <button className="flex flex-row justify-around items-center bg-white outline-1 outline-blue-600 p-2.5 rounded-full z-1 cursor-pointer" onClick={() => setStep(1)}
                style={{outline: step === 1 ? '2px solid #3b82f6' : '1px solid #6b7280'}}>
          <p className="text-[0.6rem] mr-1 bg-amber-300 rounded-full p-[0.125rem] w-[0.825rem] text-center leading-none" 
                        style={{opacity: step === 1 ? '100%' : '75%'}}>2</p>
          <p className="leading-none" style={{opacity: step === 1 ? '100%' : '75%'}}>Career History</p>
        </button>

        <button className="flex flex-row justify-around items-center bg-white outline-1 outline-blue-600 p-2.5 rounded-full z-1 cursor-pointer" onClick={() => setStep(2)}
                style={{outline: step === 2 ? '2px solid #3b82f6' : '1px solid #6b7280'}}>
          <p className="text-[0.6rem] mr-1 bg-amber-300 rounded-full p-[0.125rem] w-[0.825rem] text-center leading-none" 
                        style={{opacity: step === 2 ? '100%' : '75%'}}>3</p>
          <p className="leading-none" style={{opacity: step === 2 ? '100%' : '75%'}}>Personal Info</p>
        </button>
      </div>

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
