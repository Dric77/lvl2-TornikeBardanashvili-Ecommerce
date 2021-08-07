import React, { useState } from "react";
import { useFormik } from "formik";
import { makeStyles } from "@material-ui/styles";
import API from "../../api";

const useStyle = makeStyles((theme) => ({
  form: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
}));

function AddProductForm({ products, setProducts, setAdedStatus }) {
  const classes = useStyle();
  const [addedStatus, setAddedStatus] = useState();

  let sendDataToAPI = (values) => {
    setProducts([...products, values]);
    API.addProduct(values).then((res) => {
      if (res.status === 200) setAddedStatus(true);
    });
  };

  const formik = useFormik({
    initialValues: {
      id: 31,
      title: "",
      price: "",
      category: "",
      description: "",
    },
    onSubmit: (values) => {
      let data = JSON.stringify(values, null, 2);
      sendDataToAPI(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className={classes.form}>
      <label htmlFor="title">Title</label>
      <input
        id="title"
        name="title"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.title}
      />

      <label htmlFor="price">Price</label>
      <input
        id="price"
        name="price"
        type="number"
        onChange={formik.handleChange}
        value={formik.values.price}
      />

      <label htmlFor="category">Category</label>
      <input
        id="category"
        name="category"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.category}
      />

      <label htmlFor="description">Description</label>
      <textarea
        id="description"
        name="description"
        type="text"
        rows="4"
        onChange={formik.handleChange}
        value={formik.values.description}
      />

      {/* <label htmlFor="image">image</label>
      <input
        id="image"
        name="image"
        type="file"
        onChange={formik.handleChange}
        value={formik.values.image}
      /> */}

      <button type="submit">Submit</button>
    </form>
  );
}

export default AddProductForm;
