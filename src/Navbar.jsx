import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-10 mx-auto '>
            {/* <nav className="navbar navbar-expand-lg navbar-light "> */}
            <nav className="navbar navbar-expand-lg navbar-light bg-primary">
              <NavLink exact className="navbar-brand" to="/">ElliePark</NavLink>
              <button className="navbar-toggler" type="button" data-toggle="collapse"
                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <NavLink exact activeClassName="menu_active" className="nav-link" to='/'>Home</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink activeClassName="menu_active" className="nav-link" to='/Service'>Service</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink activeClassName="menu_active" className="nav-link" to='/About'>About</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink activeClassName="menu_active" className="nav-link" to='/Contact'>Contact</NavLink>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
