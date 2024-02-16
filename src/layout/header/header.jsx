import React from "react";
import { NavLink } from "react-router-dom";

///// import Icon's:
import { LogoIcon } from "../../assets/icons/logo-icon";
import { BagIcon } from "../../assets/icons/bag-icon";
import { SearchIcon } from "../../assets/icons/search-icon";

//// Import DATA's:
import { Links } from "./header-data";

///// Imoprt Component's:
import { Drawer } from "../../components/Drawer";

export const Header = () => {
  return (
    <section className="tablet:pb-[50px] pb-[40px] pt-[10px]">
      <div className="container">
        <div className="flex items-center justify-between">
          <div>
            <LogoIcon />
          </div>
          <ul className="desktop:flex hidden gap-[30px]">
            {Links.map((link) => (
              <>
                <li key={link.path}>
                  <NavLink
                    className="pb-[3px] text-[20px] font-bold text-primary hover:border-b-[2px] hover:border-primary focus:border-b-[2px] focus:border-primary"
                    to={link.path ? link.path : "/"}
                  >
                    {link.name}
                  </NavLink>
                </li>
              </>
            ))}
          </ul>
          <div className="flex items-center gap-[20px]">
            <div className="bg-drWhite tablet:flex mx-auto hidden max-w-[241px] items-center rounded-full py-[3px] pl-[12px]">
              <input
                className="h-[30px] bg-transparent outline-none"
                type="text"
              />
              <NavLink className="rounded-full bg-secondary p-[10px]">
                <SearchIcon />
              </NavLink>
            </div>
            <div className="flex items-center gap-[5px] rounded-full border-[1px] p-[5px]">
              <NavLink className="block rounded-full bg-red-900 pb-[8px] pl-[8px] pr-[10px] pt-[10px]">
                <BagIcon />
              </NavLink>
              <span className="tablet:flex hidden items-center gap-1">
                <p className="text-[12px] font-semibold text-primary">Card</p>
                <p className="text-[12px] font-semibold text-primary">(0)</p>
              </span>
            </div>
            <span className="desktop:hidden">
              <Drawer />
            </span>
          </div>
        </div>

        <div className="bg-drWhite tablet:hidden mx-auto flex max-w-[241px] items-center rounded-full py-[3px] pl-[12px]">
          <input className="h-[30px] bg-transparent outline-none" type="text" />
          <NavLink className="rounded-full bg-secondary p-[10px]">
            <SearchIcon />
          </NavLink>
        </div>
      </div>
    </section>
  );
};
