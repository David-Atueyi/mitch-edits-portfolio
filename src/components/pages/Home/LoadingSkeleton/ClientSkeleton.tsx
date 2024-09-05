import React from "react";

export const ClientSkeleton: React.FC = () => {
  return (
    <div className="flex gap-3 animate-pulse w-[90dvw]">
      {[...Array(10)].map((_, index) => (
        <div
          key={index}
          className="flex gap-6 py-2 pl-4 items-center mobile:flex-[0_0_90%] tablet:flex-[0_0_50%] pc:flex-[0_0_35%] biggerPc:flex-[0_0_20%] ml-4 bg-gray-500 rounded-lg"
        >
          <div className="w-20 h-20 bg-gray-600 rounded-full"></div>
          <div className="flex flex-col gap-6">
            <div className="w-48 h-4 bg-gray-600 rounded"></div>
            <div className="w-48 h-4 bg-gray-600 rounded"></div>
          </div>
        </div>
      ))}
    </div>
  );
};
