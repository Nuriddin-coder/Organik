import React from "react";

export const AboutOfferCard = ({ img, text }) => {
  return (
    <div>
      <img className="mx-auto max-w-[250px]" src={img} alt="img" />
      <p className="mt-[15px] text-[20px] font-medium text-white">{text}</p>
    </div>
  );
};
