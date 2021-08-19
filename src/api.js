import { serialize } from "object-to-formdata";

const API = {
  baseUrl: "http://159.65.126.180/api/",
  getData: function (url, method = "GET", data, isFile) {
    let headers = {};

    if (!isFile) {
      headers = {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("userToken")}`,
      };
    } else {
      headers = {
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("userToken")}`,
      };
    }

    return fetch(this.baseUrl + url, {
      method: method, // *GET, POST, PUT, DELETE, etc.
      headers,
      body: isFile ? serialize(data) : JSON.stringify(data), // body data type must match "Content-Type" header
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return res.text().then((text) => {
        throw text;
      });
    });
  },
  getAllData: function (param, method, setStatus) {
    return this.getData(param, method).then((json) => json);
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
          lastname: addedUser.lastname,
        },
        address: {
          city: addedUser.city,
          street: addedUser.street,
        },
        phone: addedUser.phone,
      }),
    })
      .then((res) => {
        setStatus(res);
        return res.json();
      })
      .then((json) => console.log("added data to base", json))
      .catch((e) => console.log(e));
  },

  updateUserProfile: function (userId, newUserInfo) {
    return this.getData(`users/${userId}/update`, "POST", newUserInfo, true);
  },

  addProduct: function (addedProduct) {
    return fetch(this.baseUrl + "products", {
      method: "POST",
      body: JSON.stringify({
        id: 100,
        title: addedProduct.title,
        price: addedProduct.price,
        category: addedProduct.category,
        description: addedProduct.description,
      }),
    });
  },
};

export default API;
