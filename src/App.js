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
  const [loading, error, getProductListAsync] = useAsync(getProductList);
  const { isDesktop, isTablet, isMobile } = useDeviceSize();

  const getPageSize = () => (isDesktop ? 10 : isTablet ? 6 : isMobile ? 4 : 1);
  const getBestPageSize = () =>
    isDesktop ? 4 : isTablet ? 2 : isMobile ? 1 : 1;

  useEffect(() => {
    let bestPageSize = getBestPageSize();
    handleLoadBest({
      order: FAVORITEORDER,
      page: DEFAULPAGE,
      pageSize: bestPageSize,
    });
  }, [isDesktop, isTablet, isMobile]);

  useEffect(() => {
    let pageSize = getPageSize();
    handleLoadSelling({
      order: order,
      page: sellingPage,
      pageSize: pageSize,
      keyword: keyword,
    });
  }, [order, keyword, isDesktop, isTablet, isMobile]);

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
