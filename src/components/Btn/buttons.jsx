import React from "react";
import clsx from "clsx";

export const Buttons = ({
  variant,
  icon: Icon,
  onClick,
  className,
  type,
  children,
}) => {
  return (
    <button
      type={type ? type : ""}
      onClick={onClick ? onClick : null}
      className={clsx("flex items-center justify-center px-[30px] py-[14px]", {
        "bg-primary gap-[10px] rounded-[14px] text-[20px] font-bold text-white":
          variant === "primary",
        " bg-funkyYellow text-primary gap-[10px] rounded-[14px] text-[20px]  font-bold":
          variant === "secondary",
        " bg-white border-[1px] border-primary text-primary gap-[10px] rounded-[14px] text-[20px]  font-bold":
          variant === "border",
      })}
    >
      {Icon ? <Icon /> : ""}
      {children}
    </button>
  );
};
