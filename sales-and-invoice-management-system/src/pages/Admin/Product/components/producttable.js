
const Producttable = () =>{
  return(
  <div>
    <table className="table" style={{width:"90%", marginLeft:"50px"}}>
      <thead className="table-success">
        <tr style={{textAlign:"center"}}>
          <th scope="col">Product Id</th>
          <th scope="col">Product Category</th>
          <th scope="col">Product Name</th>
          <th scope="col">Company Name</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      
      <tbody>
        <tr style={{textAlign:"center", color:"white"}}>
          <th scope="row">1</th>
          <td>Noodles</td>
          <td>Maggi</td>
          <td>Nestlé Global</td>
          <td>
            <div className="d-flex">
              <button className="btn btn-outline-primary" type="button" style={{marginLeft:"60px", marginRight:"30px"}}>View</button>
              <button className="btn btn-outline-warning" type="button" style={{marginRight:"30px"}}>Update</button>&nbsp;
              <button className="btn btn-outline-danger" type="button">Delete</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
        
)}

export default Producttable