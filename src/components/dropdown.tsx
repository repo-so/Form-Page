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

  return (
    <div className="relative w-100">
      <input
        className="border-3 p-1.5 w-full mb-3 rounded-lg text-sm"
        placeholder="Select Location..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={() => setShow(true)}
        onBlur={() => setTimeout(() => setShow(false), 100)} // delay to allow click
      />
      {show && (
        <ul className="absolute z-10 w-full bg-white border-3 rounded-lg  max-h-46 -mt-1 shadow-2xl shadow-black">
          {filtered.length > 0 ? (
            filtered.map((item) => (
              <li
                key={item}
                className="p-2 border-1 border-gray-200 hover:bg-gray-300 cursor-pointer rounded-lg"
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