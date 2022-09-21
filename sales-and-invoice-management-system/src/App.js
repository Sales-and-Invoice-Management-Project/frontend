
import './App.css';
import { BrowserRouter, Routes,Route} from 'react-router-dom'

import "bootstrap/dist/css/bootstrap.min.css"
import Home from './pages/Hompage/home';
import Signin from './pages/SigninPage/signin'
import AdminDashboard from './components/AdminDashboard';
import UserDashboard from './components/UserDashboard';

import Users from './pages/Admin/Users/users';
import Usertable from './pages/Admin/Users/components/usertable';
import AddUser from './pages/Admin/Users/components/AddUser';

import Products from './pages/Admin/Product/product';
import Producttable from './pages/Admin/Product/components/producttable';
import AddProduct from './pages/Admin/Product/components/AddProduct';
import ViewProduct from './pages/Admin/Product/components/VewProduct';

import Company from './pages/Admin/Company/company';
import Companytable from './pages/Admin/Company/components/companytable';
import AddCompany from './pages/Admin/Company/components/AddCompany';


import Reports from './pages/Admin/Reports/reports';
import UserRecords from './pages/Admin/Reports/components/UserRecords';
import ProductReport from './pages/Admin/Reports/components/ProductReport';
import CompanyReport from './pages/Admin/Reports/components/CompanyReport';

import Inventory from './pages/User/Inventory/inventory';

import Invoice from './pages/User/Invoice/invoice';
import Receipt from './pages/User/Invoice/components/Receipt';










function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/pages/SigninPage/Signin' element={<Signin/>}/>
      <Route path='/components/AdminDashboard' element={<AdminDashboard/>}/>
      <Route path='/components/UserDashboard' element={<UserDashboard/>}/>



      
      <Route path='/components/users' element={<Users/>}/>
      <Route path='/Users/components/Usertable' element={<Usertable/>}/>
      <Route path='/Users/components/AddUser' element={<AddUser/>}/>
      
      <Route path='/components/products' element={<Products/>}/>
      <Route path='/Product/components/Producttable' element={<Producttable/>}/>
      <Route path='/Product/components/AddProduct' element={<AddProduct/>}/>
      <Route path='/Product/components/ViewProduct' element={<ViewProduct/>}/>


      <Route path='/components/company' element={<Company/>}/>
      <Route path='/Company/components/Companytable' element={<Companytable/>}/>
      <Route path='/Company/components/AddCompany' element={<AddCompany/>}/>
      
      <Route path='/components/reports' element={<Reports/>}/>
      <Route path='/Reports/components/UserRecords' element={<UserRecords/>}/>
      <Route path='/Reports/components/ProductReport' element={<ProductReport/>}/>
      <Route path='/Reports/components/CompanyReport' element={<CompanyReport/>}/>

      <Route path='/components/inventory' element={<Inventory/>}/>

      <Route path='/components/invoice' element={<Invoice/>}/>
      <Route path='/Invoice/components/Receipt' element={<Receipt/>}/>

      












      
      

    </Routes>
    </BrowserRouter>
  )
}

export default App;
