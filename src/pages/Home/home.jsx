import React from "react";
import { NavLink } from "react-router-dom";

//// Import Img's:
import AboutUsImg from "../../assets/imgs/about-us-img.png";
import TestimonialProfileImg from "../../assets/imgs/avatar.png";

//// Import Data's:
import { OurProductData } from "../../data/our-product-data";
import { TestimonialData } from "../../data/testimonial-data";

//// Import Component's:
import { Buttons } from "../../components/Btn";
import { OurProductCard } from "../../components/Cards/OurProductCards";
import { Raiting } from "../../components/Rating-star";
import { TestimonialCard } from "../../components/Cards/TestimonialCards";

//// Import Icon's:
import { ArrowRightIcon } from "../../assets/icons/arrow-right-icon";
import { AboutUsIcon1 } from "../../assets/icons/about-us-icon1";
import { AboutUsIcon2 } from "../../assets/icons/about-us-icon2";

export const Home = () => {
  return (
    <div>
      <section className="tablet:py-[120px] desktop:py-[150px] bg-[url('./assets/imgs/home-hero-bg.jpg')] bg-center bg-no-repeat py-[90px]">
        <div className="container">
          <p className="font-yellowtail text-fontClr tablet:text-[25px] desktop:text-[30px] text-[20px]">
            100% Natural Food
          </p>
          <h1 className="tablet:text-[40px] tablet:max-w-[295px] desktop:text-[48px] desktop:max-w-[350px] mb-[23px] max-w-[330px] text-[32px] font-bold text-primary">
            Choose the best healthier way of life
          </h1>
          <Buttons variant="secondary">
            Explore Now
            <ArrowRightIcon />
          </Buttons>
        </div>
      </section>
      <section className="py-[100px]">
        <div className="tablet:flex tablet:items-center container gap-[20px]">
          <div className="mb-[20px] w-full rounded-[25px] bg-[url('./assets/imgs/sale-img.png')] bg-center bg-no-repeat py-[80px] pl-[15px]">
            <p className="font-yellowtail desktop:text-[26px] text-[20px] text-white">
              Natural!!
            </p>
            <h2 className="desktop:text-[32px] w-[200px] text-[26px] font-bold text-white">
              Get Garden Fresh Fruits
            </h2>
          </div>
          <div className="mb-[20px] w-full rounded-[25px] bg-[url('./assets/imgs/sale-img2.png')] bg-center bg-no-repeat py-[80px] pl-[15px]">
            <p className="font-yellowtail desktop:text-[26px] text-fontClr text-[20px]">
              Offer!!
            </p>
            <h2 className="desktop:w-[300px] desktop:text-[32px] w-[200px] text-[26px] font-bold text-primary">
              Get 10% off on Vegetables
            </h2>
          </div>
        </div>
      </section>
      <section className="bg-doctor py-[40px]">
        <div className="desktop:flex desktop:items-center container">
          <img
            className="tablet:max-w-[500px] desktop:max-w-[600px] mx-auto max-w-[300px]"
            src={AboutUsImg}
            alt="img"
          />
          <div className="mt-[20px]">
            <p className="font-yellowtail text-fontClr text-[24px]">About Us</p>
            <h2 className="max-w-[500px] text-[28px] font-bold text-primary">
              We Believe in Working Accredited Farmers
            </h2>
            <p className="mb-[35px] mt-[15px] max-w-[590px] text-cityRain">
              Simply dummy text of the printing and typesetting industry. Lorem
              had ceased to been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley.
            </p>
            <div className="flex items-center gap-[10px]">
              <span className="block w-[75px] rounded-md bg-white p-[10px]">
                <AboutUsIcon1 />
              </span>
              <div>
                <p className="text-[20px] font-extrabold text-primary">
                  Organic Foods Only
                </p>
                <p className="max-w-[400px] text-[14px]">
                  Simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum
                </p>
              </div>
            </div>
            <div className="my-[30px] flex items-center gap-[10px]">
              <span className="block w-[75px] rounded-md bg-white p-[10px]">
                <AboutUsIcon2 />
              </span>
              <div>
                <p className="text-[20px] font-extrabold text-primary">
                  Quality Standards
                </p>
                <p className="max-w-[400px] text-[14px]">
                  Simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum
                </p>
              </div>
            </div>
            <Buttons variant="primary">
              Shop Now
              <ArrowRightIcon />
            </Buttons>
          </div>
        </div>
      </section>
      <section className="pb-[80px] pt-[50px]">
        <div className="container">
          <div className="mb-[40px] text-center">
            <p className="font-yellowtail tablet:text-[24px] desktop:text-[30px] text-fontClr text-[20px]">
              Categories
            </p>
            <p className="tablet:text-[26px] desktop:text-[34px] text-[22px] font-extrabold text-primary">
              Our Products
            </p>
          </div>
          <div className="grid-cols-ourProductCols mb-[80px] grid justify-items-center gap-[20px]">
            {OurProductData.map((item) => (
              <OurProductCard {...item} />
            ))}
          </div>
          <div className="mx-auto max-w-[190px]">
            <NavLink>
              <Buttons variant="primary">
                Load More
                <ArrowRightIcon />
              </Buttons>
            </NavLink>
          </div>
        </div>
      </section>
      <section className="bg-[url('./assets/imgs/testimonial.png')] bg-center bg-no-repeat py-[120px]">
        <div className="container text-center">
          <p className="text-fontClr font-yellowtail text-[22px] tablet:text-[26px] desktop:30px">
            Testimonial
          </p>
          <h2 className="mb-[20px] text-[26px] tablet:text-[30px] desktop:text-[34px] font-extrabold text-primary">
            What Our Customer Saying?
          </h2>
          <img
            className="mx-auto mb-[10px] h-auto w-full max-w-[80px] tablet:max-w-[120px]"
            src={TestimonialProfileImg}
            alt="Profile"
          />
          <Raiting />
          <p className="text-cityRain max-w-[700px] tablet:text-[18px] mx-auto mt-[15px]">
            Simply dummy text of the printing and typesetting industry. Lorem
            Ipsum simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been.
          </p>
          <p className="mt-[15px] text-[20px] tablet:htext-[24px] font-bold text-primary">
            Sara Taylor
          </p>
          <p className="mb-[15px] text-cityRain tablet:[18px]">Consumer</p>
          <div className="mx-auto mb-[80px] flex max-w-[50px] items-center gap-[6px]">
            <span className="bg-weatheredStone block h-[10px] w-[10px] rounded-full"></span>
            <span className="bg-weatheredStone block h-[10px] w-[10px] rounded-full"></span>
            <span className="bg-weatheredStone block h-[10px] w-[10px] rounded-full"></span>
          </div>

          <div className="border-silverLake flex flex-wrap items-center justify-between gap-y-[20px] border-t-[2px] pt-[90px]">
            {TestimonialData.map((item) => (
              <TestimonialCard {...item} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
