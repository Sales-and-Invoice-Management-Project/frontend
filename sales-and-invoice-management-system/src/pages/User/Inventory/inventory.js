import UserSidebar from "../../../components/UserSidebar";
import {useNavigate} from 'react-router-dom'
import Inventorytable from "./components/inventorytable";
import './inventory.css'


const Inventory = () => {
  const navigate = useNavigate();
    const AddProduct=()=>{ 
        navigate('../Product/components/AddProduct')
    }

    return(
      <div>
        <UserSidebar/>
        <div className = "box">
        <h1 style={{textAlign:"center"}}>Inventory</h1><br/><br/>
        </div>
      <center></center>   
       <div>
        <div className="inventory">
        <form class="d-flex">
       <button class="btn btn-outline-success" onClick={AddProduct} type="submit">Add Product</button>
     </form>
     <br/>
    <Inventorytable/>

        </div>
       


</div>
</div>

    )
}

export default Inventory

