
import {useNavigate} from 'react-router-dom'
import Navbar from '../../components/navbar';
import "./signin.css"


const Signin=()=>{
    const navigate = useNavigate();
    const AdminSidebar=()=>{
        navigate('../../components/AdminSidebar')
    }
    return(
        <div>
            <Navbar/>
            <h1 style={{textAlign:'center', marginTop:100}}>Sign-in</h1>
            <div className="admin">
                <form action="#">
                    <div class="form-group">
                        <label for="username">Username:</label>
                        <input type={"text"} class="form-control" id="username" placeholder="Enter username" name="username"/>
                    </div>
                    <div class="form-group">
                        <br/>
                        <label for="pwd">Password:</label>
                        <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pwd"/>
                    </div>
                    <br/>
                    <button type="button" onClick={AdminSidebar} class="btn btn-success">Sign-in</button>
                </form>
            </div>
        </div>
    )
}

export default Signin