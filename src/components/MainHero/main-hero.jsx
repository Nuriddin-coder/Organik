import React from "react";

export const MainHero = ({ title }) => {
  return (
    <div>
      <h1 className="py-[65px] tablet:py-[100px] desktop:py-[150px] mb-[25px] desktop:mb-[100px] tablet:mb-[60px] text-center text-[28px] font-bold text-primary">
        {title}
      </h1>
    </div>
  );
};
