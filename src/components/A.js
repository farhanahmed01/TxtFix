
import { Link } from 'react-router-dom';
import React , {useState}  from 'react'



const Navbar = (props) => {
    const [isHovered, setIsHovered] = useState(false);
    
    return ( 
        <div >
        <nav className={`navbar navbar-expand-lg navbar-${props.Mode} bg-${props.Mode}`}>
        <div className="container-fluid">
        <Link ClassName="navbar-brand" to="/">TxtFix</Link>


        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
            <Link ClassName="nav-link active" aria-current="page">Convert Case</Link>

            </li>
            <li className="nav-item">
            <Link ClassName="nav-link active" aria-current="page" to ="/About">About</Link>

            </li>
                   
            <li class="nav-item dropdown" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
          <a class="nav-href dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Text Modification
          </a>
          
          <ul class="dropdown-menu" style={{ display: isHovered ? "block" : "none"}}>
            <li><a class="dropdown-item" href="/BigText">Big Text Generator</a></li>
            <li><a class="dropdown-item" href="/">Bold Text Generator</a></li>
            <li><a class="dropdown-item" href="/">Duplicate Line Remover</a></li>
            <li><a class="dropdown-item" href="/">Reverse Text Generator</a></li>
          </ul>
        </li>

        <li className="nav-item">
            <Link ClassName="nav-link active" aria-current="page" to="/">Image tool</Link>

        </li>
            
        
       
        <li className="nav-item">
            <Link ClassName="nav-link active" aria-current="page" to="/">Random Generator</Link>

        </li>
            
                
        </ul>
            
        

        <div className={`form-check form-switch text-${props.Mode==="light"?"dark":"light"}`}>
                <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                <label className="form-check-label" htmlfor="flexSwitchCheckDefault">Enable Dark Mode</label>
                </div>
                
        </div>
    </div>
    </nav>
    </div>
  )
}

export default Navbar;
