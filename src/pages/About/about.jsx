import React from "react";

//// Import Component's:
import { MainHero } from "../../components/MainHero";
import { Buttons } from "../../components/Btn";
import { ChooseCard } from "../../components/Cards/ChooseCard";
import { TeamCard } from "../../components/Cards/TeamCards";
import { AboutOfferCard } from "../../components/Cards/AboutOfferCards";

//// Import Icon':
import { TractorIcon } from "../../assets/icons/tractor-icon";
import { FactoryIcon } from "../../assets/icons/factory-icon";
import { ArrowRightIcon } from "../../assets/icons/arrow-right-icon";
import { RadiusIcon } from "../../assets/icons/radius-icon";

//// Import Img's:
import AboutSuccessImg from "../../assets/imgs/about-success-img.png";
import ChooseImg from "../../assets/imgs/choose-img.png";

//// Import Data's:
import { ChooseData } from "../../data/choose-data";
import { TeamData } from "../../data/team-data";
import { AboutOfferData } from "../../data/about-offer-data";

export const About = () => {
  return (
    <div>
      {/* Hero */}
      <div className="bg-[url('./assets/imgs/main-about-us-hero-img.png')] bg-cover bg-center bg-no-repeat">
        <MainHero title="About Us" />
      </div>

      {/* About Us */}
      <section className="py-[80px]">
        <div className="container desktop:flex desktop:items-center desktop:justify-center desktop:gap-[65px]">
          <img
            className="mx-auto max-w-[300px] tablet:max-w-[450px] desktop:m-0 desktop:max-w-[600px]"
            src={AboutSuccessImg}
            alt="img"
          />
          <div>
            <p className="font-yellowtail text-[20px] text-fontClr tablet:text-[24px] desktop:text-[30px]">
              About Us
            </p>
            <h2 className="mb-[15px] max-w-[250px] text-[28px] font-extrabold text-primary tablet:max-w-[300px] tablet:text-[32px] desktop:max-w-[350px] desktop:text-[36px]">
              We do Creative Things for Success
            </h2>
            <p className="max-w-[550px]  text-cityRain">
              Simply dummy text of the printing and typesetting industry. Lorem
              had ceased to been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley.
            </p>
            <p className="my-[35px] max-w-[550px] text-cityRain">
              Simply dummy text of the printing and typesetting industry. Lorem
              had ceased to been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley.
            </p>
            <div className="tablet:mb-[30px] tablet:flex tablet:items-center tablet:gap-[20px]">
              <span className="flex items-center gap-[10px]">
                <TractorIcon />
                <p className="max-w-[190px] text-[18px] font-semibold text-primary">
                  Modern Agriculture Equipment
                </p>
              </span>
              <span className="my-[20px] flex items-center gap-[10px]">
                <FactoryIcon />
                <p className="max-w-[190px] text-[18px] font-semibold text-primary">
                  No growth hormones are used
                </p>
              </span>
            </div>
            <div className="mb-[25px]">
              <Buttons variant="primary">
                Explore More <ArrowRightIcon />
              </Buttons>
            </div>
          </div>
        </div>
      </section>

      {/* Choose Us */}
      <section className=" bg-doctor pb-[120px] pt-[90px]">
        <div className="container desktop:flex desktop:flex-row-reverse desktop:items-center desktop:justify-center desktop:gap-[45px]">
          <img
            className="mx-auto max-w-[300px] tablet:max-w-[450px] desktop:m-0 desktop:max-w-[500px]"
            src={ChooseImg}
            alt="img"
          />
          <div className="py-[35px] tablet:pt-[60px]">
            <p className="font-yellowtail text-[20px] text-fontClr tablet:text-[24px] desktop:text-[30px]">
              Why Choose Us?
            </p>
            <h2 className="mb-[15px] max-w-[250px] text-[28px] font-extrabold text-primary tablet:max-w-[340px] tablet:text-[32px] desktop:max-w-[390px] desktop:text-[36px]">
              We do not buy from the open market & traders.
            </h2>
            <p className="max-w-[550px]  text-cityRain">
              Simply dummy text of the printing and typesetting industry. Lorem
              had ceased to been the industry's standard the 1500s, when an
              unknown
            </p>
            <div className="mt-[25px]">
              <span className="bg-coronation flex max-w-[225px] items-center gap-[7px] rounded-[49px] px-[20px] py-[15px]">
                <RadiusIcon />
                <p>100% Natural Product</p>
              </span>
              <p className="ml-[25px] mt-[10px] max-w-[400px] text-cityRain">
                Simply dummy text of the printing and typesetting industry Lorem
                Ipsum
              </p>
            </div>
            <div className="mt-[25px]">
              <span className="bg-coronation flex max-w-[225px] items-center gap-[7px] rounded-[49px] px-[20px] py-[15px]">
                <RadiusIcon />
                <p> Increases resistance</p>
              </span>
              <p className="ml-[25px] mt-[10px] max-w-[400px] text-cityRain">
                Simply dummy text of the printing and typesetting industry Lorem
                Ipsum
              </p>
            </div>
          </div>
        </div>
        <div className="container mt-[45px] flex flex-wrap justify-center gap-[25px]">
          {ChooseData.map((item) => (
            <ChooseCard key={item.id} {...item} />
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="pt-[40px]">
        <div className="container">
          <div className="text-center">
            <p className="font-yellowtail text-[20px] text-fontClr tablet:text-[24px] desktop:text-[30px]">
              Team
            </p>
            <h2 className="text-[26px] font-bold text-primary tablet:text-[30px] desktop:text-[34px]">
              Our Organic Experts
            </h2>
            <p className="mx-auto mb-[45px] max-w-[750px] text-cityRain">
              Simply dummy text of the printing and typesetting industry. Lorem
              had ceased to been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-[35px] pb-[85px]">
            {TeamData.map((item) => (
              <TeamCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* About Offer */}
      <section className="bg-primary py-[100px]">
        <div className="container">
          <div className="text-center">
            <p className="font-yellowtail text-[20px] tablet:text-[24px] desktop:text-[28px] text-fontClr">About Us</p>
            <h2 className="text-[24px] font-bold text-white">
              What We Offer for You
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-[35px] mt-[45px]">
              {AboutOfferData.map((item) => (
                <AboutOfferCard key={item.id} {...item} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
