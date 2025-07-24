type Props = {
  onNext: () => void;
  onBack?: () => void;
};

export default function Step2({ onNext }: Props) {
  return (
    <div className="p-6 bg-white h-full ">
      <div>
        <p className="text-xs text-black/50 font-poppins -mb-1">Step 2</p>
      <h2 className="text-xl font-poppins font-extrabold mb-4">Career History</h2>
      </div>

      <p className="font-poppins ">Current Position</p>
      <input className="border-3 p-1.5 w-full mb-3 rounded-lg text-sm" placeholder="Ex. 'Software Engineer'" />
      <p>Location</p>
      <input className="border-3 p-1.5 w-full mb-3 rounded-lg text-sm" placeholder="Your name" />
      <p>Degree/Qualification</p>
      <input className="border-3 p-1.5 w-full mb-3 rounded-lg text-sm" placeholder="Your name" />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-1"
        onClick={onNext}
      >
        Continue
      </button>
    </div>
  );
}
