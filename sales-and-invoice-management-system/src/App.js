
import './App.css';
import { BrowserRouter, Routes,Route} from 'react-router-dom'

import "bootstrap/dist/css/bootstrap.min.css"
import Home from './pages/Hompage/home';
import Signin from './pages/SigninPage/signin'
import AdminSidebar from './components/AdminSidebar';
import UserSidebar from './components/UserSidebar';

import Users from './pages/Admin/Users/users';
import Usertable from './pages/Admin/Users/components/usertable';


import Company from './pages/Admin/Company/company';
import Products from './pages/Admin/Product/product';
import Reports from './pages/Admin/Reports/reports';
import AddUser from './pages/Admin/Users/components/AddUser';







function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/pages/SigninPage/Signin' element={<Signin/>}/>

      <Route path='/components/AdminSidebar' element={<AdminSidebar/>}/>
      <Route path='/components/UserSidebar' element={<UserSidebar/>}/>
      

      <Route path='/components/users' element={<Users/>}/>
      <Route path='/Users/components/Usertable' element={<Usertable/>}/>
      <Route path='/Users/components/AddUser' element={<AddUser/>}/>
      






      <Route path='/components/products' element={<Products/>}/>
      <Route path='/components/company' element={<Company/>}/>
      <Route path='/components/reports' element={<Reports/>}/>
      
      

    </Routes>
    </BrowserRouter>
  )
}

export default App;
