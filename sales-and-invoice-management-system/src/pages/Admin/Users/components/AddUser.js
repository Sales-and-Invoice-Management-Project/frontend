import '../components/AddUser.css'
import {useNavigate} from 'react-router-dom'

const AddUser = () =>{
  const navigate = useNavigate();
  const User=()=>{
    navigate('/components/users')
  }
  return(
  <div className="adduser-image"><br/><br/>
  <div className="text-center">
    <div className="col-2" style={{marginLeft:"300px", width:"60%"}}>
      <div className="card bg-dark text-light">
        <div className="card-body text-center">
          <div className="h1">
            <i className="fa fa-user-secret"></i>
          </div>
        <div className='user-form'>
          <center><h1>Add User</h1></center><hr/>
          <div>
            <form>
              <div className="row">
                <div className="col">
                  <label for="txt" className="form-label">User Id</label>
                  <input type="number" className="form-control"  name="userid"/>
                </div>

                <div className="col">
                  <label for="txt" className="form-label">First Name</label>
                  <input type="text" className="form-control" name="fname"/>
                </div>
              </div>
              <br/>
              
              <div className="row">
                <div className="col">
                  <label for="txt" className="form-label">Last Name</label>
                  <input type="text" className="form-control"  name="lname"/>
                </div>
                
                <div className="col">
                  <label for="txt" className="form-label">Gender</label>
                  <input type="txt" className="form-control"  name="gender"/>
                </div>
              </div>
              <br/>
              
              <div className="row">
                <div className="col">
                  <label for="date" className="form-label">Email Id</label>
                  <input type="email" className="form-control"  name="email"/>
                </div>
                
                <div className="col">
                  <label for="txt" className="form-label">Contact No.</label>
                  <input type="number" className="form-control"  name="contactno"/>
                </div>
              </div>
              <br/>
              
              <div className="row">
                <div className="col">
                  <label for="txt" className="form-label">Address</label>
                  <input type="text" className="form-control"  name="address"/>
                </div>
                
                <div className="col">
                  <label for="txt" className="form-label">Role</label>
                  <input type="text" className="form-control"  name="role"/>
                </div>
              </div>
              <br/>
              
              <div className="row">
                <div className="col">
                  <label for="txt" className="form-label">UserName</label>
                  <input type="text" className="form-control"  name="username"/>
                </div>
                
                <div className="col">
                  <label for="txt" className="form-label">Password</label>
                  <input type="password" className="form-control"  name="password"/>
                </div>
              </div>
              <br/><br/>
              <button type="button" className="btn btn-primary" onClick={User}>Submit</button>
            </form>
          </div>
        </div>
        </div>
      </div>
    </div>
  </div>
  </div>

)}

export default AddUser