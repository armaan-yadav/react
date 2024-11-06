import { createContext, useContext } from "react";
import data from "../../constants/data";

export const EcomProductsContext = createContext([...data]);
export const EcomFilteredProductsContext = createContext();
export const EcomCategoriesContext = createContext();
export const EcomColorContext = createContext();
export const EcomViewsContext = createContext();

export const useEcomProductsContext = () => useContext(EcomProductsContext);
export const useEcomFilteredProductsContext = () =>
  useContext(EcomFilteredProductsContext);
export const useEcomCategoriesContext = () => useContext(EcomCategoriesContext);
export const useEcomColorContext = () => useContext(EcomColorContext);
export const useEcomViewsContext = () => useContext(EcomViewsContext);
