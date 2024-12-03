import "./Header.css";

export const Header = () => {
  return (
    <div>
      <header id="header">
        <div id="header_inner">
          <div id="header_inner_left">
            <span className="header_text">일상의 모든 물건을 </span>
            <span className="header_text space"> 거래해 보세요 </span>
            <a id="button" href="items.html">
              구경하러 가기
            </a>
          </div>
          <div id="header_inner_right"></div>
        </div>
      </header>
    </div>
  );
};
