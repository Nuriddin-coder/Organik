import React from "react";
import { NavLink } from "react-router-dom";

//// Import Icons:
import { MenuIcon } from "../../assets/icons/menu-icon";

//// Import DATA's:
import { Links } from "../../layout/header/header-data";

export const Drawer = () => {
  return (
    <div className="drawer drawer-end">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}

        <label htmlFor="my-drawer-4" className="drawer-button">
          <MenuIcon />
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu min-h-full w-80 bg-base-200 p-4 text-base-content">
          {Links.map((link) => (
            <>
              <li key={link.path}>
                <NavLink to={link.path ? link.path : "/"}>{link.name}</NavLink>
              </li>
            </>
          ))}
        </ul>
      </div>
    </div>
  );
};

{
  /*
   <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
          {Links.map((link) => (
            <>
              <li key={link.path}>
                <NavLink to={link.path ? link.path : "/"}>{link.name}</NavLink>
              </li>
            </>
          ))}
        </ul>


         <label
          htmlFor="my-drawer-4"
          className="border-[2px] border-primary p-[10px]"
        >
          <MenuIcon />
        </label>
*/
}
