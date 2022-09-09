
import {useNavigate} from 'react-router-dom'
import "./signin.css"


const Signin=()=>{
    const navigate = useNavigate();
    const AdminSidebar=()=>{
        navigate('../../components/AdminSidebar')
    }
    return(
        <div>
                               {/* Navbar */}
            <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
                <div class="container-fluid">
                    <a class="navbar-brand" href="javascript:void(0)"><h1>Sales and Invoice Management System</h1></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    {/* <div class="collapse navbar-collapse" id="mynavbar">
                        <ul class="navbar-nav me-auto">
                            <li class="nav-item">
                                <a class="nav-link" href="javascript:void(0)">Link</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="javascript:void(0)">Link</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="javascript:void(0)">Link</a>
                            </li>
                        </ul>
                    </div> */}
                </div>
            </nav>

                    {/* Sign-in Page */}

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
                    <center><button type="button" onClick={AdminSidebar} class="btn btn-success">Sign-in</button></center>
                </form>
            </div>
        </div>
    )
}

export default Signin