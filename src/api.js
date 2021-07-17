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
  },
  getAllUsers: function (param, setAllusers) {
    return this.getData(param, setAllusers)
      .then((res) => res.json())
      .then((users) => {
        setAllusers(users);
      })
      .catch((e) => console.log(e));
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
      .then((json) => console.log("console from api", json))
      .catch((e) => console.log(e));
  },
  deletUser: function (param, setStatus, method) {
    return this.getData(param, setStatus, method)
      .then((res) => {
        setStatus(res.status);
        return res.json();
      })
      .then((json) => console.log(json));
  },
  addProduct: function (addedProduct, setStatus) {
    return fetch(this.baseUrl + "productsd", {
      method: "POST",
      body: JSON.stringify({
        id: 100,
        title: addedProduct.title,
        price: addedProduct.price,
        category: addedProduct.category,
        description: addedProduct.description
      })
    })
      .then((res) => {
        setStatus(res);
        return res.json();
      })
      .then((json) => console.log("console from api", json))
      .catch((e) => console.log(e));
  }
};

export default API;
