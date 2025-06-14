export function GenerateColorPalette(num) {
  let colors = [
    "red",
    "orange",
    "amber",
    "lime",
    "emerald",
    "cyan",
    "blue",
    "violet",
    "purple",
  ];

  colors = colors.map((e) => `bg-${e}-400`);

  return Array(num)
    .fill(0)
    .map((_, i) => colors[i % colors.length]);
}

export function ButtonVariant1({
  img = null,
  text,
  active,
  color,
  onClick,
  className,
}) {
  const colors = GenerateColorPalette(10);
  console.log(colors);

  return (
    <button
      onClick={onClick}
      className={`cursor-pointer flex items-center justify-around card-variant-1 py-2 px-4 rounded-md
        card hover:scale-102 transition-transform duration-300 ${active ? "card-active" : ""} ${className}`}
    >
      {img ? (
        <div className="mr-2">{img}</div>
      ) : (
        <div className={`rounded-full w-2 h-2 mr-3 ${color}`}></div>
      )}
      {text}
    </button>
  );
}

export function ButtonVariant2({ img, onClick, className }) {
  return (
    <button
      onClick={onClick}
      className={`cursor-pointer flex items-center justify-around card-variant-1 py-2 px-2 aspect-square rounded-xl
        card hover:scale-102 transition-transform duration-300 ${className}`}
    >
      <div className="text-[#C5C3CA]">{img}</div>
    </button>
  );
}

export function ButtonVariant3({ img, onClick, text, className }) {
  return (
    <button
      onClick={onClick}
      className={`h-[40px] w-fit cursor-pointer flex items-center justify-around card-variant-1 rounded-[23px]
        hover:scale-102 transition-transform duration-300 ${className}`}
    >
      <div className="mx-3 whitespace-nowrap">{text}</div>
      <div className="h-[40px] w-[40px] flex justify-center items-center text-[#C5C3CA] card-variant-1 rounded-[23px] aspect-square p-2 mr-[-2px]">
        {img}
      </div>
    </button>
  );
}

export function ButtonVariant4({ img, onClick, text, className }) {
  return (
    <button
      onClick={onClick}
      className={`cursor-pointer flex items-center justify-around card-variant-2 rounded-[23px]
        hover:scale-102 transition-transform duration-300 px-4 py-2  ${className}`}
    >
      <div className="">{text}</div>
      <div className="ml-2">{img}</div>
    </button>
  );
}
