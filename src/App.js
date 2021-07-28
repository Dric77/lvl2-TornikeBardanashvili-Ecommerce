import {
  ADMIN,
  HOME,
  PRODUCT_LIST,
  SIGN_IN,
  SIGN_UP,
  SINGLE_PRODUCT
} from "./routes.js";
import { ThemeProvider } from "@material-ui/styles";
import "./App.scss";
import { Switch, Route, Redirect, useLocation } from "react-router-dom";
import theme from "./CutumTheme";
import ProductPage from "./Pages/ProductPage";
import Home from "./Pages/Home";
import SingleProduct from "./Pages/singleProduct/SingleProduct.js";
import { useContext, useEffect, useState } from "react";
import MainLeyout from "./leyouts/MainLeyout";
import Admin from "./Pages/admin/Admin.js";
import AdminLeyout from "./leyouts/adminLeyout.js";
import TestComponent from "./Components/TestComponent.js";
import SignInPage from "./Pages/signIn/SignInPage.js";
import AuthContext from "./Components/context/auth-context.js";
import RegistrationPage from "./Pages/resgitration/RegistrationPage.js";

function App() {
  const [addedItem, setAddedItem] = useState([]);
  const [productCount, setProductCount] = useState(1);
  const [shopedItemData, setShopedItemData] = useState({
    color: "",
    quantity: 1,
    size: "",
    price: 0
  });
  const [currentPage, setCurrentPage] = useState(1);

  const { pathname } = useLocation();
  const ctx = useContext(AuthContext);

  useEffect(() => {
    window.scroll(0, 0);
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
              {ctx.isLoggedIn && <Redirect to={PRODUCT_LIST} />}
              <SignInPage />
            </Route>
            <Route path={SIGN_UP}>
              <RegistrationPage />
              {ctx.isLoggedIn && <Redirect to={PRODUCT_LIST} />}
            </Route>
          </MainLeyout>
        </Switch>
      </ThemeProvider>
    </div>
  );
}

export default App;
