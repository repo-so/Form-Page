import { useState } from 'react';
import Dropdown from './dropdown.tsx'

type Props = {
  onNext: () => void;
  onBack?: () => void;
};

export default function Step2({ onNext }: Props) {

    const [position, setPosition] = useState("");
    const [qualification, setQualification] = useState("");

    const isValidText = (text: string) => {return text.trim().length > 0};

    const [touched, setTouched] = useState({
    position: false,
    qualification: false,
  })

  const showError = touched.position && !isValidText(position);
  const showError1 = touched.qualification && !isValidText(qualification);

  const handleSubmit = () => {
    // segna tutti gli input come gia toccati, cosi anche se non l'hai toccati checka se sono poi validi
    setTouched({
      position: true,
      qualification: true,
    });

    const allValid =
      isValidText(position) &&
      isValidText(qualification)

    if (allValid) {
      onNext(); // Proceed only if valid
    }
  };
  

  const works = ["Hybrid", "Remote", "On-Site"];

  return (
    <div className="p-6 bg-white h-full ">
      <div className='-mt-1'>
        <p className="text-xs text-black/50 font-poppins -mb-1 ">Step 2</p>
      <h2 className="text-xl font-poppins font-extrabold mb-4 ">Career History</h2>
      </div>

      <p className="font-poppins text-[0.89rem]">Current Position*</p>
      <input value={position} className={`border-3 p-1.5 w-full mb-3 rounded-lg text-sm 
                      ${showError ? "border-red-500 focus:ring-red-300" : "border-[#222222] "} outline-none`} placeholder="Ex. 'Software Engineer'"
                      onChange={(e) => setPosition(e.target.value)} 
          onBlur={() => setTouched((previous) => ({ ...previous, position: true }))} />

      <p className='font-poppins text-[0.89rem]'>Work Environment <span className=' pb-2 opacity-70 text-[0.8rem]'>(optional)</span></p>
      <Dropdown options={works} />
      <p className='font-poppins mb-0.5 text-[0.89rem]'>Degree/Qualification*</p>
      <input value={qualification} className={`border-3 p-1.5 w-full mb-3 rounded-lg text-sm 
                      ${showError1 ? "border-red-500 focus:ring-red-300" : "border-[#222222] "} outline-none`}
                      onChange={(e) => setQualification(e.target.value)} 
          onBlur={() => setTouched((previous) => ({ ...previous, qualification: true }))} placeholder="Ex. 'CS Masters Degree'" />

      <p className='font-poppins text-[0.84rem]/[1.05rem] pl-1 py-1 tracking-tight '><span className="font-poppins font-semibold ">*Note</span>: Ensure the provided information reflects your current professional status.</p>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-lg cursor-pointer font-poppins text-md hover:bg-blue-600 transition-colors duration-300 mt-1"
        onClick={handleSubmit}
      >
        Continue
      </button>
    </div>
  );
}
//il continue è disabled, ma la 3-navbar è sempre abled