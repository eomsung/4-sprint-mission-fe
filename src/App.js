import { NavigationBar } from "./Component/NavigationBar";
import { BestProduct } from "./Component/BestProduct";
import { useState, useEffect } from "react";
import { getProductList } from "./Api/ProductsService";
import { SellingProduct } from "./Component/SellingProduct";
import { ProductMenu } from "./Component/ProductMenu";
import { PageButton } from "./Component/PageButton";
import { Footer } from "./Component/Footer";

const PAGESIZEBEST = 4;
const PAGESIZESELLING = 5;
const DEFAULTORDER = "recent";
const FAVORITEORDER = "favorite";
function App() {
  const [order, setOrder] = useState(DEFAULTORDER);
  const [Bestitems, setBestItems] = useState([]);
  const [Sellingitems, setSellingItems] = useState([]);
  const [SellingNextitems, setSellingNextItems] = useState([]);
  const [BestPage, setBestPage] = useState(1);
  const [SellingPage, setSellingPage] = useState(1);
  const [SellingNextPage, setSellingNextPage] = useState(2);

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
    handleLoadNextSelling({
      order: order,
      page: SellingNextPage,
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
  const handleLoadNextSelling = async (Options) => {
    let data = await getProductList(Options);
    setSellingNextItems(data);
  };

  const handleOrderChange = (order) => {
    setOrder(order);
  };

  const loadNextSellingPage = async () => {
    setSellingPage((prevPage) => prevPage + 2);
    setSellingNextItems((prevPage) => prevPage + 2);
  };

  return (
    <div>
      <NavigationBar></NavigationBar>
      <BestProduct items={Bestitems.list}></BestProduct>
      <div>
        <ProductMenu handleOrderChange={handleOrderChange} />
        <SellingProduct items={Sellingitems.list} />
        <SellingProduct items={SellingNextitems.list} />
      </div>
      <PageButton />
      <Footer />
    </div>
  );
}

export default App;
