import ItemsPage from "./page/ItemsPage";
import MainPage from "./page/MainPage";
import { RegistrationPage } from "./page/RegistrationPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="items" element={<ItemsPage />} />
        <Route path="registration" element={<RegistrationPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
