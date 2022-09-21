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
        <div className="user-image">
          <div className="user">
            <AdminSidebar/>
            <div>
        <div className="text-center" ><br/><br/><br/>
                <div className="col-2" style={{marginLeft:"120px", width:"85%"}}>
                  <div className="card bg-dark text-light" >
                    <div className="card-body text-center">
                      <div className="h1">
                        <i className="fa fa-users"></i>
                      </div>
                      <h3 className="card-title">
                       Users
                      </h3><br/>
                      <form className="d-flex" style={{marginLeft:"50px"}}>
              <button className="btn btn-outline-success" onClick={AddUser} type="submit">Add User</button>
            </form><br/>
                      <Usertable/>
      </div>
                    </div>
                  </div>
                </div>
      </div>

        </div>
        </div>



















        // <div>
        //     <AdminSidebar/>
        //     <div>
        //         <div className = "box">
        //         <h1 style={{textAlign:"center"}}>User Details</h1><br/><br/>
        //     </div>
        //     <div className="user">
        //     <form className="d-flex">
        //       <button className="btn btn-outline-success" onClick={AddUser} type="submit">Add User</button>
        //     </form><br/>
        //     <Usertable/>
        //     </div>
        //     </div>
           
        // </div>

    )
}

export default Users