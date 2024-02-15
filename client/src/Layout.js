import Header from "./Header";
import {Outlet} from "react-router-dom";

export default function Layout() {
    return(
        <main>
          <div class="overlay" style={{ display: 'none' }}></div>
          <Header/>
          <Outlet/>


        </main>
    );
}