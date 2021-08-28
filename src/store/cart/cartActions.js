import API from "../../api";
import { setProduct } from "./cartActionCreators";

export const addProduct = (singleData) => (dispacth) => {
  API.getSingleProduct(singleData.id).then((data) => {
    dispacth(setProduct(data));
  });
};
