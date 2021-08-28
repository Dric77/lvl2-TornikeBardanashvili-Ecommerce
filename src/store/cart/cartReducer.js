import { ADD_PRODUCT, FILTER_ADDED_PRODUCTS } from "./cartTypes";

const initialState = {
  products: []
};

export const cart = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        products: action.products
      };
    default:
      return state;
  }
};
