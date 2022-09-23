import '../components/AddCompany.css'
import {useNavigate} from 'react-router-dom'

const AddCompany = () =>{
  const navigate = useNavigate();
  const Company=()=>{
    navigate('/components/company')
  }
  return(
  <div className="addcompany-image"><br/><br/><br/>
  <div className="text-center" >
    <div className="col-2" style={{marginLeft:"300px", width:"60%"}}>
      <div className="card bg-dark text-light">
        <div className="card-body text-center">
          <div className="h1">
            <i className="fa fa-building-o"></i>
          </div>
          <div className='product-form'>
            <div>
              <center><h1>Add Company</h1></center><hr/>
              <div>
                <br/>
                <form>
                  <div className="row">
                    <div className="col">
                      <label for="txt" className="form-label">Company Id</label>
                      <input type="number" className="form-control"  name="companyid"/>
                    </div>
                    
                    <div className="col">
                      <label for="txt" className="form-label">Company Name</label>
                      <input type="text" className="form-control" name="company name"/>
                    </div>
                  </div>
                  <br/>
                  
                  <div className="row">
                    <div className="col">
                      <label for="txt" className="form-label">Company Description</label>
                      <textarea type="text" className="form-control"  name="compDescription"></textarea>
                    </div>
                  </div>
                  <br/>
                  
                  <div className="row">
                    <div className="col">
                      <label for="txt" className="form-label">Contact No.</label>
                      <input type="number" className="form-control"  name="contact"/>
                    </div>
                    
                    <div className="col">
                      <label for="txt" className="form-label">Email Id</label>
                      <input type="email" className="form-control"  name="email"/>
                    </div>
                  </div>
                  <br/>
                  
                  <div className="row">
                    <div className="col">
                      <label for="txt" className="form-label">Address</label>
                      <input type="text" className="form-control"  name="address"/>
                    </div>
                  </div>
                  <br/>
                  <button type="button" className="btn btn-primary" onClick={Company}>Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>

)}

export default AddCompany