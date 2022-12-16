import React from 'react';
import {NavLink} from 'react-router-dom'

export const Footer=() => (

<div className="container-fluid">
  <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <div className="col-md-4 d-flex align-items-center">
      <span class="text-muted">© 2022 Always Company, Inc</span>
    </div>
    <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
      <li className="ms-3"><NavLink className="text-muted" to="#"></NavLink><svg className="bi" width="24" height="24"></svg></li>
      <li className="ms-3"><NavLink className="text-muted" to="#"></NavLink><svg className="bi" width="24" height="24"></svg></li>
      <li className="ms-3"><NavLink className="text-muted" to="#"></NavLink><svg className="bi" width="24" height="24"></svg></li>
    </ul>
  </footer>
</div>

);

export default Footer ;
