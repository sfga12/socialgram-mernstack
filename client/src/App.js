import './App.css';
import logo from './assets/socialgram.svg';
import icon_bookmarks from './assets/bookmarks-logo-navbar.svg';
import icon_home from './assets/home-logo-navbar.svg';
import icon_newpost from './assets/newpost-logo-navbar.svg';
import icon_trends from './assets/trends-logo-navbar.svg';
import post_image from './assets/postimage1.webp'
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
          <a href=""><span>Login</span></a>
        </nav>
      </header>

      <div className="content">
      <div className="posts">
        <div className="post">
          <div className="post_image_content">
            <img src={post_image} alt="" />
          </div>
          <div className="post_stats">
            <div className="post_stats_like">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 16 14" fill="none">
              <path d="M8 3.45333C6.44444 -0.197903 1 0.190986 1 4.85768C1 9.52437 8 13.4134 8 13.4134C8 13.4134 15 9.52437 15 4.85768C15 0.190986 9.55556 -0.197903 8 3.45333Z" stroke="#111111" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>

              <span>61</span>
            </div>
            <div className="post_stats_repost">

              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M11 8.00241V8.99999C11 10.1046 11.8954 11 13 11C14.1046 11 15 10.1046 15 8.99999V7.99999C15 6.50215 14.5197 5.04388 13.6294 3.83935C12.7391 2.63482 11.4856 1.74757 10.0537 1.3081C8.62179 0.868625 7.08657 0.90001 5.67383 1.39771C4.26109 1.89542 3.04534 2.83359 2.20508 4.07355C1.36482 5.31351 0.94457 6.78987 1.00587 8.28646C1.06717 9.78305 1.60688 11.2207 2.54573 12.3878C3.48458 13.5549 4.77336 14.3899 6.22207 14.7704C7.67077 15.1509 9.20271 15.0566 10.5939 14.5015M11 8.00241C10.9987 9.65815 9.65605 11 8 11C6.34315 11 5 9.65685 5 7.99999C5 6.34314 6.34315 4.99999 8 4.99999C9.65605 4.99999 10.9987 6.34183 11 7.99757M11 8.00241V7.99757M11 7.99757V4.99999" stroke="#111111" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

              <span>12</span>
            </div>
            <div className="post_stats_comment">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M4.5076 14.068C5.53542 14.6608 6.72797 15 7.99972 15C11.8657 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 9.27176 1.33915 10.4643 1.93193 11.4921L1.93422 11.4961C1.99126 11.595 2.02002 11.6449 2.03305 11.692C2.04534 11.7365 2.04877 11.7764 2.04562 11.8224C2.04224 11.8719 2.02558 11.9231 1.99142 12.0256L1.39345 13.8195L1.39269 13.8219C1.26653 14.2004 1.20344 14.3896 1.24841 14.5157C1.28762 14.6257 1.37464 14.7125 1.48459 14.7517C1.61041 14.7965 1.79881 14.7337 2.17565 14.6081L2.18034 14.6064L3.97426 14.0084C4.0764 13.9744 4.12833 13.9571 4.17768 13.9537C4.22369 13.9506 4.26338 13.9547 4.30783 13.967C4.35509 13.9801 4.40498 14.0089 4.50438 14.0662L4.5076 14.068Z" stroke="#111111" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>

              <span>2</span>
            </div>
            <div className="post_stats_bookmark">

            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="15" viewBox="0 0 12 15" fill="none">
            <path d="M10.7635 14.9996C10.6614 14.9996 10.5606 14.9623 10.4761 14.8924L5.62565 10.8518L0.775234 14.8938C0.626951 15.0159 0.430541 15.0353 0.266649 14.9385C0.104058 14.844 0 14.6519 0 14.442V1.67489C0 0.751839 0.656868 0 1.46332 0H9.78668C10.5931 0 11.25 0.751839 11.25 1.67489V14.4413C11.25 14.6512 11.1472 14.8432 10.9834 14.9385C10.9144 14.9795 10.8383 14.9996 10.7622 14.9996H10.7635ZM5.62565 9.60269C5.72646 9.60269 5.82726 9.63842 5.91181 9.70988L10.2758 13.3448V1.67489C10.2758 1.3682 10.0566 1.11659 9.78798 1.11659H1.46332C1.19472 1.11659 0.975546 1.3682 0.975546 1.67489V13.3448L5.33949 9.70988C5.42404 9.63842 5.52484 9.60269 5.62565 9.60269Z" fill="#111111"/>
            <path d="M10.7635 14.9996C10.6614 14.9996 10.5606 14.9623 10.4761 14.8924L5.62565 10.8518L0.775234 14.8938C0.626951 15.0159 0.430541 15.0353 0.266649 14.9385C0.104058 14.844 0 14.6519 0 14.442V1.67489C0 0.751839 0.656868 0 1.46332 0H9.78668C10.5931 0 11.25 0.751839 11.25 1.67489V14.4413C11.25 14.6512 11.1472 14.8432 10.9834 14.9385C10.9144 14.9795 10.8383 14.9996 10.7622 14.9996H10.7635ZM5.62565 9.60269C5.72646 9.60269 5.82726 9.63842 5.91181 9.70988L10.2758 13.3448V1.67489C10.2758 1.3682 10.0566 1.11659 9.78798 1.11659H1.46332C1.19472 1.11659 0.975546 1.3682 0.975546 1.67489V13.3448L5.33949 9.70988C5.42404 9.63842 5.52484 9.60269 5.62565 9.60269Z" stroke="#111111"/>
            </svg>
            </div>
            <div className="post_stats_view">
              <span>4.231</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 16 14" fill="none">
              <path d="M5.66667 6.44444V13.4444M5.66667 6.44444H2.24414C1.80854 6.44444 1.59096 6.44444 1.42459 6.52922C1.27824 6.60379 1.15934 6.72268 1.08477 6.86903C1 7.03541 1 7.25337 1 7.68896V13.4444H5.66667M5.66667 6.44444V2.24452C5.66667 1.80892 5.66667 1.59096 5.75144 1.42459C5.82601 1.27824 5.94491 1.15934 6.09125 1.08477C6.25763 1 6.47521 1 6.91081 1H9.08858C9.52418 1 9.74244 1 9.90881 1.08477C10.0552 1.15934 10.1737 1.27824 10.2483 1.42459C10.333 1.59096 10.3333 1.80892 10.3333 2.24452V4.11111M5.66667 13.4444H10.3333M10.3333 13.4444L15 13.4445V5.35563C15 4.92004 14.9997 4.70207 14.9149 4.5357C14.8404 4.38935 14.7223 4.27045 14.5759 4.19588C14.4096 4.11111 14.1912 4.11111 13.7556 4.11111H10.3333M10.3333 13.4444V4.11111" stroke="#111111" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>

          </div>
          <div className="post_author">
            <div className="post_author_image">

            </div>
            <div className="post_author_details">
              <div className="post_author_details_name">
                <span className="post_author_details_fullname">Devon Le</span>
                <span className="post_author_details_username">@devonle</span>
              </div>
              <div className="post_content">
              <span> For every video we upload to YouTube we create different versions of the final thumbnail. </span>
              </div>
            
            </div>

          </div>
        </div>
      </div>
      </div>
      
    </main>
  );
}

export default App;
