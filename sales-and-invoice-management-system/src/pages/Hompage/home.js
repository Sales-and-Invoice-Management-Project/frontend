import {useNavigate} from 'react-router-dom'
import "./home.css"
import a1 from './background.png'
const Home =()=> {
  const navigate = useNavigate();
    const Signin=()=>{ 
        navigate('../pages/SigninPage/Signin')
    }
    
  return (
    <div className='home'>
                      {/* Navbar */}
            
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="#"> Sales and Invoice Management System </a>
            <form className="d-flex">
              <button className="btn btn-success" onClick={Signin} type="submit">Sigin-in</button>
            </form>
          </div>
        </nav>

      {/* <div>
        <img src={a1}/>
      </div> */}
    </div>
    
  )
}

export default Home