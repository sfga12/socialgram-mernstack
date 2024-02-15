import './App.css';
import {Routes,Route} from "react-router-dom";
import Layout from './Layout';
import IndexPage from './pages/IndexPage';
import LoginPage from './pages/LoginPage';
// import profile_image2 from './assets/aiprofile2.webp'
function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>

      <Route index element= {<IndexPage/>} />

      <Route path={'/login'} element= {<LoginPage/>}
      />

      </Route>
      
    </Routes>
  );
}

export default App;
