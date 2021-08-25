import API from "../../api";
import { setProduct, setTotalCount, setTotalPrice } from "./cartActionCreators";

export const addProduct = (singleData) => (dispacth) => {
  API.getSingleProduct(singleData.id).then((data) => {
    dispacth(setProduct(data));
    dispacth(setTotalCount());
    dispacth(setTotalPrice());
  });
};
