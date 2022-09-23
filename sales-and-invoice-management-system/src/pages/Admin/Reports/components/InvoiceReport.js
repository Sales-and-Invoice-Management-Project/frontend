import '../reports.css'

const InvoiceReport = () =>{
  return(
  <div className="report-image"><br/><br/><br/>
  <div className="text-center">
    <div className="col-2" style={{marginLeft:"150px", width:"80%"}}>
      <div className="card bg-dark text-light">
        <div className="card-body text-center">
          <div className="h1">
            <i className="fa fa-file-text"></i>
          </div>
          <h3 className="card-title">
            Invoice Reports<hr/>
          </h3><br/><br/>
          
          <table className="table" style={{width:"80%", marginLeft:"110px"}}>
            <thead className="table-success">
              <tr style={{textAlign:"center"}}>
                <th scope="col">Order Id</th>
                <th scope="col">Order Date</th>
                <th scope="col">Order Status</th>
                <th scope="col">User Name</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            
            <tbody>
              <tr style={{textAlign:"center", color:"white"}}>
                <th scope="row">1</th>
                <td>20/08/2022</td>
                <td>Paid</td>
                <td>Admin</td>
                <td>
                  <div className="d-flex">
                    <button className="btn btn-outline-primary" type="button" style={{marginLeft:"140px", marginRight:"30px"}}>View</button>
                    <button className="btn btn-outline-danger" type="button">Delete</button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  </div>

)}

export default InvoiceReport