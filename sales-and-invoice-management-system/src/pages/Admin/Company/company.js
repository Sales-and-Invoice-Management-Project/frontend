import AdminSidebar from "../../../components/AdminSidebar"
import {useNavigate} from 'react-router-dom'
import Companytable from "./components/companytable";
import './company.css'

const Company = () => {
    const navigate = useNavigate();
    const AddCompany=()=>{ 
        navigate('../Company/components/AddCompany')
    }
    return(
        <div>
            <AdminSidebar/>
            <div>
                <div className = "box">
                <h1 style={{textAlign:"center"}}>Company Details</h1><br/><br/>
                </div>
            <div className="company" >
                <form className="d-flex">
              <button className="btn btn-outline-success" onClick={AddCompany} type="submit">Add Company</button>
            </form><br/>
            <Companytable/>  
            </div>
            </div>
           
        </div>

    )
}

export default Company