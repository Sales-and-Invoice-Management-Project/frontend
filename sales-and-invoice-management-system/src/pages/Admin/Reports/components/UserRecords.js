import '../reports.css'

const UserRecords = () =>{
    return(
      <div className="report-image"><br/><br/><br/>
        <div className="text-center" >
                <div className="col-2" style={{marginLeft:"110px", width:"85%"}}>
                  <div className="card bg-dark text-light" >
                    <div className="card-body text-center">
                      <div className="h1">
                        <i className="fa fa-users"></i>
                      </div>
                      <h3 className="card-title">
                       User Records
                      </h3><br/><br/>
                      <table class="table" style={{width:"90%", marginLeft:"50px"}}>
          <thead class="table-success">
            <tr style={{textAlign:"center"}}>
              <th scope="col">User Id</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Gender</th>
              <th scope="col">Email Id</th>
              <th scope="col">Contact no.</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{textAlign:"center", color:"white"}}>
              <th scope="row">U1</th>
              <td>Owner</td>
              <td>Admin</td>
              <td>Male</td>
              <td>admin@gmail.com</td>
              <td>1234567890</td>
              <td>
                <div class="d-flex">
                  <button class="btn btn-outline-primary" type="button" style={{marginLeft:"100px", marginRight:"30px"}}>View</button>
                  <button class="btn btn-outline-danger" type="button">Delete</button>
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

    )
}

export default UserRecords