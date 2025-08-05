import { useState } from 'react';
import JobCard from './JobCard.tsx'
import data from '../data/jobsData.json'; // assuming this is an array of 6 items

type Props = {
  onNext: () => void;
  onBack?: () => void;
};

export default function Step1({ onNext }: Props) {

    const [selectedId, setSelectedId] = useState<string | null>(null); //per radio

  return (
    <div className="relative p-6 bg-white h-full ">
      <div>
        <p className="text-xs text-black/50 font-poppins -mb-1">Step 1</p>
      <h2 className="text-xl font-poppins font-extrabold mb-4">Open Positions</h2>
      </div>

    <div className=' grid grid-cols-2  gap-2  max-h-63 overflow-y-auto p-1.5 pb-2.5'>
       {data.map((item) => (
        <JobCard
          key={item.id}
          data={item}
          isSelected={selectedId === item.id}
          onSelect={() => setSelectedId(item.id)}
        />
      ))}
    </div>

      <div className='left-0 w-[100%] absolute z-10 flex justify-center items-center'>
    <div className="   w-[86%] shadow-[0_-4px_10px_10px_#ffffffe0]">
      <button
        className=" bg-blue-500 text-white px-4 py-2 rounded-lg "
        onClick={onNext}> 
        Continue
      </button>
    </div>
    </div>

    </div>
  );
}
