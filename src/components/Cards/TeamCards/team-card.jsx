import React from "react";
import { NavLink } from "react-router-dom";

export const TeamCard = ({
  img,
  name,
  text,
  icon1: Facebook,
  icon2: Instagram,
  icon3: Twitter,
}) => {
  return (
    <div className="max-w-[310px] cursor-pointer rounded-[24px] bg-doctor pb-[25px] duration-200 hover:bg-white hover:shadow-lg">
      <img className="mx-auto max-w-[310px]" src={img} alt="img" />
      <div className="px-[15px]">
        <h2 className="mt-[15px] text-[22px] font-extrabold text-primary">
          {name}
        </h2>
        <div className="flex items-center justify-between">
          <p className="font-yellowtail text-[18px] text-fontClr">{text}</p>
          <span className="flex items-center gap-[12px]">
            <NavLink>
              <Facebook />
            </NavLink>
            <NavLink>
              <Instagram />
            </NavLink>
            <NavLink>
              <Twitter />
            </NavLink>
          </span>
        </div>
      </div>
    </div>
  );
};
