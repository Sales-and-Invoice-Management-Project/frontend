import UserSidebar from "../../../components/UserSidebar";
import {useNavigate} from 'react-router-dom'
import './invoice.css'



const Invoice = () => {
  const navigate = useNavigate();
  const Receipt=()=>{
    navigate('/Invoice/components/Receipt')
  }
  return(
  <div className="invoice-image"><br/><br/>
  <div className="invoice">
    <UserSidebar/>
    <div className="text-center">
      <div className="col-2" style={{marginLeft:"110px", width:"85%"}}>
        <div className="card bg-dark text-light">
          <div className="card-body text-center">
            <div className="h1">
              <i className="fa fa-file-text"></i>
            </div>
            <h3 className="card-title">
              Invoice<hr/>
            </h3>
            
            <h4>Order Details</h4>
            <form>
              <div class="row">
                <div class="col">
                  <label for="txt" class="form-label">Order Id</label>
                  <input type="number" class="form-control" placeholder="Order Id" name="orderid"/>
                </div>
                
                <div class="col">
                  <label for="txt" class="form-label">Order Date</label>
                  <input type="date" class="form-control" placeholder="Order Date" name="orderdate"/>
                </div>
              </div>
              <br/>
              
              <h4>Add Items Into Cart</h4>
              <div class="row">
                <div class="col">
                  <label for="txt" class="form-label">Select Product</label>
                  <select class="form-select">
                    <option>Please Select</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </select>
                </div>
                
                <div class="col">
                  <label for="txt" class="form-label" >Enter Quantity</label>
                  <input type="number" class="form-control" name="quantity"/>
                </div>
              </div>
              <div>
                <br/>
                <center><button type="button" class="btn btn-primary">Add Item</button></center>
              </div>
            </form><hr/>
            
            <h4>Order Item Details</h4><br/>
            <div>
              <table class="table">
                <thead class="table-success">
                  <tr>
                    <th scope="col">Product Id</th>
                    <th scope="col">Product Name</th>
                    <th scope="col">Price Per Unit</th>
                    <th scope="col">Total Unit</th>
                    <th scope="col">Total Cost</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                
                <tbody style={{color:"white"}}>
                  <tr>
                    <th scope="row">1</th>
                    <td>Maggie</td>
                    <td>14</td>
                    <td>2</td>
                    <td>28</td>
                    <td>
                      <button class="btn btn-danger" type="button">Delete</button>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div>
                <center><button class="btn btn-primary" onClick={Receipt} type="button">Save Sell Details</button></center>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
  
)}
  
  export default Invoice
  