import { ThemeProvider } from "@material-ui/styles";
import "./App.scss";
import ProductPage from "./Pages/ProductPage";
import { Switch, Route, Redirect } from "react-router-dom";
import theme from "./CutumTheme";
import SingleProduct from "./Pages/singleProduct/SingleProduct.js";
import { useEffect, useState } from "react";
import Home from "./Pages/Home";
import {
  ADMIN,
  HOME,
  PRODUCT_LIST,
  SIGN_IN,
  SINGLE_PRODUCT
} from "./routes.js";
import MainLeyout from "./leyouts/MainLeyout";
import Admin from "./Pages/admin/Admin.js";
import AdminLeyout from "./leyouts/adminLeyout.js";
import TestComponent from "./Components/TestComponent.js";
import SignInPage from "./Pages/signIn/SignInPage.js";
import AuthContext from "./Components/context/auth-context.js";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [addedItem, setAddedItem] = useState([]);
  const [productCount, setProductCount] = useState(1);
  const [shopedItemData, setShopedItemData] = useState({
    color: "",
    quantity: 1,
    size: "",
    price: 0
  });
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalProduct: "",
    perPage: 5,
    totalPage: ""
  });

  useEffect(() => {
    const userLoggedInInfo = localStorage.getItem("isLoggedIn");

    if (userLoggedInInfo === "1") {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  return (
    <div className="App">
      <AuthContext.Provider
        value={{
          isLoggedIn: isLoggedIn,
          setIsLoggedin: setIsLoggedIn
        }}
      >
        <ThemeProvider theme={theme}>
          <Switch>
            <Route path="/test" exact>
              <TestComponent />
            </Route>
            <Route path={ADMIN}>
              <AdminLeyout>
                <Redirect to={ADMIN + "/products"} />
                <Admin />
              </AdminLeyout>
            </Route>
            <MainLeyout
              addedItem={addedItem}
              setAddedItem={setAddedItem}
              productCount={productCount}
            >
              <Route path={PRODUCT_LIST}>
                <ProductPage
                  pagination={pagination}
                  setPagination={setPagination}
                />
              </Route>
              <Route path={SINGLE_PRODUCT}>
                {" "}
                <SingleProduct
                  setAddedItem={setAddedItem}
                  addedItem={addedItem}
                  setShopedItemData={setShopedItemData}
                  shopedItemData={shopedItemData}
                  productCount={productCount}
                  setProductCount={setProductCount}
                />
              </Route>
              <Route path={SIGN_IN}>
                <SignInPage />
              </Route>
              <Route path={HOME} exact>
                <Redirect to={PRODUCT_LIST} />
                <Home />
              </Route>
            </MainLeyout>
          </Switch>
        </ThemeProvider>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
