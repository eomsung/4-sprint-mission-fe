import "./ProductMenu.css";
export const ProductMenu = ({ handleOrderChange }) => {
  const hanldeSelectChange = (e) => {
    handleOrderChange(e.target.value);
  };
  return (
    <div>
      <div className="MenuSection">
        <div className="MenuContainer">
          <h3>판매중인 상품</h3>
          <div className="Menu">
            <input
              className="MenuInput"
              placeholder="검색할 상품을 입력해주세요"
            />
            <button className="register">상품 등록하기</button>
            <select className="orderSelect" onChange={hanldeSelectChange}>
              <option value="recent">최신순</option>
              <option value="favorite">좋아요순</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};
