import '../components/AddProduct.css'
import {useNavigate} from 'react-router-dom'

const AddProduct = () =>{
    const navigate = useNavigate();
    const Products=()=>{ 
        navigate('/components/products')
    }

    return(
        <div className='box'>
            <div className="text-center" >
                <div className="col-2" style={{marginLeft:"300px", width:"60%"}}>
                  <div className="card bg-dark text-light" >
                    <div className="card-body text-center">
                      <div className="h1">
                        <i className="fa fa-cubes"></i>
                      </div>
                      <div className='product-form'>
            <div class="container">
             <center><h1>Add Product</h1></center>   
              <div>
              <form class="d-flex">
             
            </form>
            <br/>

<form>
  <div class="row">
    <div class="col">
    <label for="txt" class="form-label">Product Id</label>
    <input type="text" class="form-control"  name="email"/>
    </div>
    <div class="col">
    <label for="txt" class="form-label">Product Category</label>
      <input type="text" class="form-control" name="pswd"/>
    </div>
  </div>

<br/>

<div class="row">
    <div class="col">
    <label for="txt" class="form-label">Product Name</label>
    <input type="text" class="form-control"  name="email"/>
    </div>
    <div class="col">
    <label for="txt" class="form-label">Manufacture Date</label>
      <input type="date" class="form-control"  name="pswd"/>
    </div>
  </div>

<br/>

<div class="row">
    <div class="col">
    <label for="date" class="form-label">Expiry Date</label>
    <input type="date" class="form-control"  name="email"/>
    </div>
    <div class="col">
    <label for="txt" class="form-label">Cost Per Item</label>
      <input type="text" class="form-control"  name="pswd"/>
    </div>
  </div>

<br/>

<div class="row">
    <div class="col">
    <label for="txt" class="form-label">Total Stock</label>
    <input type="text" class="form-control"  name="email"/>
    </div>
    <div class="col">
    <label for="txt" class="form-label">Company Name</label>
      <input type="text" class="form-control"  name="pswd"/>
    </div>
  </div>

<br/>
  
<button type="button" class="btn btn-primary" onClick={Products}>Submit</button>

  

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

export default AddProduct