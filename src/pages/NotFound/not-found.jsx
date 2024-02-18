import React from "react";
import { NavLink } from "react-router-dom";

//// Import Icon's:
import { ArrowRightIcon } from "../../assets/icons/arrow-right-icon";

//// Import Img's":
import Img1 from "../../assets/imgs/not-found-img.png";

//// Import Component's:
import { Buttons } from "../../components/Btn";

export const NotFound = () => {
  return (
    <section className="bg-fortressGrey py-[50px] desktop:py-[100px]">
      <div className="container desktop:flex desktop:items-center desktop:justify-center desktop:gap-[100px]">
        <img
          className="mx-auto max-w-[300px] tablet:max-w-[400px] desktop:max-w-[600px] desktop:m-0"
          src={Img1}
          alt="img"
        />
        <div className="text-center">
          <strong className="text-notFoundNumClr text-[120px] desktop:text-[200px] font-extrabold">
            404
          </strong>
          <h2 className="text-[26px] font-bold text-primary desktop:text-[34px]">Page Not Found</h2>
          <p className="text-[18px] text-cityRain desktop:text-[20px]">
            The page you are looking for doesn't exist or has been moved
          </p>
          <div className="mx-auto mt-[25px] w-[250px]">
            <NavLink to="/">
              <Buttons variant="primary">
                Go To Homepage <ArrowRightIcon />
              </Buttons>
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};
