import { serialize } from "./serializers/serialize.js";
import { serilizeAddUser } from "./serializers/SerilizeAddUser";

const API = {
  baseUrl: "http://159.65.126.180/api/",
  getData: function (productUrl, method = "GET", data) {
    return fetch(this.baseUrl + productUrl, {
      method: method, // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
  },
  getAllData: function (param, method, setStatus) {
    return this.getData(param, method)
      .then((res) => {
        if (setStatus) {
          setStatus(res);
        }
        return res.json();
      })
      .then((json) => json);
  },
  authUser: function (param, method, data) {
    return this.getData(param, method, data);
  },
  addData: function (addedUser, setStatus) {
    fetch(this.baseUrl + "users", {
      method: "POST",
      body: JSON.stringify({
        email: addedUser.email,
        username: addedUser.username,
        password: addedUser.password,
        name: {
          firstname: addedUser.firstname,
          lastname: addedUser.lastname
        },
        address: {
          city: addedUser.city,
          street: addedUser.street
        },
        phone: addedUser.phone
      })
    })
      .then((res) => {
        setStatus(res);
        return res.json();
      })
      .then((json) => console.log("added data to base", json))
      .catch((e) => console.log(e));
  },
  deletUser: function (param, setStatus, method) {
    return this.getData(param, setStatus, method)
      .then((res) => {
        setStatus(res.status);
        return res.json();
      })
      .then((json) => {
        return json;
      });
  },
  addProduct: function (addedProduct) {
    return fetch(this.baseUrl + "products", {
      method: "POST",
      body: JSON.stringify({
        id: 100,
        title: addedProduct.title,
        price: addedProduct.price,
        category: addedProduct.category,
        description: addedProduct.description
      })
    });
  }
};

export default API;
