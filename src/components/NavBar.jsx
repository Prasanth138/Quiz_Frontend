import React from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css';

const Navbar = () => {
   return(
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" href="#" to={'/'}>Quiz App</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span></button>
        <div className="collapse navbar-collapse" id="navbarNav" style={{ justifyContent: "flex-end" }}>
          <div className="navbar-nav">
              <Link className="nav-item nav-link"  to={'/createQuestion'}>Create Quiz</Link>
              <Link className="nav-item nav-link"  to={'/editQuestion'}>Edit Quiz</Link>  
          </div>
        </div>
      </div>
    </nav>
  </>
   )
}

export default Navbar;