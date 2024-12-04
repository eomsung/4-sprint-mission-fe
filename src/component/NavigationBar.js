import pandaImage from "../img/panda.svg";
import "./NavigationBar.css";
import "../Global.css";
import { Link } from "react-router-dom";

export const NavigationBar = ({ showMenu = true }) => {
  return (
    <nav className="NavigationBar">
      <div className="NavigationMenu">
        <Link to="/">
          <img src={pandaImage} alt="pandaImage" />
        </Link>
        {showMenu && (
          <>
            <div> 자유게시판 </div> <div> 중고마켓</div>
          </>
        )}
      </div>
      <a href="./" className="login button user">
        로그인
      </a>
    </nav>
  );
};
