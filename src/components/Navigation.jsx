import React from 'react';
import {Link} from 'react-router-dom';
function Navigation(props) {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
        <img src="/assets/logo.jpg" className="img-fluid" alt="Responsive image" />
          
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
             
              <li className="nav-item">
                <Link className="nav-link" to="/">
                    Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/create-task">
                    CreateTask</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/profile">Profile</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/task-list">
                    Task List
                    </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                    Link
                    </Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/profile">Profile</Link></li>
                 
               
                </ul>
              </li>
             
            </ul>
           
          </div>
        </div>
      </nav>
  ) 
}

export default Navigation;


