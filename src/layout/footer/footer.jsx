import React from "react";
import { NavLink } from "react-router-dom";

//// Import Component's:
import { Buttons } from "../../components/Btn";

//// Import Logo's:
import { LogoIcon } from "../../assets/icons/logo-icon";
import { InstagramIcon } from "../../assets/icons/instagram-icon";
import { FacebookIcon } from "../../assets/icons/facebook-icon";
import { TwitterIcon } from "../../assets/icons/twitter-icon";
import { MediaIcon } from "../../assets/icons/media-icon";

export const Footer = () => {
  return (
    <div>
      <section className="mb-[40px] px-[20px] py-[85px]">
        <div className="container rounded-2xl bg-[url('./assets/imgs/subscribe-bg-img.png')] bg-cover bg-center bg-no-repeat px-[20px] py-[60px] desktop:flex desktop:items-center desktop:justify-between">
          <div>
            <h2 className="mb-[35px] text-[24px] font-bold text-white tablet:text-[34px] desktop:mt-[30px]">
              Subscribe to our Newsletter
            </h2>
          </div>
          <div className="desktop:flex desktop:gap-[25px] ">
            <input
              className="mx-auto mb-[15px] w-[250px] rounded-[14px] px-[15px] py-[12px] outline-none tablet:w-[350px] desktop:m-0"
              type="text"
            />
            <Buttons variant="primary">Subsribe</Buttons>
          </div>
        </div>
      </section>
      <div className="container tablet:pb-[60px] desktop:flex desktop:items-start desktop:justify-center desktop:gap-[25px]">
        <div className="border-b-[2px] border-discoBall pb-[15px] desktop:border-0 desktop:border-r-[2px] desktop:border-discoBall desktop:pr-[40px] desktop:text-end">
          <h2 className="mb-[15px] text-[24px] font-bold text-primary">
            Contact Us
          </h2>
          <span>
            <p className="text-[20px] font-bold text-primary">Email</p>
            <a className="text-cityRain" href="email">
              needhelp@Organia.com
            </a>
          </span>
          <span>
            <p className="text-[20px] font-bold text-primary">Phone</p>
            <a
              className="text-cityRain"
              href="tel:666888888
"
            >
              666 888 888
            </a>
          </span>
          <span>
            <p className="text-[20px] font-bold text-primary">Adress</p>
            <p className="text-cityRain">88 road, borklyn street, USA</p>
          </span>
        </div>
        <div className="border-b-[2px] border-discoBall pb-[15px] pt-[15px] desktop:border-0 desktop:p-0 desktop:text-center">
          <div className="desktop:mx-auto desktop:w-[160px]">
            <LogoIcon />
          </div>
          <p className="mt-[15px] max-w-[500px] text-cityRain">
            Simply dummy text of the printing and typesetting industry. Lorem
            Ipsum simply dummy text of the printing{" "}
          </p>
          <div className="mt-[25px] flex items-center gap-[20px] desktop:justify-center">
            <NavLink className=" flex h-[40px] w-[40px] items-center justify-center rounded-full bg-mediaBgClr">
              <InstagramIcon />
            </NavLink>
            <NavLink className=" flex h-[40px] w-[40px] items-center justify-center rounded-full bg-mediaBgClr">
              <FacebookIcon />
            </NavLink>
            <NavLink className=" flex h-[40px] w-[40px] items-center justify-center rounded-full bg-mediaBgClr">
              <TwitterIcon />
            </NavLink>
            <NavLink className=" flex h-[40px] w-[40px] items-center justify-center rounded-full bg-mediaBgClr">
              <MediaIcon />
            </NavLink>
          </div>
        </div>
        <div className="py-[15px] desktop:border-0 desktop:border-l-[2px] desktop:border-discoBall desktop:pl-[40px]">
          <h2 className="text-[24px] font-bold text-primary">Utility Pages</h2>
          <div className="mt-[20px] flex flex-col gap-y-[10px]">
            <NavLink className="text-cityRain">Style Guide</NavLink>
            <NavLink className="text-cityRain">404 Not Found</NavLink>
            <NavLink className="text-cityRain">Password Protecded</NavLink>
            <NavLink className="text-cityRain">Licences</NavLink>
            <NavLink className="text-cityRain">Changelog</NavLink>
          </div>
        </div>
      </div>
      <div className="border-t-2 border-discoBall pb-4 pt-[25px]">
        <div className="container tablet:flex tablet:items-center tablet:justify-center">
          <span className="flex items-center gap-[10px]">
            <p className="text-cityRain desktop:text-[20px]">Copyright © </p>
            <NavLink className="pr-[6px] text-[20px] font-semibold text-primary">
              Organick
            </NavLink>
          </span>

          <p className="text-cityRain desktop:text-[20px]">
            | Designed by VictorFlow Templates - Powered by Webflow
          </p>
        </div>
      </div>
    </div>
  );
};
