type Props = {
  onNext: () => void;
  onBack?: () => void;
};

export default function Step1({ onNext }: Props) {
  return (
    <div className="p-6 bg-white h-full">
      <div>
        <p className="text-xs text-black/50 font-poppins -mb-1">Step 1</p>
      <h2 className="text-xl font-poppins font-extrabold mb-4">Open Positions</h2>
      </div>

      <input className="border-3 p-1.5 w-full mb-5 rounded-lg" placeholder="Your name" />
      <input className="border-3 p-1.5 w-full mb-5 rounded-lg" placeholder="Your name" />
      <input className="border-3 p-1.5 w-full mb-5 rounded-lg" placeholder="Your name" />
      <input className="border-3 p-1.5 w-full mb-5 rounded-lg" placeholder="Your name" />

      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-lg float-end"
        onClick={onNext}>
        Continue
      </button>

    </div>
  );
}
