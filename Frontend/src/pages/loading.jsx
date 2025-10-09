import { PacmanLoader } from "react-spinners";

export default function Loading() {
  return (
    <div className="flex justify-center items-center w-full h-full">
      <div className="flex flex-col items-center">
        <h3 className="font-bold mb-3">Loading...</h3>
        <PacmanLoader color="white" className="pr-[120px]" />
      </div>
    </div>
  );
}
