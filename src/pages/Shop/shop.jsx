import React from "react";

///// Import Component's:
import { MainHero } from "../../components/MainHero";
import { ShopCard } from "../../components/Cards/ShopCards";

//// Import Data's:
import { ShopData } from "../../data/shop-data";

export const Shop = () => {
  return (
    <>
      <div className="bg-[url('./assets/imgs/shop-hero-img.png')] bg-cover bg-center bg-no-repeat">
        <MainHero title="Shop" />
      </div>
      <div className="container">
        <div className="mb-[80px] grid grid-cols-ourProductCols justify-items-center gap-[20px]">
          {ShopData.map((item) => (
            <ShopCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </>
  );
};
