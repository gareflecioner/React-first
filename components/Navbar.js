import React from 'react'
import {NavLink} from 'react-router-dom'

export const Navbar=() => (

    <nav className="navbar navbar-expand navbar-dark bg-dark" aria-label="Second navbar example">
    <div className="container-fluid">
      <NavLink className="navbar-brand" to="/">Always.</NavLink>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample02" aria-controls="navbarsExample02" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarsExample02">
        <ul className="navbar-nav me-auto">
          <li className="nav-item">
          <NavLink
            className="nav-link" 
            to="/" 
            >Главная</NavLink>
          </li>
          <li className="nav-item">
          <NavLink
            className="nav-link" 
            to="/posts" 
            >Все рецензии</NavLink>
          </li>
          <li className="nav-item">
          <NavLink
            className="nav-link " 
            to="/about" 
            >О нас</NavLink>
            </li>
          <li className="nav-item">
          <NavLink
            className="nav-link" 
            to="/advise_on" 
            >Порекомендовать</NavLink>
          </li>
        </ul>
      </div>
    </div>
    </nav>
);

export default Navbar ;