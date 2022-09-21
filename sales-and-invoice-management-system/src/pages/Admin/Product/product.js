import AdminSidebar from "../../../components/AdminSidebar"
import {useNavigate} from 'react-router-dom'
import Producttable from "./components/producttable"
import './product.css'

const Products = () => {
  const navigate = useNavigate();
    const AddProduct=()=>{ 
        navigate('../Product/components/AddProduct')
    }

    return(
      <div className="product-image">
        <AdminSidebar/>
        <div>
        <h1 style={{textAlign:"center"}}>Product Details</h1><br/><br/>
        </div> 
        <div className="product">
        <form class="d-flex">
       <button class="btn btn-outline-success" onClick={AddProduct} type="submit">Add Product</button>
     </form>
     <br/>
    <Producttable/>

        </div> 
        </div> 
       

    )
}

export default Products