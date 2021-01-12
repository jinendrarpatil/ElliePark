import React from 'react';
import { NavLink } from 'react-router-dom';

function Card(props) {
  return (
    <>
      <div className='col-md-4 col-10 mx-auto mt-auto'>
        <div className="card">
          <img src={props.src} className="card-img-top" alt={props.src} height='300px' width='100px' />
          <div className="card-body">
            <h5 className="card-title font-weight-bold ">{props.title}</h5>
            <p className="card-text font-italic"> {props.msg} </p>
            <NavLink to="/Contact" className="btn btn-primary ">  Want Enquiry? </NavLink>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card
