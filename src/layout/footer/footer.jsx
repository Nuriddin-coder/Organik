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
      <section className="mb-[40px] px-[20px]">
        <div className="desktop:flex desktop:items-center desktop:justify-between container rounded-2xl bg-[url('./assets/imgs/subscribe-bg-img.png')] bg-cover bg-center bg-no-repeat px-[20px] py-[60px]">
          <div>
            <h2 className="tablet:text-[34px] desktop:mt-[30px] mb-[35px] text-[24px] font-bold text-white">
              Subscribe to our Newsletter
            </h2>
          </div>
          <div className="desktop:flex desktop:gap-[25px] ">
            <input
              className="desktop:m-0 tablet:w-[350px] mx-auto mb-[15px] w-[250px] rounded-[14px] px-[15px] py-[12px] outline-none"
              type="text"
            />
            <Buttons variant="primary">Subsribe</Buttons>
          </div>
        </div>
      </section>
      <div className="desktop:flex desktop:gap-[25px] tablet:pb-[60px] desktop:items-start desktop:justify-center container">
        <div className="desktop:pr-[40px] desktop:border-0 desktop:border-r-[2px] desktop:border-discoBall desktop:text-end border-b-[2px] border-discoBall pb-[15px]">
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
        <div className="desktop:p-0 desktop:border-0 desktop:text-center border-b-[2px] border-discoBall pb-[15px] pt-[15px]">
          <div className="desktop:w-[160px] desktop:mx-auto">
            <LogoIcon />
          </div>
          <p className="mt-[15px] max-w-[500px] text-cityRain">
            Simply dummy text of the printing and typesetting industry. Lorem
            Ipsum simply dummy text of the printing{" "}
          </p>
          <div className="desktop:justify-center mt-[25px] flex items-center gap-[20px]">
            <span className=" bg-mediaBgClr flex h-[40px] w-[40px] items-center justify-center rounded-full">
              <InstagramIcon />
            </span>
            <span className=" bg-mediaBgClr flex h-[40px] w-[40px] items-center justify-center rounded-full">
              <FacebookIcon />
            </span>
            <span className=" bg-mediaBgClr flex h-[40px] w-[40px] items-center justify-center rounded-full">
              <TwitterIcon />
            </span>
            <span className=" bg-mediaBgClr flex h-[40px] w-[40px] items-center justify-center rounded-full">
              <MediaIcon />
            </span>
          </div>
        </div>
        <div className="desktop:pl-[40px] desktop:border-0 desktop:border-l-[2px] desktop:border-discoBall pt-[15px]">
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
      <div className="border-t-2 border-discoBall pt-[25px] pb-4">
        <div className="tablet:flex tablet:items-center tablet:justify-center container">
          <span className="flex items-center gap-[10px]">
            <p className="text-cityRain desktop:text-[20px]">Copyright © </p>
            <NavLink className="font-semibold text-primary pr-[6px] text-[20px]">Organick</NavLink>
          </span>

          <p className="text-cityRain desktop:text-[20px]">
            | Designed by VictorFlow Templates - Powered by Webflow
          </p>
        </div>
      </div>
    </div>
  );
};
