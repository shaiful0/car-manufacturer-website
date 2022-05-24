import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/HomePage/Footer';
import Home from './components/HomePage/Home';
import Navbar from './components/HomePage/Navbar';
import RequireAuth from './components/HomePage/RequireAuth';
import Login from './components/Login';
import NotFound from './components/NotFound';
import Parchase from './components/ParchasePage/Parchase';
import Register from './components/Register';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/parchaes' element={
        <RequireAuth>
          <Parchase></Parchase>
        </RequireAuth>
      }></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
