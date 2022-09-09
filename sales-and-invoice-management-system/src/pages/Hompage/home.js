import {useNavigate} from 'react-router-dom'
import "./home.css"
import a1 from './background.png'
const Home =()=> {
  const navigate = useNavigate();
    const Signin=()=>{ 
        navigate('../pages/SigninPage/Signin')
    }
    
  return (
    <div>
      <div>
       {/* Navbar  */}
      <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="javascript:void(0)"><h1>Sales and Invoice Management System</h1></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="mynavbar">
            {/* <ul class="navbar-nav me-auto">
              <li class="nav-item">
                <a class="nav-link" href="javascript:void(0)">Link</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="javascript:void(0)">Link</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="javascript:void(0)">Link</a>
              </li>
            </ul> */}
            <form class="d-flex">
              <div style={{marginLeft:'800px'}} >
                <button class="btn btn-primary" onClick={Signin} type="button">Sign-in</button>
              </div>
            </form>
          </div>
        </div>
      </nav>
      </div>

      <div>
        <img src={a1}/>
      </div>
      <div class="mt-5 p-4 bg-dark text-white text-center">
  <p>Footer</p>
</div>
    </div>
    
  )
}

export default Home