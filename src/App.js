import ItemsPage from "./page/ItemsPage";
import MainPage from "./page/MainPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        {/* <Route path="/" element={<ItemsPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
