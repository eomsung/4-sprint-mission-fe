import "./BestProduct.css";

export const BestProduct = ({ items }) => {
  if (!Array.isArray(items) || items.length === 0) {
    return <div>Not Array</div>;
  }

  return (
    <div className="BestProductSection">
      <div className="BestProductContainer">
        <div className="text">베스트 상품</div>
        <div className="BestProductList">
          {items.map((item, index) => (
            <BestProductList key={index} item={item}></BestProductList>
          ))}
        </div>
      </div>
    </div>
  );
};

const BestProductList = ({ item }) => {
  return (
    <div>
      <img src={item.images} alt={item.name} className="BestProduct-img" />
      <div>{item.name}</div>
      <div>{item.price}</div>
      <div>{item.favoriteCount}</div>
    </div>
  );
};
