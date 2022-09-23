
const Usertable = () =>{
  return(
  <div>
    <table className="table" style={{width:"90%", marginLeft:"50px"}}>
      <thead className="table-success">
        <tr style={{textAlign:"center"}}>
          <th scope="col">Id</th>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Contact No.</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      
      <tbody>
        <tr style={{textAlign:"center", color:"white"}}>
          <th scope="row">1</th>
          <td>Owner</td>
          <td>Admin</td>
          <td>1234567890</td>
          <td>
            <div className="d-flex">
              <button className="btn btn-outline-primary" type="button" style={{marginLeft:"140px", marginRight:"50px"}}>View</button>
              <button className="btn btn-outline-warning" type="button" style={{marginRight:"40px"}}>Update</button>&nbsp;
              <button className="btn btn-outline-danger" type="button">Delete</button>
            </div>
          </td>
        </tr>
      </tbody>
      
      <tbody>
        <tr style={{textAlign:"center", color:"white"}}>
          <th scope="row">2</th>
          <td>User</td>
          <td>One</td>
          <td>0987456321</td>
          <td>
            <div className="d-flex">
              <button className="btn btn-outline-primary" type="button" style={{marginLeft:"140px", marginRight:"50px"}}>View</button>
              <button className="btn btn-outline-warning" type="button" style={{marginRight:"40px"}}>Update</button>&nbsp;
              <button className="btn btn-outline-danger" type="button">Delete</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
        
)}

export default Usertable