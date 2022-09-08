import "./Sidebar.css"

const UserSidebar = function () {

    return (
    <div>
      
      {/* The sidebar */}
      <div class="sidebar">
        <div>
          <b>
            <center>
            <a><i class="fa fa-user-circle-o"></i><br/>USER</a>
            </center>
          </b> 
        </div><hr/>
          <a href="#invoice"><i class="fa fa-file-text"></i> Invoice</a>
          <a href="#inventory"><i class="fa fa-cubes"></i> Inventory</a>
          <a href="#signout"><i class="fa fa-sign-out"></i> Sign-Out</a>
        </div>
    </div>
  )}
  
  export default UserSidebar