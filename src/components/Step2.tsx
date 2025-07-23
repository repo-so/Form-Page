type Props = {
  onNext: () => void;
  onBack?: () => void;
};

export default function Step2({ onNext }: Props) {
  return (
    <div className="p-6 bg-white h-full shadow-md rounded-xl">
      <h2 className="text-xl font-bold mb-4">Step 2</h2>
      <input className="border p-2 w-full mb-4" placeholder="Your name" />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={onNext}
      >
        Continue
      </button>
    </div>
  );
}
