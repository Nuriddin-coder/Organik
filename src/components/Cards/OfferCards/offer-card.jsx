import React from "react";
import { NavLink } from "react-router-dom";

//// import Component's:
import { Raiting } from "../../Rating-star";

export const OfferCard = ({ price, salePrice, title, img, productType }) => {
  return (
    <NavLink className="flex h-[380px] w-[280px] flex-col items-center justify-start rounded-lg bg-doctor pb-[15px] pt-[40px]">
      <div className="relative">
        <img className="h-[250px] max-w-[260px]" src={img} alt="img" />
        <p className="absolute top-[-20px] inline rounded-[8px] bg-primary px-[12px] py-[6px] text-white">
          {productType}
        </p>
      </div>
      <div className="w-full px-[20px]">
        <h2 className="pb-[8px] text-[20px] font-semibold text-primary">
          {title}
        </h2>
        <div className="border-silverLake flex items-center justify-between border-t-[2px] pt-[10px]">
          <span className="flex items-center gap-[5px]">
            <p className="text-fortressGrey line-through">${price}.00</p>
            <p className="text-[18px] font-bold text-primary">
              ${salePrice}.00
            </p>
          </span>
          <Raiting />
        </div>
      </div>
    </NavLink>
  );
};
