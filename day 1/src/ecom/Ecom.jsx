import React, { useEffect, useState } from "react";
import Sidebar from "../ecom/components/Sidebar";
import Main from "../ecom/components/Main";
import {
  EcomCategoriesContext,
  EcomColorContext,
  EcomFilteredProductsContext,
  EcomProductsContext,
  EcomViewsContext,
} from "./context/Context";
import data from "../constants/data";

const Ecom = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const [currentCategory, setCurrentCategory] = useState("All");
  const [currentColor, setCurrentColor] = useState("All");
  const [currentView, setCurrentView] = useState("Recommended");

  useEffect(() => {
    setProducts(data);
  }, []);

  return (
    <EcomViewsContext.Provider
      value={{
        views: ["All Products", "Nike", "Adidas", "Puma", "Vans"],
        currentView,
        setCurrentView,
      }}
    >
      <EcomFilteredProductsContext.Provider
        value={{ filteredProducts, setFilteredProducts }}
      >
        <EcomColorContext.Provider
          value={{
            colors: ["All", "red", "blue", "green", "black", "white"],
            currentColor,
            setCurrentColor,
          }}
        >
          <EcomCategoriesContext.Provider
            value={{
              currentCategory,
              setCurrentCategory,
              categories: ["All", "Sneakers", "Flats", "Sandals", "Heels"],
            }}
          >
            <div className="h-screen flex">
              <Sidebar />
              <Main />
            </div>
          </EcomCategoriesContext.Provider>
        </EcomColorContext.Provider>
      </EcomFilteredProductsContext.Provider>
    </EcomViewsContext.Provider>
  );
};

export default Ecom;
