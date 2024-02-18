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
      <section className="bg-[url('./assets/imgs/home-hero-bg.jpg')] bg-cover bg-center bg-no-repeat py-[90px] tablet:py-[120px] desktop:py-[150px]">
        <div className="container">
          <p className="font-yellowtail text-[20px] text-fontClr tablet:text-[25px] desktop:text-[30px]">
            100% Natural Food
          </p>
          <h1 className="mb-[23px] max-w-[330px] text-[32px] font-bold text-primary tablet:max-w-[295px] tablet:text-[40px] desktop:max-w-[350px] desktop:text-[48px]">
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
        <div className="container gap-[20px] tablet:flex tablet:items-center">
          <div className="mb-[20px] w-full rounded-[25px] bg-[url('./assets/imgs/sale-img.png')] bg-cover bg-center bg-no-repeat py-[80px] pl-[15px]">
            <p className="font-yellowtail text-[20px] text-white desktop:text-[26px]">
              Natural!!
            </p>
            <h2 className="w-[200px] text-[26px] font-bold text-white desktop:text-[32px]">
              Get Garden Fresh Fruits
            </h2>
          </div>
          <div className="mb-[20px] w-full rounded-[25px] bg-[url('./assets/imgs/sale-img2.png')] bg-cover bg-center bg-no-repeat py-[80px] pl-[15px]">
            <p className="font-yellowtail text-[20px] text-fontClr desktop:text-[26px]">
              Offer!!
            </p>
            <h2 className="w-[200px] text-[26px] font-bold text-primary desktop:w-[300px] desktop:text-[32px]">
              Get 10% off on Vegetables
            </h2>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="bg-doctor py-[40px]">
        <div className="container desktop:flex desktop:items-center">
          <img
            className="mx-auto max-w-[300px] tablet:max-w-[500px] desktop:max-w-[600px]"
            src={AboutUsImg}
            alt="img"
          />
          <div className="mt-[20px]">
            <p className="font-yellowtail text-[24px] text-fontClr">About Us</p>
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
            <p className="font-yellowtail text-[20px] text-fontClr tablet:text-[24px] desktop:text-[30px]">
              Categories
            </p>
            <p className="text-[22px] font-extrabold text-primary tablet:text-[26px] desktop:text-[34px]">
              Our Products
            </p>
          </div>
          <div className="mb-[80px] grid grid-cols-ourProductCols justify-items-center gap-[20px]">
            {OurProductData.map((item) => (
              <OurProductCard key={item.id} {...item} />
            ))}
          </div>
          <div className="mx-auto max-w-[190px]">
            <NavLink to="/shop">
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
          <p className="desktop:30px font-yellowtail text-[22px] text-fontClr tablet:text-[26px]">
            Testimonial
          </p>
          <h2 className="mb-[20px] text-[26px] font-extrabold text-primary tablet:text-[30px] desktop:text-[34px]">
            What Our Customer Saying?
          </h2>
          <img
            className="mx-auto mb-[10px] h-auto w-full max-w-[80px] tablet:max-w-[120px]"
            src={TestimonialProfileImg}
            alt="Profile"
          />
          <Raiting />
          <p className="mx-auto mt-[15px] max-w-[700px] text-cityRain tablet:text-[18px]">
            Simply dummy text of the printing and typesetting industry. Lorem
            Ipsum simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been.
          </p>
          <p className="tablet:htext-[24px] mt-[15px] text-[20px] font-bold text-primary">
            Sara Taylor
          </p>
          <p className="tablet:[18px] mb-[15px] text-cityRain">Consumer</p>
          <div className="mx-auto mb-[80px] flex max-w-[50px] items-center gap-[6px]">
            <span className="block h-[10px] w-[10px] rounded-full bg-weatheredStone"></span>
            <span className="block h-[10px] w-[10px] rounded-full bg-weatheredStone"></span>
            <span className="block h-[10px] w-[10px] rounded-full bg-weatheredStone"></span>
          </div>

          <div className="default-silverLake default-t-[2px] flex flex-wrap items-center justify-between gap-y-[20px] pt-[90px] desktop:mx-auto desktop:max-w-[1000px]">
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
            <p className="font-yellowtail text-[24px] font-medium text-fontClr tablet:text-[28px] desktop:text-[36px]">
              Offer
            </p>
            <div className="flex items-center justify-between">
              <h2 className="mt-[10px] text-[26px] font-extrabold text-white tablet:text-[32px] desktop:text-[38px]">
                We Offer Organic For You
              </h2>
              <NavLink to="/shop" className="hidden tablet:inline-block">
                <Buttons variant="secondary">
                  View All Products
                  <ArrowRightIcon />
                </Buttons>
              </NavLink>
            </div>
          </div>
          <div className="mt-[30px] grid grid-cols-ourProductCols justify-items-center gap-[20px]">
            {OfferData.map((item) => (
              <OfferCard key={item.id} {...item} />
            ))}
          </div>
          <div className="mx-auto mt-[35px] w-[250px] tablet:hidden">
            <NavLink to="/shop">
              <Buttons variant="secondary">
                View All Products
                <ArrowRightIcon />
              </Buttons>
            </NavLink>
          </div>
        </div>
      </section>

      {/* Eco Friendly */}
      <section className="py-[30px] desktop:p-0">
        <div className="container desktop:flex desktop:items-center desktop:justify-between">
          <img
            className="mx-auto max-w-[300px] tablet:max-w-[500px] desktop:m-0 desktop:h-[600px] desktop:max-w-[600px]"
            src={FriendlyImg}
            alt="img"
          />
          <div>
            <p className="mt-[25px] font-yellowtail text-[22px] text-fontClr tablet:text-[24px] desktop:m-0 desktop:text-[28px]">
              Eco Friendly
            </p>
            <h2 className="w-[320px] text-[26px] font-extrabold text-primary tablet:text-[30px] desktop:text-[34px]">
              Econis is a Friendly Organic Store
            </h2>
            <div className="max-w-[550px]">
              <p className="mt-[15px] text-[20px] font-medium text-primary tablet:text-[22px] desktop:text-[24px]">
                Start with Our Company First
              </p>
              <p className="text-cityRain desktop:text-[18px]">
                Sed ut perspiciatis unde omnis iste natus error sit voluptat
                accusantium doloremque laudantium. Sed ut perspiciatis.
              </p>
            </div>
            <div className="max-w-[550px]">
              <p className="mt-[15px] text-[20px] font-medium text-primary tablet:text-[22px] desktop:text-[24px]">
                Learn How to Grow Yourself
              </p>
              <p className="text-cityRain desktop:text-[18px]">
                Sed ut perspiciatis unde omnis iste natus error sit voluptat
                accusantium doloremque laudantium. Sed ut perspiciatis.
              </p>
            </div>
            <div className="max-w-[550px]">
              <p className="mt-[15px] text-[20px] font-medium text-primary tablet:text-[22px] desktop:text-[24px]">
                Farming Strategies of Today
              </p>
              <p className="text-cityRain desktop:text-[18px]">
                Sed ut perspiciatis unde omnis iste natus error sit voluptat
                accusantium doloremque laudantium. Sed ut perspiciatis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Eco Friendly */}
      <section className="bg-organicBgClr tablet:flex tablet:items-center tablet:justify-between tablet:gap-[35px] tablet:py-[100px] desktop:gap-[70px]">
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
          <p className="font-yellowtail text-[20px] text-fontClr">News</p>
          <div className="flex items-center justify-between">
            <h2 className="max-w-[300px] text-[24px] font-bold text-primary tablet:max-w-[350px]">
              Discover weekly content about organic food, & more
            </h2>
            <NavLink to="/news" className="hidden tablet:inline-block">
              <Buttons variant="border">
                More News <ArrowRightIcon />
              </Buttons>
            </NavLink>
          </div>
          <div className="tablet:flex tablet:justify-between tablet:gap-[20px]">
            <div className="mt-[20px] rounded-lg bg-[url('./assets/imgs/content-img.png')] bg-cover bg-center bg-no-repeat px-[20px] py-[25px] desktop:relative desktop:w-full">
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
            <div className="mt-[20px] rounded-lg bg-[url('./assets/imgs/content-img2.png')] bg-cover bg-center bg-no-repeat px-[20px] py-[25px] desktop:relative desktop:h-[350px] desktop:w-full">
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
          <div className="mx-auto mt-[25px] w-[200px] tablet:hidden">
            <NavLink to="news">
              <Buttons variant="border">
                More News <ArrowRightIcon />
              </Buttons>
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
};
