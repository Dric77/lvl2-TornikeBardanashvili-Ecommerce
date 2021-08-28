import { ADD_PRODUCT, FILTER_ADDED_PRODUCTS } from "./cartTypes";

export const setProduct = (products) => {
  return {
    type: ADD_PRODUCT,
    products
  };
};

// export const setFilterderProducts = (filteredProducts) => {
//   return {
//     type: FILTER_ADDED_PRODUCTS,
//     filteredProducts
//   };
// };
