import React from "react";
import { useParams } from "react-router-dom";

//// Import Component's:
import { Raiting } from "../../components/Rating-star";
import { Buttons } from "../../components/Btn";
import { MainHero } from "../../components/MainHero";

//// Import Icon's:
import { ArrowRightIcon } from "../../assets/icons/arrow-right-icon";

/////  Import Data's:
import { OurProductData } from "../../data/our-product-data";

export const ProductInner = () => {
  const { id } = useParams();

  const result = OurProductData.filter((item) => item.id == id);

  return (
    <section>
      <div className="bg-[url('./assets/imgs/product-inner-hero-img.png')] bg-cover bg-center bg-no-repeat">
        <MainHero title="Product Single" />
      </div>
      <div className="container pb-[45px]">
        {result.map((item) => (
          <>
            <div className="desktop:flex desktop:items-center desktop:justify-center desktop:gap-[100px]">
              <div className="relative mx-auto max-w-[300px] rounded-lg bg-doctor shadow-md tablet:h-[400px] tablet:max-w-[450px] desktop:m-0">
                <img src={item.img} alt="img" />
                <p className="absolute left-[15px] top-[15px] inline rounded-md bg-primary px-[10px] py-[5px] text-white">
                  {item.productType}
                </p>
              </div>

              <div>
                <h2 className="mt-[22px] text-[26px] font-bold text-primary tablet:mt-[38px] tablet:text-[28px] desktop:m-0 desktop:text-[32px]">
                  {item.title}
                </h2>
                <Raiting />
                <span className="my-[15px] flex items-center gap-[8px]">
                  <p className="text-[18px] text-fortressGrey line-through desktop:text-[22px]">
                    ${item.price}.00
                  </p>
                  <p className="text-[20px] font-bold text-primary desktop:text-[26px]">
                    ${item.salePrice}.00
                  </p>
                </span>
                <p className="mb-[25px] text-cityRain desktop:max-w-[600px]">
                  Simply dummy text of the printing and typesetting industry.
                  Lorem had ceased to been the industry's standard dummy text
                  ever since the 1500s, when an unknown printer took a galley.
                </p>
                <div className="flex items-center gap-2">
                  <p className="text-[18px] font-bold text-primary">
                    Quantity :
                  </p>
                  <input
                    className="h-[40px] w-[80px] rounded-[16px] border-[2px] border-primary px-[20px] text-[20px] outline-none"
                    type="number"
                  />
                </div>
                <div className="mt-[15px]">
                  <Buttons variant="primary">
                    Add To Card <ArrowRightIcon />
                  </Buttons>
                </div>
              </div>
            </div>

            <div className="mt-[55px] desktop:mt-[150px]">
              <div className="mx-auto mb-[25px] w-[190px]">
                <Buttons variant="primary">Description</Buttons>
              </div>
              <p className="text-center text-cityRain desktop:mx-auto desktop:max-w-[1000px]">
                Welcome to the world of natural and organic. Here you can
                discover the bounty of nature. We have grown on the principles
                of health, ecology, and care. We aim to give our customers a
                healthy chemical-free meal for perfect nutrition. It offers
                about 8–10% carbs. Simple sugars — such as glucose and fructose
                — make up 70% and 80% of the carbs in raw.
              </p>
            </div>
          </>
        ))}
      </div>
    </section>
  );
};
