import { NavigationBar } from "./Component/NavigationBar";
import { BestProduct } from "./Component/BestProduct";
import { useState, useEffect } from "react";
import { getProductList } from "./Api/ProductsService";

const PAGESIZE = 4;

function App() {
  const [items, setItems] = useState([]);

  const handleLoad = async (Options) => {
    let data = await getProductList(Options);
    console.log(typeof data);
    console.log(data);
    setItems(data);
  };

  useEffect(() => {
    handleLoad({ page: 5, pageSize: PAGESIZE });
  }, []);
  asd;
  return (
    <div>
      <NavigationBar></NavigationBar>
      <BestProduct items={items.list}></BestProduct>
    </div>
  );
}

export default App;
