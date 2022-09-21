

const Producttable = () =>{
    return(
<div>
<table class="table" style={{width:"90%"}}>
  <thead class="table-success">
    <tr style={{textAlign:"center"}}>
      <th scope="col">Product Id</th>
      <th scope="col">Product Category</th>
      <th scope="col">Product Name</th>
      <th scope="col">Company Name</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr style={{textAlign:"center"}}>
      <th scope="row">P1</th>
      <td>Noodles</td>
      <td>Maggi</td>
      <td>Nestlé Global</td>
      <td>
        <div class="d-flex">
          <button class="btn btn-outline-primary" type="button" style={{marginLeft:"100px", marginRight:"50px"}}>View</button>
          <button class="btn btn-outline-warning" type="button" style={{marginRight:"40px"}}>Update</button>&nbsp;
          <button class="btn btn-outline-danger" type="button">Delete</button>
        </div>
      </td>
    </tr>
  </tbody>
  
</table>
</div>
        
    )
}

export default Producttable