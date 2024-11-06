import React, { useContext, useState } from "react";
import Navbar from "./Navbar";
import Card from "./Card";

import {
  useEcomCategoriesContext,
  useEcomColorContext,
  useEcomFilteredProductsContext,
  useEcomProductsContext,
  useEcomViewsContext,
} from "../context/Context";

const Main = () => {
  const { currentView, setCurrentView, views } = useEcomViewsContext();

  const products = useEcomProductsContext();
  const { filteredProducts } = useEcomFilteredProductsContext();

  return (
    <div className=" w-full flex flex-col px-3">
      <Navbar />
      {/* //*Views Section */}
      <div>
        <h1 className="text-2xl font-bold">{currentView}</h1>
        <div className="flex items-center justify-start gap-4 my-4">
          {views.map((view, index) => (
            <span
              key={index}
              className={`px-4 py-1 border-[1px] border-gray-500 rounded-md text-sm  cursor-pointer ${
                currentView == view && "bg-black text-white"
              }`}
              onClick={(e) => setCurrentView(view)}
            >
              {view}
            </span>
          ))}
        </div>
      </div>

      {/* //*Product cards */}

      <div className=" w-full h-full grid grid-cols-5 overflow-auto gap-y-4">
        {filteredProducts.length == 0
          ? products.slice(0, 10).map((e, index) => {
              return <Card data={e} key={index} />;
            })
          : filteredProducts.map((e, index) => {
              return <Card data={e} key={index} />;
            })}
      </div>
    </div>
  );
};

export default Main;
