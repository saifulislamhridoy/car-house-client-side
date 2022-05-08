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


function App() {
  return (
    <div className="App">
    <Header></Header>
   <Routes>
     <Route path='/' element={<Home></Home>}></Route>
     <Route path='/home' element={<Home></Home>}></Route>
     <Route path='/login' element={<Login></Login>}></Route>
     <Route path='/register' element={<Register></Register>}></Route>
     <Route path='/additem' element={<AddItem></AddItem>}></Route>
     <Route path='/product/:productId' element={<UpdateProduct></UpdateProduct>}></Route>
   </Routes>
   <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
