import {useNavigate} from 'react-router-dom'
import Navbar from '../../components/navbar';
import "./home.css"
const Home =()=> {
    const navigate = useNavigate();
    const Signin=()=>{ 
        navigate('../SigninPage/Signin')
    }

  return (
    <div>
      <Navbar/>  
      <div className='home'>
        <h3 style={{textAlign:'center'}}>Login Options</h3>
        <br/>
        <div>
          <button type="button" onClick={Signin} class="btn btn-success space-btn">Sign-in</button>
        </div>
      </div>
    </div>
    
  )
}

export default Home