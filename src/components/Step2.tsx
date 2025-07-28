
import Dropdown from './dropdown.tsx'

type Props = {
  onNext: () => void;
  onBack?: () => void;
};

export default function Step2({ onNext }: Props) {

  const locations = ["Rome, IT", "Bologna, IT", "Milan, IT", "Naples, IT"];

  return (
    <div className="p-6 bg-white h-full ">
      <div className='-mt-1'>
        <p className="text-xs text-black/50 font-poppins -mb-1 ">Step 2</p>
      <h2 className="text-xl font-poppins font-extrabold mb-4 ">Career History</h2>
      </div>

      <p className="font-poppins text-[0.89rem]">Current Position</p>
      <input className="border-3 p-1.5 w-full mb-3 rounded-lg text-sm" placeholder="Ex. 'Software Engineer'" />
      <p className='font-poppins text-[0.89rem]'>Location</p>
      <Dropdown options={locations}/>
      <p className='font-poppins mb-0.5 text-[0.89rem]'>Degree/Qualification</p>
      <input className="border-3 p-1.5 w-full mb-3 rounded-lg text-sm" placeholder="Ex. 'CS Masters Degree'" />

      <p className='font-poppins text-[0.84rem]/[1.05rem] pl-1 py-1 tracking-tight '><span className="font-poppins font-semibold ">*Note</span>: Ensure the provided information reflects your current professional status.</p>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-lg cursor-pointer font-poppins text-md hover:bg-blue-600 transition-colors duration-300 mt-1"
        onClick={onNext}
      >
        Continue
      </button>
    </div>
  );
}
//implemeta oncontinue missing or invalid fields