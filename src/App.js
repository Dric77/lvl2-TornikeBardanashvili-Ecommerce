import { ThemeProvider } from "@material-ui/styles";
import "./App.scss";
import ProductPage from "./Pages/ProductPage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import theme from "./CutumTheme";
import fullData from "./fullData.js";
import SingleProduct from "./Pages/singleProduct/SingleProduct.js";
import { useEffect, useState } from "react";
import Home from "./Pages/Home";
import Leyout from "./Leyout.js";
import { HOME, PRODUCT_LIST, SINGLE_PRODUCT } from "./routes.js";
import API from "./api.js";

function App() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [addedItem, setAddedItem] = useState([]);
  const [shopedItemData, setShopedItemData] = useState({
    color: "",
    quantity: 1,
    size: "",
    price: 0
  });
  const [productCount, setProductCount] = useState(1);

  useEffect(() => {
    API.getProducts("products", setData).finally(() => setLoading(false));
  }, []);

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Router>
          <Leyout
            addedItem={addedItem}
            setAddedItem={setAddedItem}
            productCount={productCount}
          >
            <Switch>
              <Route path={PRODUCT_LIST}>
                {" "}
                <ProductPage data={data} loading={loading} />
              </Route>
              <Route path={SINGLE_PRODUCT}>
                {" "}
                <SingleProduct
                  setAddedItem={setAddedItem}
                  addedItem={addedItem}
                  data={data}
                  setShopedItemData={setShopedItemData}
                  shopedItemData={shopedItemData}
                  productCount={productCount}
                  setProductCount={setProductCount}
                />
              </Route>
              <Route path={HOME}>
                <Redirect to={PRODUCT_LIST} />
                <Home />
              </Route>
            </Switch>
          </Leyout>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
