import { ThemeProvider } from "@material-ui/styles";
import "./App.scss";
import ProductPage from "./Pages/ProductPage";
import theme from "./CutumTheme";

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <ProductPage />
      </ThemeProvider>
    </div>
  );
}

export default App;
