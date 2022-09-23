import '../components/AddInventory.css'
import {useNavigate} from 'react-router-dom'

const AddInventory = () =>{
  const navigate = useNavigate();
  const Products=()=>{
    navigate('/components/inventory')
  }
  return(
  <div className="addproduct-image"><br/><br/><br/>
  <div className="text-center">
    <div className="col-2" style={{marginLeft:"300px", width:"60%"}}>
      <div className="card bg-dark text-light">
        <div className="card-body text-center">
          <div className="h1">
            <i className="fa fa-cubes"></i>
          </div>
          
          <div className='product-form'>
            <div>
              <center><h1>Add Product</h1></center><hr/>
              <div>
                <br/>
                <form>
                  <div className="row">
                    <div className="col">
                      <label for="txt" className="form-label">Product Id</label>
                      <input type="number" className="form-control"  name="product id"/>
                    </div>
                    
                    <div className="col">
                      <label for="txt" className="form-label">Product Category</label>
                      <input type="text" className="form-control" name="product category"/>
                    </div>
                  </div>
                  <br/>
                  
                  <div className="row">
                    <div className="col">
                      <label for="txt" className="form-label">Product Name</label>
                      <input type="text" className="form-control"  name="product name"/>
                    </div>
                    
                    <div className="col">
                      <label for="txt" className="form-label">Manufacture Date</label>
                      <input type="date" className="form-control"  name="mdate"/>
                    </div>
                  </div>
                  <br/>
                  
                  <div className="row">
                    <div className="col">
                      <label for="date" className="form-label">Expiry Date</label>
                      <input type="date" className="form-control"  name="edate"/>
                    </div>
                    
                    <div className="col">
                      <label for="txt" className="form-label">Cost Per Item</label>
                      <input type="number" className="form-control"  name="costperitem"/>
                    </div>
                  </div>
                  <br/>
                  
                  <div className="row">
                    <div className="col">
                      <label for="txt" className="form-label">Total Stock</label>
                      <input type="number" className="form-control"  name="stock"/>
                    </div>
                      
                    <div className="col">
                      <label for="txt" className="form-label">Company Name</label>
                      <input type="text" className="form-control"  name="companyname"/>
                    </div>
                  </div>
                  <br/>
                  <button type="button" className="btn btn-primary" onClick={Products}>Submit</button>
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

export default AddInventory