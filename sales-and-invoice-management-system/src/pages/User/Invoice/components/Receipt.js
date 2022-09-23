import UserSidebar from '../../../../components/UserSidebar'
import '../invoice.css'

const Receipt = () =>{
  return(
  <div className="invoice-image"><br/><br/>
  <div className="invoice">
    <div className="text-center">
      <div className="col-2" style={{marginLeft:"80px", width:"70%"}}>
        <div className="card bg-dark text-light">
          <div className="card-body text-center">
            <div className="h1">
              <i className="fa fa-file-text"></i>
            </div>
            <h3 className="card-title">
              Invoice<hr/>
            </h3>

            <h4>Order Details</h4><br/>
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
              
              <div class="row">
                <div class="col">
                  <label for="txt" class="form-label">Order Status</label>
                  <input type="text" class="form-control" placeholder="Order Status" name="orderstatus"/>
                </div>
                
                <div class="col">
                  <label for="txt" class="form-label">User Name</label>
                  <input type="text" class="form-control" placeholder="Username" name="username"/>
                </div>
              </div>
            </form><hr/>
            
            <h4>Order Items</h4><br/>
            <div>
              <table class="table">
                <thead class="table-success">
                  <tr>
                    <th scope="col">Product Id</th>
                    <th scope="col">Product Name</th>
                    <th scope="col">Total Item</th>
                    <th scope="col">Cost Per Unit</th>
                    <th scope="col">Grand Total</th>
                  </tr>
                </thead>
                
                <tbody style={{color:"white"}}>
                  <tr>
                    <th scope="row">1</th>
                    <td>Maggie</td>
                    <td>2</td>
                    <td>14</td>
                    <td>28</td>
                  </tr>
                </tbody><hr/>
              </table>
              <div>
                <center><button class="btn btn-danger" type="button">Print</button></center>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>

)}

export default Receipt