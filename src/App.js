import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddProduct from './components/DashBord/MyPortfolio';
import AddReview from './components/DashBord/AddReview';
import DashBord from './components/DashBord/DashBord';
import MyOrders from './components/DashBord/MyOrders';
import MyProfile from './components/DashBord/MyProfile';
import About from './components/HomePage/About';
import Blogs from './components/HomePage/Blogs';
import Footer from './components/HomePage/Footer';
import Home from './components/HomePage/Home';
import Navbar from './components/HomePage/Navbar';
import RequireAuth from './components/HomePage/RequireAuth';
import Login from './components/Login';
import NotFound from './components/NotFound';
import Parchase from './components/ParchasePage/Parchase';
import Register from './components/Register';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Users from './components/DashBord/Users';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/purchaes/:itemId' element={
        <RequireAuth>
          <Parchase></Parchase>
        </RequireAuth>
      }></Route>
        <Route path='/addproduct' element={
        <RequireAuth>
          <AddProduct></AddProduct>
        </RequireAuth>
      }></Route>
        <Route path='/dashbord' element={
        <RequireAuth>
          <DashBord></DashBord>
        </RequireAuth>
      }>
        <Route index element={<MyOrders></MyOrders>}></Route>
        <Route path='review' element={<AddReview></AddReview>}></Route>
        <Route path='profile' element={<MyProfile></MyProfile>}></Route>
        <Route path='users' element={<Users></Users>}></Route>
      </Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
