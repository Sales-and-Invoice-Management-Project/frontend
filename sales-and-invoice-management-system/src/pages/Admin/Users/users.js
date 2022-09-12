import AdminSidebar from "../../../components/AdminSidebar"
import {useNavigate} from 'react-router-dom'
import Usertable from "./components/usertable"
import "./users.css"

const Users = () => {
    const navigate = useNavigate();
    const AddUser=()=>{ 
        navigate('../Users/components/AddUser')
    }
   

    return(
        <div>
            <AdminSidebar/>
            <div class="container">
            <center><h1>User Details</h1></center><br/>
            <br/>
            <form class="d-flex">
              <button class="btn btn-outline-success" onClick={AddUser} type="submit">Add User</button>
            </form><br/>
            <Usertable/>
            </div>
           
        </div>

    )
}

export default Users