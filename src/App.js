import { ThemeProvider } from "@material-ui/styles";
import "./App.scss";
import ProductPage from "./Pages/ProductPage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import theme from "./CutumTheme";
import SingleProduct from "./Pages/singleProduct/SingleProduct.js";
import { useState } from "react";
import Home from "./Pages/Home";
import Leyout from "./Leyout.js";
import { HOME, PRODUCT_LIST, SINGLE_PRODUCT } from "./routes.js";

function App() {
  const [data, setData] = useState([
    {
      title: "Black denim jacket1",
      price: "99,99",
      disCountPrice: "21,99",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, sapiente illo. Sit error voluptas repellat rerum quidem, soluta enim perferendis voluptates laboriosam. Distinctio, officia quis dolore quos sapiente tempore alias.",
      category: "Shirt",
      reviewCount: 4,
      review: 3,
      model: "Shirt 5407x",
      color: "Blue",
      delivery: "USA, Europe",
      size: ["small", "medium", "large"],
      img: "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15a.jpg",
      imgGroup: [
        {
          imgUrl:
            "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12a.jpg",
          color: "blue"
        },
        {
          imgUrl:
            "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13a.jpg",
          color: "red"
        },
        {
          imgUrl:
            "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14a.jpg",
          color: "gray"
        },
        {
          imgUrl:
            "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15a.jpg",
          color: "black"
        }
      ],
      id: 1
    },
    {
      title: "Black denim jacket2",
      price: "99,99",
      disCountPrice: false,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, sapiente illo. Sit error voluptas repellat rerum quidem, soluta enim perferendis voluptates laboriosam. Distinctio, officia quis dolore quos sapiente tempore alias.",
      category: "Shirt",
      reviewCount: 7,
      review: 2,
      model: "Shirt 5407x",
      color: "Blue",
      delivery: "USA, Europe",
      size: ["small", "medium", "large"],
      img: "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15a.jpg",
      imgGroup: [
        {
          imgUrl:
            "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12a.jpg",
          color: "blue"
        },
        {
          imgUrl:
            "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13a.jpg",
          color: "red"
        },
        {
          imgUrl:
            "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14a.jpg",
          color: "gray"
        },
        {
          imgUrl:
            "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15a.jpg",
          color: "black"
        }
      ],
      id: 2
    },
    {
      title: "Black denim jacket3",
      price: "99",
      disCountPrice: false,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, sapiente illo. Sit error voluptas repellat rerum quidem, soluta enim perferendis voluptates laboriosam. Distinctio, officia quis dolore quos sapiente tempore alias.",
      category: "Shirt",
      reviewCount: 4,
      review: 5,
      model: "Shirt 5407x",
      color: "Blue",
      delivery: "USA, Europe",
      size: ["small", "medium", "large"],
      img: "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15a.jpg",
      imgGroup: [
        {
          imgUrl:
            "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12a.jpg",
          color: "blue"
        },
        {
          imgUrl:
            "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13a.jpg",
          color: "red"
        },
        {
          imgUrl:
            "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14a.jpg",
          color: "gray"
        },
        {
          imgUrl:
            "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15a.jpg",
          color: "black"
        }
      ],
      id: 3
    },
    {
      title: "Black denim jacket4",
      price: "59,21",
      disCountPrice: "31,99",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, sapiente illo. Sit error voluptas repellat rerum quidem, soluta enim perferendis voluptates laboriosam. Distinctio, officia quis dolore quos sapiente tempore alias.",
      category: "Shirt",
      reviewCount: 10,
      review: 4,
      model: "Shirt 5407x",
      color: "Blue",
      delivery: "USA, Europe",
      size: ["small", "medium", "large"],
      img: "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15a.jpg",
      imgGroup: [
        {
          imgUrl:
            "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12a.jpg",
          color: "blue"
        },
        {
          imgUrl:
            "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13a.jpg",
          color: "red"
        },
        {
          imgUrl:
            "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14a.jpg",
          color: "gray"
        },
        {
          imgUrl:
            "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15a.jpg",
          color: "black"
        }
      ],
      id: 4
    },
    {
      title: "Black denim jacket5",
      price: "99,18",
      disCountPrice: false,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, sapiente illo. Sit error voluptas repellat rerum quidem, soluta enim perferendis voluptates laboriosam. Distinctio, officia quis dolore quos sapiente tempore alias.",
      category: "Shirt",
      reviewCount: 2,
      review: 1,
      model: "Shirt 5407x",
      color: "Blue",
      delivery: "USA, Europe",
      size: ["small", "medium", "large"],
      img: "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15a.jpg",
      imgGroup: [
        {
          imgUrl:
            "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12a.jpg",
          color: "blue"
        },
        {
          imgUrl:
            "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13a.jpg",
          color: "red"
        },
        {
          imgUrl:
            "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14a.jpg",
          color: "gray"
        },
        {
          imgUrl:
            "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15a.jpg",
          color: "black"
        }
      ],
      id: 5
    }
  ]);

  const [addedItem, setAddedItem] = useState([]);
  const [shopedItemData, setShopedItemData] = useState({
    color: "",
    quantity: 1,
    size: "",
    price: 0
  });

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Router>
          <Leyout addedItem={addedItem} setAddedItem={setAddedItem}>
            <Switch>
              <Route path={PRODUCT_LIST}>
                {" "}
                <ProductPage data={data} />
              </Route>
              <Route path={SINGLE_PRODUCT}>
                {" "}
                <SingleProduct
                  setAddedItem={setAddedItem}
                  addedItem={addedItem}
                  data={data}
                  setShopedItemData={setShopedItemData}
                  shopedItemData={shopedItemData}
                />
              </Route>
              <Route path={HOME}>
                {" "}
                <Home />{" "}
              </Route>
            </Switch>
          </Leyout>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
