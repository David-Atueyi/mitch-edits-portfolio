import React from "react";

export const ProjectsSkeleton: React.FC = () => {
  return (
    <div className="flex gap-3 animate-pulse overflow-hidden w-[90dvw]">
      {[...Array(4)].map((_, index) => (
        <div key={index} className=" mobile:flex-[0_0_75%] tablet:flex-[0_0_60%] pc:flex-[0_0_40%] biggerPc:flex-[0_0_25%] h-[500px] bg-gray-600 rounded-lg" ></div>
      ))}
    </div>
  );
};
