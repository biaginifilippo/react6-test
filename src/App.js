import './App.css';
import {Routes, Route, Link, BrowserRouter} from 'react-router-dom'
import Home from './components/home.js'
import About from './components/about';
import Error from './components/error'
import HomePage from './components/homepage'
import ProductList from './components/productlist';
import Products from './components/products'
import CheckProduct from './components/checkproduct';
import 'bootstrap/dist/css/bootstrap.min.css';
import PostProducts from './components/postproducts';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path = '/' element = {<Home/>} >
          <Route index element = {<HomePage/>}></Route>
          <Route path = '/home' element = {<HomePage/>} > </Route>
          <Route path = '/about' element = {<About/>} > </Route>
          <Route path = '/products' element = {<Products/>} > 
            <Route index element= {<ProductList/>}></Route>
            <Route path= '/products/:productid' element= {<CheckProduct/>}></Route>
          </Route>
          <Route path='/postproducts' element= {<PostProducts/>}></Route>
          <Route path= '*' element = {<Error/>}> </Route>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
