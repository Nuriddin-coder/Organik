import React from "react";
import clsx from "clsx";

export const Buttons = ({ variant, icon: Icon, children }) => {
  return (
    <button
      className={clsx("flex items-center justify-center px-[30px] py-[14px]", {
        "gap-[10px] rounded-[14px] bg-primary text-[20px] font-bold text-white":
          variant === "primary",
        " gap-[10px] rounded-[14px] bg-funkyYellow text-[20px] font-bold  text-primary":
          variant === "secondary",
        " gap-[10px] rounded-[14px] border-[1px] border-primary bg-white text-[20px] font-bold  text-primary":
          variant === "border",
        " gap-[10px]  rounded-[14px] bg-white text-[20px] font-bold  text-primary":
          variant === "default",
      })}
    >
      {Icon ? <Icon /> : ""}
      {children}
    </button>
  );
};
