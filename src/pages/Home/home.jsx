import React from "react";
import { NavLink } from "react-router-dom";

//// Import Img's:
import AboutUsImg from "../../assets/imgs/about-us-img.png";
import TestimonialProfileImg from "../../assets/imgs/avatar.png";
import FriendlyImg from "../../assets/imgs/friendly-img.png";

//// Import Data's:
import { OurProductData } from "../../data/our-product-data";
import { TestimonialData } from "../../data/testimonial-data";
import { OfferData } from "../../data/offer-data";

//// Import Component's:
import { Buttons } from "../../components/Btn";
import { OurProductCard } from "../../components/Cards/OurProductCards";
import { Raiting } from "../../components/Rating-star";
import { TestimonialCard } from "../../components/Cards/TestimonialCards";
import { OfferCard } from "../../components/Cards/OfferCards";

//// Import Icon's:
import { ArrowRightIcon } from "../../assets/icons/arrow-right-icon";
import { AboutUsIcon1 } from "../../assets/icons/about-us-icon1";
import { AboutUsIcon2 } from "../../assets/icons/about-us-icon2";
import { ContentAuthorIcon } from "../../assets/icons/content-author-icon";

export const Home = () => {
  return (
    <div>
      {/* HERO Section */}
      <section className="tablet:py-[120px] desktop:py-[150px] bg-[url('./assets/imgs/home-hero-bg.jpg')] bg-cover bg-center bg-no-repeat py-[90px]">
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

      {/* Sale Cards */}
      <section className="py-[100px]">
        <div className="tablet:flex tablet:items-center container gap-[20px]">
          <div className="mb-[20px] w-full rounded-[25px] bg-[url('./assets/imgs/sale-img.png')] bg-cover bg-center bg-no-repeat py-[80px] pl-[15px]">
            <p className="font-yellowtail desktop:text-[26px] text-[20px] text-white">
              Natural!!
            </p>
            <h2 className="desktop:text-[32px] w-[200px] text-[26px] font-bold text-white">
              Get Garden Fresh Fruits
            </h2>
          </div>
          <div className="mb-[20px] w-full rounded-[25px] bg-[url('./assets/imgs/sale-img2.png')] bg-cover bg-center bg-no-repeat py-[80px] pl-[15px]">
            <p className="font-yellowtail desktop:text-[26px] text-fontClr text-[20px]">
              Offer!!
            </p>
            <h2 className="desktop:w-[300px] desktop:text-[32px] w-[200px] text-[26px] font-bold text-primary">
              Get 10% off on Vegetables
            </h2>
          </div>
        </div>
      </section>

      {/* About Us */}
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

      {/* Our Products */}
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
              <OurProductCard key={item.id} {...item} />
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

      {/* Testimonial */}
      <section className="bg-[url('./assets/imgs/testimonial.png')] bg-cover bg-center bg-no-repeat py-[120px]">
        <div className="container text-center">
          <p className="text-fontClr font-yellowtail tablet:text-[26px] desktop:30px text-[22px]">
            Testimonial
          </p>
          <h2 className="tablet:text-[30px] desktop:text-[34px] mb-[20px] text-[26px] font-extrabold text-primary">
            What Our Customer Saying?
          </h2>
          <img
            className="tablet:max-w-[120px] mx-auto mb-[10px] h-auto w-full max-w-[80px]"
            src={TestimonialProfileImg}
            alt="Profile"
          />
          <Raiting />
          <p className="tablet:text-[18px] mx-auto mt-[15px] max-w-[700px] text-cityRain">
            Simply dummy text of the printing and typesetting industry. Lorem
            Ipsum simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been.
          </p>
          <p className="tablet:htext-[24px] mt-[15px] text-[20px] font-bold text-primary">
            Sara Taylor
          </p>
          <p className="tablet:[18px] mb-[15px] text-cityRain">Consumer</p>
          <div className="mx-auto mb-[80px] flex max-w-[50px] items-center gap-[6px]">
            <span className="bg-weatheredStone block h-[10px] w-[10px] rounded-full"></span>
            <span className="bg-weatheredStone block h-[10px] w-[10px] rounded-full"></span>
            <span className="bg-weatheredStone block h-[10px] w-[10px] rounded-full"></span>
          </div>

          <div className="default-silverLake default-t-[2px] flex flex-wrap items-center justify-between gap-y-[20px] pt-[90px]">
            {TestimonialData.map((item) => (
              <TestimonialCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* Offer */}
      <section className="bg-primary py-[100px]">
        <div className="container">
          <div>
            <p className="text-fontClr tablet:text-[28px] desktop:text-[36px] font-yellowtail text-[24px] font-medium">
              Offer
            </p>
            <div className="flex items-center justify-between">
              <h2 className="tablet:text-[32px] desktop:text-[38px] mt-[10px] text-[26px] font-extrabold text-white">
                We Offer Organic For You
              </h2>
              <span className="tablet:inline-block hidden">
                <Buttons variant="secondary">
                  View All Products
                  <ArrowRightIcon />
                </Buttons>
              </span>
            </div>
          </div>
          <div className="grid-cols-ourProductCols mt-[30px] grid justify-items-center gap-[20px]">
            {OfferData.map((item) => (
              <OfferCard key={item.id} {...item} />
            ))}
          </div>
          <div className="tablet:hidden mx-auto mt-[35px] w-[250px]">
            <Buttons variant="secondary">
              View All Products
              <ArrowRightIcon />
            </Buttons>
          </div>
        </div>
      </section>

      {/* Eco Friendly */}
      <section className="desktop:p-0 py-[30px]">
        <div className="desktop:flex desktop:justify-between desktop:items-center container">
          <img
            className="tablet:max-w-[500px] desktop:m-0 mx-auto max-w-[300px]"
            src={FriendlyImg}
            alt="img"
          />
          <div>
            <p className="text-fontClr font-yellowtail desktop:m-0 tablet:text-[28px] desktop:text-[32px] mt-[25px] text-[22px]">
              Eco Friendly
            </p>
            <h2 className="tablet:text-[30px] desktop:text-[34px] w-[320px] text-[26px] font-extrabold text-primary">
              Econis is a Friendly Organic Store
            </h2>
            <div className="max-w-[550px]">
              <p className="tablet:text-[24px] desktop:text-[26px] mt-[15px] text-[22px] font-medium text-primary">
                Start with Our Company First
              </p>
              <p className="tablet:text-[18px] desktop:text-[20px] text-cityRain">
                Sed ut perspiciatis unde omnis iste natus error sit voluptat
                accusantium doloremque laudantium. Sed ut perspiciatis.
              </p>
            </div>
            <div className="max-w-[550px]">
              <p className="tablet:text-[24px] desktop:text-[26px] mt-[15px] text-[22px] font-medium text-primary">
                Learn How to Grow Yourself
              </p>
              <p className="tablet:text-[18px] desktop:text-[20px] text-cityRain">
                Sed ut perspiciatis unde omnis iste natus error sit voluptat
                accusantium doloremque laudantium. Sed ut perspiciatis.
              </p>
            </div>
            <div className="max-w-[550px]">
              <p className="tablet:text-[24px] desktop:text-[26px] mt-[15px] text-[22px] font-medium text-primary">
                Farming Strategies of Today
              </p>
              <p className="tablet:text-[18px] desktop:text-[20px] text-cityRain">
                Sed ut perspiciatis unde omnis iste natus error sit voluptat
                accusantium doloremque laudantium. Sed ut perspiciatis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Eco Friendly */}
      <section className="tablet:py-[100px] bg-organicBgClr tablet:flex tablet:items-center tablet:justify-between tablet:gap-[35px] desktop:gap-[70px]">
        <div className="mt-[35px] flex w-full justify-center bg-[url('./assets/imgs/organik-img.png')] bg-cover bg-center bg-no-repeat py-[150px]">
          <Buttons variant="default">Organic Juice</Buttons>
        </div>
        <div className="mt-[35px] flex w-full justify-center bg-[url('./assets/imgs/organik-img2.png')] bg-cover bg-center bg-no-repeat py-[150px]">
          <Buttons variant="default">Organic Food</Buttons>
        </div>
        <div className="mt-[35px] flex w-full justify-center bg-[url('./assets/imgs/organik-img3.png')] bg-cover bg-center bg-no-repeat py-[150px]">
          <Buttons variant="default">Nuts Cookis</Buttons>
        </div>
      </section>

      {/* Content */}
      <section>
        <div className="container py-[90px]">
          <p className="text-fontClr font-yellowtail text-[20px]">News</p>
          <div className="flex items-center justify-between">
            <h2 className="tablet:max-w-[350px] max-w-[300px] text-[24px] font-bold text-primary">
              Discover weekly content about organic food, & more
            </h2>
            <span className="tablet:inline-block hidden">
              <Buttons variant="border">
                More News <ArrowRightIcon />
              </Buttons>
            </span>
          </div>
          <div className="tablet:flex tablet:justify-between tablet:gap-[20px]">
            <div className="desktop:relative desktop:w-full mt-[20px] rounded-lg bg-[url('./assets/imgs/content-img.png')] bg-cover bg-center bg-no-repeat px-[20px] py-[25px]">
              <div className="mb-[35px] ml-[16px] flex h-[50px] w-[50px] flex-col items-center rounded-full bg-white">
                <p className="font-semibold text-primary">25</p>
                <p className="font-semibold text-primary">Nov</p>
              </div>
              <div className="desktop:absolute bottom-[-40px] left-[50px] mx-auto rounded-[10px] bg-white px-[20px] py-[25px] shadow-md">
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
            <div className="desktop:relative desktop:w-full desktop:h-[350px] mt-[20px] rounded-lg bg-[url('./assets/imgs/content-img2.png')] bg-cover bg-center bg-no-repeat px-[20px] py-[25px]">
              <div className="mb-[35px] ml-[16px] flex h-[50px] w-[50px] flex-col items-center rounded-full bg-white">
                <p className="font-semibold text-primary">25</p>
                <p className="font-semibold text-primary">Nov</p>
              </div>
              <div className="desktop:absolute bottom-[-40px] left-[50px] mx-auto rounded-[10px] bg-white px-[20px] py-[25px] shadow-md">
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
          <div className="tablet:hidden mx-auto mt-[25px] w-[200px]">
            <Buttons variant="border">
              More News <ArrowRightIcon />
            </Buttons>
          </div>
        </div>
      </section>
    </div>
  );
};
