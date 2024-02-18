import React from "react";

//// Import Icon's:
import { ContentAuthorIcon } from "../../assets/icons/content-author-icon";
import { ArrowRightIcon } from "../../assets/icons/arrow-right-icon";

//// Import Component's:
import { Buttons } from "../../components/Btn";
import { MainHero } from "../../components/MainHero";

export const News = () => {
  return (
    <section>
      <div className="bg-current bg-[url('./assets/imgs/news-hero-img.png')] bg-cover bg-no-repeat">
        <MainHero title="Recent News" />
      </div>
      <div className="container">
        <div className="tablet:grid tablet:grid-cols-2 tablet:justify-between tablet:gap-[20px] desktop:gap-y-[60px]">
          <div className="mt-[20px] rounded-lg bg-[url('./assets/imgs/content-img.png')] bg-cover bg-center bg-no-repeat px-[20px] py-[25px] desktop:relative desktop:mx-auto desktop:h-[350px] desktop:w-full desktop:max-w-[600px]">
            <div className="mb-[35px] ml-[16px] flex h-[50px] w-[50px] flex-col items-center rounded-full bg-white">
              <p className="font-semibold text-primary">25</p>
              <p className="font-semibold text-primary">Nov</p>
            </div>
            <div className="bottom-[-40px] left-[50px] mx-auto rounded-[10px] bg-white px-[20px] py-[25px] shadow-md desktop:absolute">
              <span className="flex items-center gap-2">
                <ContentAuthorIcon />
                <p className="text-[14px] text-primary">By Rachi Card</p>
              </span>
              <h2 className="mt-[10px] text-[20px] font-bold text-primary">
                The Benefits of Vitamin D & How to Get It
              </h2>
              <p className="mb-[20px] text-[14px] text-cityRain">
                Simply dummy text of the printing and typesetting industry.
                Lorem Ipsum
              </p>
              <Buttons variant="secondary">
                Read More
                <ArrowRightIcon />
              </Buttons>
            </div>
          </div>
          <div className="mt-[20px] rounded-lg bg-[url('./assets/imgs/content-img2.png')] bg-cover bg-center bg-no-repeat px-[20px] py-[25px] desktop:relative desktop:mx-auto desktop:h-[350px] desktop:w-full desktop:max-w-[600px]">
            <div className="mb-[35px] ml-[16px] flex h-[50px] w-[50px] flex-col items-center rounded-full bg-white">
              <p className="font-semibold text-primary">25</p>
              <p className="font-semibold text-primary">Nov</p>
            </div>
            <div className="bottom-[-40px] left-[50px] mx-auto rounded-[10px] bg-white px-[20px] py-[25px] shadow-md desktop:absolute">
              <span className="flex items-center gap-2">
                <ContentAuthorIcon />
                <p className="text-[14px] text-primary">By Rachi Card</p>
              </span>
              <h2 className="mt-[10px] text-[20px] font-bold text-primary">
                The Benefits of Vitamin D & How to Get It
              </h2>
              <p className="mb-[20px] text-[14px] text-cityRain">
                Simply dummy text of the printing and typesetting industry.
                Lorem Ipsum
              </p>
              <Buttons variant="secondary">
                Read More
                <ArrowRightIcon />
              </Buttons>
            </div>
          </div>
          <div className="mt-[20px] rounded-lg bg-[url('./assets/imgs/content-img3.png')] bg-cover bg-center bg-no-repeat px-[20px] py-[25px] desktop:relative desktop:mx-auto desktop:h-[350px] desktop:w-full desktop:max-w-[600px]">
            <div className="mb-[35px] ml-[16px] flex h-[50px] w-[50px] flex-col items-center rounded-full bg-white">
              <p className="font-semibold text-primary">25</p>
              <p className="font-semibold text-primary">Nov</p>
            </div>
            <div className="bottom-[-40px] left-[50px] mx-auto rounded-[10px] bg-white px-[20px] py-[25px] shadow-md desktop:absolute">
              <span className="flex items-center gap-2">
                <ContentAuthorIcon />
                <p className="text-[14px] text-primary">By Rachi Card</p>
              </span>
              <h2 className="mt-[10px] text-[20px] font-bold text-primary">
                The Benefits of Vitamin D & How to Get It
              </h2>
              <p className="mb-[20px] text-[14px] text-cityRain">
                Simply dummy text of the printing and typesetting industry.
                Lorem Ipsum
              </p>
              <Buttons variant="secondary">
                Read More
                <ArrowRightIcon />
              </Buttons>
            </div>
          </div>
          <div className="mt-[20px] rounded-lg bg-[url('./assets/imgs/content-img4.png')] bg-cover bg-center bg-no-repeat px-[20px] py-[25px] desktop:relative desktop:mx-auto desktop:h-[350px] desktop:w-full desktop:max-w-[600px]">
            <div className="mb-[35px] ml-[16px] flex h-[50px] w-[50px] flex-col items-center rounded-full bg-white">
              <p className="font-semibold text-primary">25</p>
              <p className="font-semibold text-primary">Nov</p>
            </div>
            <div className="bottom-[-40px] left-[50px] mx-auto rounded-[10px] bg-white px-[20px] py-[25px] shadow-md desktop:absolute">
              <span className="flex items-center gap-2">
                <ContentAuthorIcon />
                <p className="text-[14px] text-primary">By Rachi Card</p>
              </span>
              <h2 className="mt-[10px] text-[20px] font-bold text-primary">
                The Benefits of Vitamin D & How to Get It
              </h2>
              <p className="mb-[20px] text-[14px] text-cityRain">
                Simply dummy text of the printing and typesetting industry.
                Lorem Ipsum
              </p>
              <Buttons variant="secondary">
                Read More
                <ArrowRightIcon />
              </Buttons>
            </div>
          </div>
          <div className="mt-[20px] rounded-lg bg-[url('./assets/imgs/content-img5.png')] bg-cover bg-center bg-no-repeat px-[20px] py-[25px] desktop:relative desktop:mx-auto desktop:h-[350px] desktop:w-full desktop:max-w-[600px]">
            <div className="mb-[35px] ml-[16px] flex h-[50px] w-[50px] flex-col items-center rounded-full bg-white">
              <p className="font-semibold text-primary">25</p>
              <p className="font-semibold text-primary">Nov</p>
            </div>
            <div className="bottom-[-40px] left-[50px] mx-auto rounded-[10px] bg-white px-[20px] py-[25px] shadow-md desktop:absolute">
              <span className="flex items-center gap-2">
                <ContentAuthorIcon />
                <p className="text-[14px] text-primary">By Rachi Card</p>
              </span>
              <h2 className="mt-[10px] text-[20px] font-bold text-primary">
                The Benefits of Vitamin D & How to Get It
              </h2>
              <p className="mb-[20px] text-[14px] text-cityRain">
                Simply dummy text of the printing and typesetting industry.
                Lorem Ipsum
              </p>
              <Buttons variant="secondary">
                Read More
                <ArrowRightIcon />
              </Buttons>
            </div>
          </div>
          <div className="mt-[20px] rounded-lg bg-[url('./assets/imgs/content-img6.png')] bg-cover bg-center bg-no-repeat px-[20px] py-[25px] desktop:relative desktop:mx-auto desktop:h-[350px] desktop:w-full desktop:max-w-[600px]">
            <div className="mb-[35px] ml-[16px] flex h-[50px] w-[50px] flex-col items-center rounded-full bg-white">
              <p className="font-semibold text-primary">25</p>
              <p className="font-semibold text-primary">Nov</p>
            </div>
            <div className="bottom-[-40px] left-[50px] mx-auto rounded-[10px] bg-white px-[20px] py-[25px] shadow-md desktop:absolute">
              <span className="flex items-center gap-2">
                <ContentAuthorIcon />
                <p className="text-[14px] text-primary">By Rachi Card</p>
              </span>
              <h2 className="mt-[10px] text-[20px] font-bold text-primary">
                The Benefits of Vitamin D & How to Get It
              </h2>
              <p className="mb-[20px] text-[14px] text-cityRain">
                Simply dummy text of the printing and typesetting industry.
                Lorem Ipsum
              </p>
              <Buttons variant="secondary">
                Read More
                <ArrowRightIcon />
              </Buttons>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
