import { ChevronDown } from "lucide-react";
import React, { useRef, useEffect } from "react";

export const InputVariant1 = React.forwardRef(
  ({ className = "", placeholder = "Type here...", img }, ref) => {
    return (
      <div
        className={`card-variant-1 flex items-center rounded-lg ${className}`}
      >
        <div className="text-[#C5C3CA]">{img}</div>
        <input
          ref={ref}
          className="ml-2 outline-0 border-none bg-none text-base w-full"
          placeholder={placeholder}
        />
      </div>
    );
  }
);

export const InputVariant2 = React.forwardRef(
  ({ className = "", placeholder = "Type here...", defaultValue }, ref) => {
    return (
      <div
        className={` card-variant-1 flex justify-between items-center py-2 px-3 rounded-lg max-w-fit ${className}`}
      >
        <div className="text-[#7E7D81] text-sm">{placeholder}</div>
        <input
          ref={ref}
          className="ml-2 outline-0 border-none bg-none flex-1 max-w-fit text-right mr-2  min-w-[60px] text-[12px] "
          defaultValue={defaultValue}
        />
      </div>
    );
  }
);

function useClickOutside(ref, handler) {
  useEffect(() => {
    function listener(event) {
      if (!ref.current || ref.current.contains(event.target)) return;
      handler(event);
    }
    document.addEventListener("mousedown", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
    };
  }, [ref, handler]);
}

export function InputVariant3({
  className = "",
  placeholder = "Select...",
  img,
  options = [],
  selected,
  onSelect,
}) {
  const [open, setOpen] = React.useState(false);
  const ref = useRef();
  useClickOutside(ref, () => setOpen(false));
  return (
    <div
      className={`h-fit text-[#C5C3CA] relative card-variant-1 flex items-center py-2 px-3 rounded-lg max-w-fit cursor-pointer ${className}`}
      onClick={() => setOpen((prev) => !prev)}
      ref={ref}
    >
      {img && <div className="text-[#C5C3CA] mr-2">{img}</div>}
      <p className="whitespace-nowrap px-2">{selected || placeholder}</p>
      <ChevronDown className="ml-auto" size={17} />

      {open && (
        <ul className="absolute top-full left-0 mt-1 z-10 w-full bg-[#1d1d20] border border-[#383838] rounded-md shadow-md overflow-hidden">
          {options.map((option, idx) => (
            <li
              key={idx}
              className="px-4 py-2 hover:bg-[#7682c2] transition text-sm"
              onClick={(e) => {
                e.stopPropagation();
                setOpen(false);
                onSelect?.(option);
              }}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export const Input = React.forwardRef(({ label, className, ...props }, ref) => {
  return (
    <div className={`flex flex-col ${className}`}>
      <label className="mb-1 text-sm text-gray-100">{label}</label>
      <input
        ref={ref}
        {...props}
        className="card-variant-1 px-3 py-2 text-sm rounded-md outline-0"
      />
    </div>
  );
});

export const CheckBox = React.forwardRef(
  ({ label, className, ...props }, ref) => {
    return (
      <label className="flex items-center space-x-3 cursor-pointer select-none">
        <input type="checkbox" className="sr-only peer" />
        <div
          className="w-5 h-5 border-2 border-gray-400 rounded-sm 
               peer-checked:bg-blue-600 peer-checked:border-blue-600 
               flex items-center justify-center 
               transition-colors duration-200"
        >
          <svg
            className="w-3 h-3 text-white hidden peer-checked:block"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <span className="text-sm text-gray-800">Subscribe to newsletter</span>
      </label>
    );
  }
);
