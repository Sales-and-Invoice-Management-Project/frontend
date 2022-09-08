

const Navbar =()=> {
    
    return(
        <div>
            <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
                <div class="container-fluid">
                    <a class="navbar-brand" href="javascript:void(0)"><i class="fa fa-opencart"></i> Sales and Invoice</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="mynavbar">
                        <ul class="navbar-nav me-auto">
                            <li class="nav-item">
                                <a class="nav-link" href="javascript:void(0)">About Us</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="javascript:void(0)">Contact Us</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="javascript:void(0)">Link</a>
                            </li>
                        </ul>
                     </div>
                </div>
            </nav>
        </div>
        
)}

export default Navbar







