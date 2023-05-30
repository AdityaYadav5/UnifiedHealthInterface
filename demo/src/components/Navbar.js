import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap/dist/js/bootstrap.bundle.min";
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom'
import React from 'react'
 
 const Navbar = () => {
   return (
     <div>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3 fixed-top">
        <div class="container">
            <a href="/" className="navbar-brand">Unified Health Interface</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu"> <span class="navbar-toggler-icon"></span> </button>

            <div class="collapse navbar-collapse" id="navmenu">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a href="/" class="nav-link">Home</a>
                    </li>
                    
                    <li class="nav-item">
                        <a href="/dashboard" class="nav-link" target="_blank">Dashboard</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
     </div>
   )
 }
 
 export default Navbar