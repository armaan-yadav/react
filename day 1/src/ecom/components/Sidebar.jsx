import React, { useState } from "react";
import {
  useEcomCategoriesContext,
  useEcomColorContext,
  useEcomFilteredProductsContext,
  useEcomProductsContext,
} from "../context/Context";

const Sidebar = () => {
  const { categories, currentCategory, setCurrentCategory } =
    useEcomCategoriesContext();

  const { currentColor, colors, setCurrentColor } = useEcomColorContext();

  const { filteredProducts, setFilteredProducts } =
    useEcomFilteredProductsContext();
  const products = useEcomProductsContext();

  const filterByColor = (color) => {
    var includecategory = currentCategory != "All";

    setFilteredProducts(
      products.filter((e) => {
        return includecategory
          ? e.color == color &&
              e.category.toLowerCase() == currentCategory.toLowerCase()
          : e.color == color;
      })
    );
  };
  const filterByCategory = (category) => {
    var includeColor = currentColor != "All";
    setFilteredProducts(
      products.filter((e) => {
        return includeColor
          ? e.category.toLowerCase() == category && e.color == currentColor
          : e.category.toLowerCase() == category;
      })
    );
  };

  return (
    <div className="h-screen  w-[20%] flex flex-col items-center  justify-center px-10">
      <div className="flex flex-col  items-start  w-full my-5">
        <h1 className="text-2xl font-bold">Category</h1>
        {categories.map((e, index) => (
          <div className="flex gap-2" key={index}>
            <input
              type="radio"
              name="category"
              id={`category-${index}`}
              value={e}
              checked={e == currentCategory}
              onChange={(e) => {
                setCurrentCategory(e.target.value);
                filterByCategory(e.target.value.toLowerCase());
              }}
            />
            <label htmlFor={`category-${index}`}>{e}</label>
          </div>
        ))}
      </div>
      <div className="flex flex-col  items-start w-full">
        <h1 className="text-2xl font-bold">Color</h1>
        {colors.map((e, index) => (
          <div className="flex gap-2" key={index}>
            <input
              type="radio"
              name="color"
              id={`color-${index}`}
              value={e}
              checked={e == currentColor}
              onChange={(e) => {
                setCurrentColor(e.target.value);
                filterByColor(e.target.value.toLowerCase());
              }}
            />
            <label htmlFor={`color-${index}`}>
              {e.charAt(0).toUpperCase() + e.slice(1).toLowerCase()}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
