import { ThemeProvider } from "@material-ui/styles";
import { useEffect, useState } from "react";
import { Redirect, Route, Switch, useLocation } from "react-router-dom";
import "./App.scss";
import TestComponent from "./Components/TestComponent.js";
import theme from "./CutumTheme";
import AdminLeyout from "./leyouts/adminLeyout.js";
import MainLeyout from "./leyouts/MainLeyout";
import Admin from "./Pages/admin/Admin.js";
import Home from "./Pages/Home";
import ProductPage from "./Pages/ProductPage";
import RegistrationPage from "./Pages/resgitration/RegistrationPage.js";
import SignInPage from "./Pages/signIn/SignInPage.js";
import SingleProduct from "./Pages/singleProduct/SingleProduct.js";
import {
  ADMIN,
  HOME,
  PRODUCT_LIST,
  SIGN_IN,
  SIGN_UP,
  SINGLE_PRODUCT,
} from "./routes.js";
import PriviteRoute from "./Components/PrivitateRoute";
import { getDataWithToken } from "./store/user/user-actions";
import { useDispatch } from "react-redux";
import { USER_PROFILE } from "./routes";
import UserProfile from "./Pages/userPage/UserProfile";

function App() {
  const [addedItem, setAddedItem] = useState([]);
  const [productCount, setProductCount] = useState(1);
  const [shopedItemData, setShopedItemData] = useState({
    color: "",
    quantity: 1,
    size: "",
    price: 0,
  });
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();

  const { pathname } = useLocation();
  let token = localStorage.getItem("userToken");

  useEffect(() => {
    window.scroll(0, 0);
    if (token) {
      dispatch(getDataWithToken());
    }
  }, []);

  return (
    <div className="App">
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
            <Route path={PRODUCT_LIST.replace("1", currentPage)}>
              <ProductPage
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
            </Route>
            <Route path={SINGLE_PRODUCT}>
              <SingleProduct
                setAddedItem={setAddedItem}
                addedItem={addedItem}
                setShopedItemData={setShopedItemData}
                shopedItemData={shopedItemData}
                productCount={productCount}
                setProductCount={setProductCount}
              />
            </Route>
            <Route path={HOME} exact>
              <Redirect to={PRODUCT_LIST} />
              <Home />
            </Route>
            <Route path={SIGN_IN}>
              <PriviteRoute component={SignInPage} path={SIGN_IN} exact />
            </Route>
            <Route path={USER_PROFILE} component={UserProfile} />
            <Route path={SIGN_UP}>
              <PriviteRoute component={RegistrationPage} path={SIGN_UP} exact />
            </Route>
          </MainLeyout>
        </Switch>
      </ThemeProvider>
    </div>
  );
}

export default App;
