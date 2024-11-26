import "./ProductMenu.css";
export const ProductMenu = ({ handleOrderChange }) => {
  const hanldeSelectChange = (e) => {
    handleOrderChange(e.target.value);
  };
  // const handleButton = (e) => {
  //   e.target.value;
  // };

  return (
    <div>
      <div className="menuSection">
        <div className="menuContainer">
          <h3>판매중인 상품</h3>
          <div className="menu">
            <form className="inputWrapper">
              <input
                className="menuInput"
                name="content"
                placeholder="검색할 상품을 입력해주세요"
              />
              <button type="submit" className="menuButton" />
            </form>
            <a className="register button">상품 등록하기</a>
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
