type Props = {
  onNext: () => void;
  onBack?: () => void;
};

export default function Step3({ onNext }: Props) {
  return (
    <div className="py-6 px-7 bg-white h-full ">
      <h2 className="text-xl font-bold mb-4">Step 3</h2>

      <div className="flex flex-row justify-between">
        <div className="flex flex-col">
        <p>First Name</p>
      <input className="border p-1.5 w-full mb-4" placeholder="Your name" />
      </div>
      <div className="flex flex-col">
      <p>Last Name</p>
      <input className="border p-1.5 w-full mb-4" placeholder="Your name" />
      </div>
      </div>

      <p>Email</p>
      <input className="border p-1.5 w-full mb-4" placeholder="name@domain.com" />
      <p>Phone Number</p>
      <input className="border p-1.5 w-full mb-4" placeholder="metti in +39" />      

      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={onNext}
      >
        Continue
      </button>
    </div>
  );
}
