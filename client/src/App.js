import './App.css';
import logo from './assets/socialgram.svg';
import icon_bookmarks from './assets/bookmarks-logo-navbar.svg';
import icon_home from './assets/home-logo-navbar.svg';
import icon_newpost from './assets/newpost-logo-navbar.svg';
import icon_trends from './assets/trends-logo-navbar.svg';
function App() {
  return (
    <main>
      <header>
        <div className="header_background"></div>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <nav>
          <a href=""> <i><img src={icon_home} alt="" /></i> <span>Home</span> </a>
          <a href=""><i><img src={icon_newpost} alt="" /></i><span>New Post</span></a>
          <a href=""><i><img src={icon_bookmarks} alt="" /></i> <span>Bookmarks</span> </a>
          <a href=""><i><img src={icon_trends} alt="" /></i> <span>Trends</span></a>
          <a href=""><span>Register</span></a>
          <a href=""><span>Logsin</span></a>
        </nav>
      </header>

      <div className="content">
      <div className="post">

      </div>
      </div>
      
    </main>
  );
}

export default App;
