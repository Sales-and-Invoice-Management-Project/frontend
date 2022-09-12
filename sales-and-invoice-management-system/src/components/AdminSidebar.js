import "./Sidebar.css"

const AdminSidebar = () => {
  return (
    <div>
       
      {/* The sidebar */}
      <div class="sidebar" >
      <div>
          <b>
            <center>
            <a><i class="fa fa-buysellads"></i><br/>ADMIN</a>
            </center>
          </b> 
        </div><hr/>
        
        <a href="users"><i class="fa fa-users"></i> Users</a>
        <a href="products"><i class="fa fa-cubes"></i> Products</a>
        <a href="company"><i class="fa fa-building"></i> Company</a>
        <a href="reports"><i class="fa fa-book"></i> Reports</a>
        <a href="signout"><i class="fa fa-sign-out"></i> Sign-Out</a>
      </div>
      
    </div>
  )}

export default AdminSidebar
