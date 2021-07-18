import { serialize } from "./serializers/serialize.js";
import { serilizeAddUser } from "./serializers/SerilizeAddUser";

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
        let serilizedData = [];
        json.map((product) => {
          serilizedData.push(serialize(product));
        });
        return serilizedData;
      });
  },
  getSingleProduct: function (id, setSingleData) {
    return this.getData(`/products/${id}`, setSingleData)
      .then((res) => res.json())
      .then((product) => {
        setSingleData(serialize(product));
      });
  },
  getAllUsers: function (param) {
    return this.getData(param)
      .then((res) => res.json())
      .then((users) => {
        return users;
      });
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
