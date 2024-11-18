import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ShopCategaory from './Pages/ShopCategaory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Shop from './Pages/Shop';
import Footer from './Components/Footer/Footer';
import men_benner from './Components/Assets/banner_mens.png'
import women_benner from './Components/Assets/banner_women.png'
import kid_benner from './Components/Assets/banner_kids.png'


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Shop/>}/>
          <Route path='/mens' element={<ShopCategaory banner={men_benner} category="men"/>}/>
          <Route path='/womens' element={<ShopCategaory banner={women_benner} category="women"/>}/>
          <Route path='/kids' element={<ShopCategaory banner={kid_benner} category="kid"/>}/>
          <Route path='/product' element={<Product/>}>
            <Route path=':productId' element={<Product/>}/>
          </Route>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/login' element={<LoginSignup/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
