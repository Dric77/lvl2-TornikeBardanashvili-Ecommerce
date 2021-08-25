import {ADD_PRODUCT, ADD_TOTAL_COUNT, ADD_TOTAL_PRICE} from "./cartTypes";


export const setProduct = (product) => {
    return {
        type: ADD_PRODUCT,
        product
    }
};

export const setTotalCount = () => {
    return {
        type: ADD_TOTAL_COUNT,
    }
}

export  const setTotalPrice = (totalPrice) => {
    return {
        type: ADD_TOTAL_PRICE,
        totalPrice
    }
}