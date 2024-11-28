import { NavigationBar } from "./Component/NavigationBar";
import { BestProduct } from "./Component/BestProduct";
import { useState, useEffect } from "react";
import { getProductList } from "./Api/ProductsService";
import { SellingProduct } from "./Component/SellingProduct";
import { ProductMenu } from "./Component/ProductMenu";
import { PageButton } from "./Component/PageButton";
import { Footer } from "./Component/Footer";
import { useAsync } from "../src/hook/useAsync";

const PAGESIZEBEST = 4;
const PAGESIZESELLING = 10;
const DEFAULTORDER = "recent";
const FAVORITEORDER = "favorite";
const DEFAULPAGE = 1;
function App() {
  const [order, setOrder] = useState(DEFAULTORDER);
  const [Bestitems, setBestItems] = useState([]);
  const [Sellingitems, setSellingItems] = useState([]);
  // const [BestPage, setBestPage] = useState(DEFAULPAGE);
  const [SellingPage, setSellingPage] = useState(DEFAULPAGE);
  const [keyword, setKeyword] = useState("");

  const [loading, error, getProductListAsync] = useAsync(getProductList);

  useEffect(() => {
    handleLoadBest({
      order: FAVORITEORDER,
      page: DEFAULPAGE,
      pageSize: PAGESIZEBEST,
    });
    handleLoadSelling({
      order: order,
      page: SellingPage,
      pageSize: PAGESIZESELLING,
      keyword: keyword,
    });
  }, [order, keyword]);

  const handleLoadBest = async (Options) => {
    let data = await getProductListAsync(Options);
    setBestItems(data);
  };

  const handleLoadSelling = async (Options) => {
    let data = await getProductListAsync(Options);
    setSellingItems(data);
  };

  const handleOrderChange = (order) => {
    setOrder(order);
  };

  const handleKeywordChange = (keyword) => {
    setKeyword(keyword);
  };

  return (
    <div>
      <NavigationBar></NavigationBar>
      <BestProduct items={Bestitems.list}></BestProduct>
      <div>
        <ProductMenu
          handleOrderChange={handleOrderChange}
          handleKeywordChange={handleKeywordChange}
        />
        <SellingProduct items={Sellingitems.list} loading={loading} />
      </div>
      <PageButton />
      <Footer />
      {error?.message && <span>error.message</span>}
    </div>
  );
}

export default App;
