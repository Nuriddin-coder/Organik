import React from "react";

export const ChooseCard = ({ title, text, id, icon: Icons }) => {
  return (
    <div className="group w-[260px] cursor-pointer rounded-[30px] bg-white pb-[40px] pt-[65px] text-center shadow-lg duration-300 hover:bg-primary">
      <div className="mx-auto mb-[15px] flex h-[70px] w-[70px] items-center justify-center rounded-[18px] bg-doctor group-hover:bg-white ">
        <Icons />
      </div>
      <h2 className="mb-[10px] text-[22px] font-bold text-primary group-hover:text-white">
        {title}
      </h2>
      <p className="mx-auto max-w-[180px] text-cityRain group-hover:text-white">
        {text}
      </p>
    </div>
  );
};
