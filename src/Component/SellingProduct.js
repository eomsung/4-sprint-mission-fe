import "./SellingProduct.css";
import noImage from "../img/noImage.jpg";

export const SellingProduct = ({ items }) => {
  if (!Array.isArray(items) || items.length === 0) {
    return <div>Not Array</div>;
  }

  return (
    <div className="SellingProductSection">
      <div className="SellingProductList">
        {items.map((item, index) => (
          <SellingProductList key={index} item={item}></SellingProductList>
        ))}
      </div>
    </div>
  );
};

const SellingProductList = ({ item }) => {
  const imageUrl = item.images ? item.images : noImage;
  const handleImageError = (e) => {
    e.target.src = noImage; // 이미지가 없으면 기본 이미지로 설정
  };

  return (
    <div>
      <img
        src={imageUrl}
        alt={item.name}
        className="SellingProduct-img"
        onError={handleImageError}
      />
      <div>
        <p className="itemName">{`${item.name} 팝니다`}</p>
        <p className="itemPrice">{`${item.price}원`}</p>{" "}
        {/*  여기에 숫자가 커지면 , 넣는거 추가해야함 */}
        <p className="itemFavorite">{item.favoriteCount}</p>
      </div>
    </div>
  );
};
