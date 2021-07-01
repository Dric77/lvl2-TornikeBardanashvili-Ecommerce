import { ThemeProvider } from "@material-ui/styles";
import "./App.css";
import ProductPage from "./Pages/ProductPage";
import theme from "./CutumTheme";

function App() {
  return (
    <div className="App">
      <ProductPage />
    </div>
  );
}

export default App;
