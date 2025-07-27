

interface CheckboxProps {
  isChecked: boolean;
  onChange: () => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ isChecked, onChange }) => {


  return (
    <label className="relative inline-block w-4 h-4 cursor-pointer mt-0.5">
      <input type="checkbox" className="peer hidden" checked={isChecked}
        onChange={onChange}/>
      <span
        className="
          absolute inset-0 rounded-[5px] border border-blue-500 bg-white
          transition-all duration-300 peer-hover:border-blue-400
          peer-checked:bg-blue-600 peer-checked:border-transparent
        "
      ></span>
      <svg
        className="
          absolute  w-4 h-4 text-white scale-0 opacity-0
          peer-checked:scale-100 peer-checked:opacity-100 transition-transform duration-200
        "
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        viewBox="0 0 24 24"
      >
        <path d="M5 13l4 4L19 7" />
      </svg>
    </label>
  );
};

export default Checkbox;
