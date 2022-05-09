import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import AddItem from './components/AddItem/AddItem';
import UpdateProduct from './components/UpdateProduct/UpdateProduct';
import RequireAuth from './components/RequireAuth/RequireAuth';
import ManageItems from './components/ManageItems/ManageItems';
import MyItems from './components/MyItems/MyItems';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Blogs from './components/Blogs/Blogs';


function App() {
  return (
    <div className="App">
    <Header></Header>
   <Routes>
     <Route path='/' element={<Home></Home>}></Route>
     <Route path='/home' element={<Home></Home>}></Route>
     <Route path='/login' element={<Login></Login>}></Route>
     <Route path='/about' element={<About></About>}></Route>
     <Route path='/blogs' element={<Blogs></Blogs>}></Route>
     <Route path='/register' element={<Register></Register>}></Route>
     <Route path='/myitems' element={<RequireAuth><MyItems></MyItems></RequireAuth>}></Route>
     <Route path='/manageitems' element={<RequireAuth><ManageItems></ManageItems></RequireAuth>}></Route>
     <Route path='/additem' element={<RequireAuth><AddItem></AddItem></RequireAuth>}></Route>
     <Route path='/product/:productId' element={<RequireAuth><UpdateProduct></UpdateProduct></RequireAuth>}></Route>
   </Routes>
   <Footer></Footer>
   <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
