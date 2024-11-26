import "./BestProduct.css";
import noImage from "../img/noImage.jpg";
import ic_heart from "../img/ic_heart.svg";

export const BestProduct = ({ items }) => {
  if (!Array.isArray(items) || items.length === 0) {
    return <div>Not Array</div>;
  }

  return (
    <section className="BestProductSection">
      <div className="BestProductContainer">
        <h3>베스트 상품</h3>
        <div className="BestProductList">
          {items.map((item, index) => (
            <BestProductList key={index} item={item}></BestProductList>
          ))}
        </div>
      </div>
    </section>
  );
};

const BestProductList = ({ item }) => {
  const imageUrl = item.images ? item.images : noImage;
  const handleImageError = (e) => {
    e.target.src = noImage; // 이미지가 없으면 기본 이미지로 설정
  };
  return (
    <div>
      <img
        src={imageUrl}
        alt={item.name}
        className="BestProduct-img"
        onError={handleImageError}
      />
      <div>
        <p className="itemName">{`${item.name} 팝니다`}</p>
        <p className="itemPrice">{`${item.price}원`}</p>{" "}
        {/*  여기에 숫자가 커지면 , 넣는거 추가해야함 */}
        <span className="favorite">
          <img src={ic_heart} alt="heartIcon" />
          <p className="itemFavorite">{item.favoriteCount}</p>
        </span>
      </div>
    </div>
  );
};
