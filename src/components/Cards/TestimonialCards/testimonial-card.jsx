import React from "react";

export const TestimonialCard = ({ title, text }) => {
  return (
    <div className=" desktop:w-[195px] desktop:h-[195px] tablet:w-[165px] tablet:h-[165px] flex h-[135px] w-[135px] items-center justify-center rounded-full border-[4px] border-secondary">
      <div className="desktop:w-[180px] desktop:h-[180px] tablet:w-[150px] tablet:h-[150px] flex h-[120px] w-[120px] flex-col items-center justify-center rounded-full bg-[silver]">
        <p className="tablet:text-[24px] text-[20px] font-extrabold text-primary">
          {title}
        </p>
        <p className="tablet:text-[17px] text-[13px] font-medium text-primary">
          {text}
        </p>
      </div>
    </div>
  );
};
