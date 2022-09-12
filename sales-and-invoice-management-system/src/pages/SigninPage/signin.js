
import { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import usersService from '../../services/users.service';
import "./signin.css"


const Signin=()=>{
    const[userName,setUserName] = useState('');
    const[password,setPassword] = useState('');
    const navigate = useNavigate();

    const AuthUser=(e)=>{
        e.preventDefault();

        const signInUser = {userName,password}
        usersService.signinUser(signInUser)
        .then(response =>{
            console.log("signin successfull",response.data)
            if(response.data===1){
                console.log("Admin sign in");
                navigate('/components/AdminSidebar');
            }else{
                console.log("user sign in")
                navigate('/components/UserSidebar')
            }
        })
        .catch(error => {
            console.log("Sign in failed!!!!!",error)
        })
    }
    return(
        <div className='signindiv'>
            
                       {/* Navbar */}
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"> Sales and Invoice Management System </a>
                </div>
            </nav>
                    {/* Sign-in Page */}

            <h1 style={{textAlign:'center', marginTop:100}}>Sign-in</h1>
            <div className="admin">
                <form action="#">
                    <div className="form-group">
                        <label htmlFor="username">Username:</label>
                        <input 
                            type={"text"} 
                            className="form-control" 
                            id="username" 
                            placeholder="Enter username" 
                            name="username"
                            value={userName}
                            onChange={(e)=> setUserName(e.target.value)}
                            />
                    </div>
                    <div className="form-group">
                        <br/>
                        <label htmlFor="pwd">Password:</label>
                        <input 
                            type="password" 
                            className="form-control" 
                            id="pwd" 
                            placeholder="Enter password" 
                            name="pwd"
                            value={password}
                            onChange={(e)=> setPassword(e.target.value)}
                            />
                    </div>
                    <br/>
                    <div className="d-flex">
                        <button className="btn btn-outline-success" onClick={(e)=>AuthUser(e)} >Sigin-in</button>
                    </div>
                    
                </form>
            </div>
        </div>
    )
}

export default Signin