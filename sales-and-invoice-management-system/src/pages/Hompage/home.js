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
                      {/* Navbar */}
            
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <div class="container-fluid">
            <a class="navbar-brand" href="#"> Sales and Invoice Management System </a>
            <form class="d-flex">
              <button class="btn btn-outline-success" onClick={Signin} type="submit">Sigin-in</button>
            </form>
          </div>
        </nav>

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