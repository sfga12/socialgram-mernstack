import logo from './assets/socialgram.svg';
import icon_bookmarks from './assets/bookmarks-logo-navbar.svg';
import icon_home from './assets/home-logo-navbar.svg';
import icon_newpost from './assets/newpost-logo-navbar.svg';
import icon_trends from './assets/trends-logo-navbar.svg';
import {Link} from "react-router-dom";
import LoginModal from "./LoginModal";

export default function Header() {
    return(
        <header>
        <div className="header_background"></div>
        <Link to="/" className="logo">
          <img src={logo} alt="" />
        </Link>
        <nav>
          <Link to="/"> <i><img src={icon_home} alt="" /></i> <span>Home</span> </Link>
          <a href=""><i><img src={icon_newpost} alt="" /></i><span>New Post</span></a>
          <a href=""><i><img src={icon_bookmarks} alt="" /></i> <span>Bookmarks</span> </a>
          <a href=""><i><img src={icon_trends} alt="" /></i> <span>Trends</span></a>
          <Link to="/"><span>Register</span></Link>
          <LoginModal/>
        </nav>
      </header>
    );
}
