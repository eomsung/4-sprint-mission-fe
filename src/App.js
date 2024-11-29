import { NavigationBar } from "./Component/NavigationBar";
import { BestProduct } from "./Component/BestProduct";
import { useState, useEffect } from "react";
import { getProductList } from "./Api/ProductsService";
import { SellingProduct } from "./Component/SellingProduct";
import { ProductMenu } from "./Component/ProductMenu";
import { PageButton } from "./Component/PageButton";
import { Footer } from "./Component/Footer";
import { useAsync } from "../src/hook/useAsync";
import { useDeviceSize } from "./hook/useDeviceSize";

const PAGESIZEBEST = 4;
const PAGESIZESELLING = 10;
const DEFAULTORDER = "recent";
const FAVORITEORDER = "favorite";
const DEFAULPAGE = 1;
function App() {
  const [order, setOrder] = useState(DEFAULTORDER);
  const [Bestitems, setBestItems] = useState([]);
  const [sellingitems, setSellingItems] = useState([]);
  // const [BestPage, setBestPage] = useState(DEFAULPAGE);
  const [sellingPage, setSellingPage] = useState(DEFAULPAGE);
  const [keyword, setKeyword] = useState("");
  const [bestPageSize, setBestPageSize] = useState(PAGESIZEBEST);
  const [sellingPageSize, setSellingPageSize] = useState(PAGESIZESELLING);
  const [loading, error, getProductListAsync] = useAsync(getProductList);
  const { isDesktop, isTablet, isMobile } = useDeviceSize();
  useEffect(() => {
    if (isDesktop) {
      setBestPageSize(4);
      setSellingPageSize(10);
    } else if (isTablet) {
      setBestPageSize(2);
      setSellingPageSize(6);
    } else if (isMobile) {
      setBestPageSize(1);
      setSellingPageSize(4);
    }
  }, [isDesktop, isTablet, isMobile]); // 모바일일때가 잘 안되는중

  useEffect(() => {
    handleLoadBest({
      order: FAVORITEORDER,
      page: DEFAULPAGE,
      pageSize: bestPageSize,
    });
  }, [bestPageSize]);

  useEffect(() => {
    handleLoadSelling({
      order: order,
      page: sellingPage,
      pageSize: sellingPageSize,
      keyword: keyword,
    });
  }, [order, keyword, sellingPageSize]);

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
        <SellingProduct items={sellingitems.list} loading={loading} />
      </div>
      <PageButton />
      <Footer />
      {error?.message && <span>error.message</span>}
    </div>
  );
}

export default App;
