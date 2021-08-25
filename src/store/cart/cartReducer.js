import { ADD_PRODUCT, ADD_TOTAL_COUNT, ADD_TOTAL_PRICE } from "./cartTypes";

const initialState = {
  products: [],
  totalCount: 0,
  totalPrice: 0
};

export const cart = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      if (state.products.length > 0) {
        state.products.map((el) => {
          console.log(el);
          if (el.id === action.product.id) {
            return (el.productCount += 1);
          } else {
            return {
              ...state,
              products: state.products.push({
                ...action.product,
                productCount: 1
              })
            };
          }
        });
      } else {
        return {
          ...state,
          products: [{ ...action.product, productCount: 1 }]
        };
      }
    case ADD_TOTAL_COUNT:
    // return {
    //   ...state,
    //   totalCount: state.totalCount + 1
    // };
    case ADD_TOTAL_PRICE:
    // if (state.products[0]) {
    //   state.products.map((el) => {
    //     return el.price * el.productCount;
    //   });
    // } else {
    //   return action.product.price;
    // }
    default:
      return state;
  }
};
