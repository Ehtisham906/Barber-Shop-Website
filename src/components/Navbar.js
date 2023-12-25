import React from 'react'
import { Link } from 'react-router-dom'
// import FirstPage from'./FirstPage'

export default function Navbar(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg  navbar-dark bg-dark ">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link to="/" className="navbar-brand mr-auto"><img src={props.image} alt="" height="90"
            width="90" />
            <img src="" alt="" />
          </Link>
          <div className="collapse navbar-collapse " id="navbar">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item navbarItem "><Link to='/' className="nav-link active"><span
                className="fa fa-home "></span> Home</Link> </li>
              <li className="nav-item navbarItem"><Link to="ourhistory" className="nav-link ">
                <span className="fa fa-history "></span> Our
                history</Link> </li>
              <li className="nav-item navbarItem active"><Link to="services" className="nav-link "> <span
                className="fa fa-wrench "></span>
                Services</Link> </li>
              <li className="nav-item navbarItem"><Link to="contact" className="nav-link "><span
                className="fa fa-address-book "></span> Contact</Link> </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

//
