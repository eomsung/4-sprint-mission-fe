import pandaImage from "../img/panda.png";
import "./NavigationBar.css";
import "../Global.css";

export const NavigationBar = () => {
  return (
    <div className="NavigationBar">
      <div className="NavigationMenu">
        <img src={pandaImage} alt="pandaImage" />
        <div> 자유게시판 </div>
        <div> 중고마켓</div>
      </div>
      <button>로그인</button>
    </div>
  );
};
