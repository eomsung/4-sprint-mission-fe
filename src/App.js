import { NavigationBar } from "./Component/NavigationBar";
import { BestProduct } from "./Component/BestProduct";
import { useState, useEffect } from "react";
import { getProductList } from "./Api/ProductsService";
import { SellingProduct } from "./Component/SellingProduct";
import { ProductMenu } from "./Component/ProductMenu";
import { PageButton } from "./Component/PageButton";
import { Footer } from "./Component/Footer";

const PAGESIZEBEST = 4;
const PAGESIZESELLING = 10;
const DEFAULTORDER = "recent";
const FAVORITEORDER = "favorite";
function App() {
  const [order, setOrder] = useState(DEFAULTORDER);
  const [Bestitems, setBestItems] = useState([]);
  const [Sellingitems, setSellingItems] = useState([]);
  const [BestPage, setBestPage] = useState(1);
  const [SellingPage, setSellingPage] = useState(1);

  useEffect(() => {
    handleLoadBest({
      order: FAVORITEORDER,
      page: BestPage,
      pageSize: PAGESIZEBEST,
    });
    handleLoadSelling({
      order: order,
      page: SellingPage,
      pageSize: PAGESIZESELLING,
    });
  }, [order]);

  const handleLoadBest = async (Options) => {
    let data = await getProductList(Options);
    setBestItems(data);
  };

  const handleLoadSelling = async (Options) => {
    let data = await getProductList(Options);
    setSellingItems(data);
  };

  const handleOrderChange = (order) => {
    setOrder(order);
  };

  const loadNextSellingPage = async () => {
    setSellingPage((prevPage) => prevPage + 2);
  };

  return (
    <div>
      <NavigationBar></NavigationBar>
      <BestProduct items={Bestitems.list}></BestProduct>
      <div>
        <ProductMenu handleOrderChange={handleOrderChange} />
        <SellingProduct items={Sellingitems.list} />
      </div>
      <PageButton />
      <Footer />
    </div>
  );
}

export default App;
