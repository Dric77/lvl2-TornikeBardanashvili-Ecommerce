import { serialize } from "./serialize.js";

const API = {
  baseUrl: "https://fakestoreapi.com/",
  getData: function (productUrl, data, method = "GET") {
    return fetch(this.baseUrl + productUrl, {
      method: method, // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json"
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
  },
  getProducts: function (param, setData) {
    return this.getData(param, setData)
      .then((res) => res.json())
      .then((json) => {
        setData(
          json.map((product) => {
            return serialize(product);
          })
        );
      })
      .catch((err) => console.log(err));
  },
  getSingleProduct: function (id, setSingleData) {
    return this.getData(`/products/${id}`, setSingleData)
      .then((res) => res.json())
      .then((product) => {
        setSingleData(serialize(product));
      });
  }
};

export default API;
