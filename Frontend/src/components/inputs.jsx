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
          className="ml-2 outline-0 border-none bg-none text-[12px]"
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
      <ChevronDown className="ml-2" size={17} />

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
