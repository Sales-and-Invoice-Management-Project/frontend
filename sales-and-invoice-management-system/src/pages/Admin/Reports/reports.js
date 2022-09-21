import AdminSidebar from "../../../components/AdminSidebar"
import './reports.css'


const Reports = () => {
    return(
        <div>
            <AdminSidebar/>
            <div className="report-image"><br/><br/><br/>
            <div>
            <h1 style={{textAlign:"center", marginLeft:"150px"}}>Reports</h1><br/><br/>
            </div>
              <table>
                <tr >
                  <th>
                  <div className="text-center" >
                <div className="col-2" style={{marginLeft:"300px", width:"60%"}}>
                  <div className="card bg-dark text-light" >
                    <div className="card-body text-center">
                      <div className="h1">
                        <i className="fa fa-user-secret"></i>
                      </div>
                      <h3 className="card-title">
                        User Records
                      </h3><br/><br/>
                      <a href="http://localhost:3000/Reports/components/UserRecords" className="btn btn-primary">Show Details</a>
                      <br/><br/>
                    </div>
                  </div>
                </div>
                </div>
                  </th>

                  <th>
                  <div className="text-center" >
                <div className="col-2" style={{marginLeft:"200px", width:"70%"}}>
                  <div className="card bg-dark text-light" >
                    <div className="card-body text-center">
                      <div className="h1">
                        <i className="fa fa-th-large"></i>
                      </div>
                      <h3 className="card-title">
                        Product Reports
                      </h3><br/><br/>
                      <a href="http://localhost:3000/Reports/components/ProductReport" className="btn btn-primary">Show Details</a>
                      <br/><br/>
                    </div>
                  </div>
                </div>
                </div>
                  </th>

                  <th>
                  <div className="text-center" >
                <div className="col-2" style={{marginLeft:"200px", width:"70%"}}>
                  <div className="card bg-dark text-light" >
                    <div className="card-body text-center">
                      <div className="h1">
                        <i className="fa fa-server"></i>
                      </div>
                      <h3 className="card-title">
                        Company Reports
                      </h3><br/><br/>
                      <a href="http://localhost:3000/Reports/components/CompanyReport" className="btn btn-primary">Show Details</a>
                      <br/><br/>
                    </div>
                  </div>
                </div>
                </div>
                  </th>



                  



                </tr>
              </table>
            </div>
            </div>
        
            

    )
}

export default Reports