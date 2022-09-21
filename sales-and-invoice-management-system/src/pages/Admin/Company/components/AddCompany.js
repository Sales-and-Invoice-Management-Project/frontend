import '../components/AddCompany.css'
import {useNavigate} from 'react-router-dom'

const AddCompany = () =>{
  const navigate = useNavigate();
    const Company=()=>{ 
        navigate('/components/company')
    }

    return(
      <div className='box'>
      <div className="text-center" >
          <div className="col-2" style={{marginLeft:"300px", width:"60%"}}>
            <div className="card bg-dark text-light" >
              <div className="card-body text-center">
                <div className="h1">
                  <i className="fa fa-building-o"></i>
                </div>
                <div className='product-form'>
      <div class="container">
       <center><h1>Add Company</h1></center>   
        <div>
        <form class="d-flex">
       
      </form>
      <br/>

<form>
<div class="row">
<div class="col">
<label for="txt" class="form-label">Company Id</label>
<input type="text" class="form-control"  name="companyid"/>
</div>
<div class="col">
<label for="txt" class="form-label">Company Name</label>
<input type="text" class="form-control" name="company name"/>
</div>
</div>

<br/>

<div class="row">
<div class="col">
<label for="txt" class="form-label">Company Description</label>
<textarea type="text" class="form-control"  name="compDescription"></textarea>
</div>
</div>

<br/>

<div class="row">
<div class="col">
<label for="txt" class="form-label">Contact No.</label>
<input type="text" class="form-control"  name="contact"/>
</div>
<div class="col">
<label for="txt" class="form-label">Email Id</label>
<input type="text" class="form-control"  name="email"/>
</div>
</div>

<br/>

<div class="row">
<div class="col">
<label for="txt" class="form-label">Address</label>
<input type="text" class="form-control"  name="address"/>
</div>
</div>

<br/>

<button type="button" class="btn btn-primary" onClick={Company}>Submit</button>



</form>
</div>
</div>
      
  </div>
              </div>
            </div>
          </div>
          </div>
  </div>

    )
}

export default AddCompany