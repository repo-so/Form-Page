import { useState } from "react";

type SearchSelectProps = {
  options: string[];
};


export default function SearchSelect({ options }: SearchSelectProps) {
  const [query, setQuery] = useState("");
  const [show, setShow] = useState(false);

  const filtered = options.filter((opt) => //elemento dell'array che include "query"
    opt.toLowerCase().includes(query.toLowerCase())
  );

  
      const isValidText = (text: string) => {return text.trim().length > 0};

      const [touched, setTouched] = useState(false);
        const showError = touched && !isValidText(query);

  return (
    <div className="relative w-100">
      <input
        className={`border-3 p-1.5 w-full mb-3 rounded-lg text-sm 
                 ${showError ? "border-[#222222]" : "border-[#222222] "} outline-none`}
        placeholder="Select Location..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={() => setShow(true)}
        onBlur={() => {setTimeout(() => setShow(false), 100); setTouched(true)}}
         // delay to allow click
      />
      {show && (
        <ul className="absolute z-10 w-full bg-white border-1 border-gray-500 rounded-xl  max-h-46 -mt-2 shadow-2xl shadow-black">
          {filtered.length > 0 ? (
            filtered.map((item) => (
              <li
                key={item}
                className="p-2 pl-3 m-1 border-1 border-gray-200 shadow shadow-gray-400 hover:bg-gray-200 cursor-pointer rounded-lg transition-colors duration-200"
                onMouseDown={() => {
                  setQuery(item);
                  setShow(false);
                }}
              >
                {item}
              </li>
            ))
          ) : (
            <li className="p-2 text-gray-500">No location found</li>
          )}
        </ul>
      )}
    </div>
  );
}
//add style and animation