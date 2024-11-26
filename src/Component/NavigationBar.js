import pandaImage from "../img/panda.png";
import "./NavigationBar.css";
import "../Global.css";

export const NavigationBar = () => {
  return (
    <nav className="NavigationBar">
      <div className="NavigationMenu">
        <img src={pandaImage} alt="pandaImage" />
        <div> 자유게시판 </div>
        <div> 중고마켓</div>
      </div>
      <button className="login">로그인</button>
    </nav>
  );
};
