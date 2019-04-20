import React from 'react'
import { NavLink } from 'react-router-dom';
import { Navigation } from "../../config/Navigation";
import { withRouter } from "react-router";
const Nav = (props) => {
  const pathname =props.location.pathname
  
    const nav = Navigation.map((value,index)=>{
        return <li className={`nav-item ${pathname === value.link?"active":null} px-lg-4`} key={index}>
                    <NavLink className="nav-link text-uppercase text-expanded" 
                    to={value.link}>{value.navName}</NavLink>
                </li>
    })
  return (
    <nav className="navbar navbar-expand-lg navbar-dark py-lg-4" id="mainNav">
    <div className="container">
      <a className="navbar-brand text-uppercase text-expanded font-weight-bold d-lg-none" href="/">Start Bootstrap</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav mx-auto">
          {nav}
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default withRouter(Nav)
