type Props = {
  onNext: () => void;
  onBack?: () => void;
};

export default function Step3({ onNext }: Props) {
  return (
    <div className="py-6 px-7 bg-white h-full ">
      <div>
        <p className="text-xs text-black/50 font-poppins -mb-1">Step 3</p>
      <h2 className="text-xl font-poppins font-extrabold mb-4">Personal Info</h2>
      </div>

      <div className="flex flex-row justify-between">
        <div className="flex flex-col">
        <p>First Name</p>
      <input className="border-3 p-1.5 w-full mb-3 rounded-lg text-sm" placeholder="Your name" />
      </div>
      <div className="flex flex-col">
      <p>Last Name</p>
      <input className="border-3 p-1.5 w-full mb-3 rounded-lg text-sm" placeholder="Your name" />
      </div>
      </div>

      <p>Email</p>
      <input className="border-3 p-1.5 w-full mb-3 rounded-lg text-sm" placeholder="name@domain.com" />
      <p>Phone Number</p>
      <input className="border-3 p-1.5 w-full mb-3 rounded-lg text-sm" placeholder="metti in +39" />      
<p>chechkbox i agree termz and conditions</p>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={onNext}
      >
        Continue
      </button>
    </div>
  );
}
