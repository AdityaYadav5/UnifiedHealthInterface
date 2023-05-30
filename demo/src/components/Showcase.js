import React from 'react'
// import Navbar from '../components/Navbar'
import {Link} from "react-router-dom"
import sc from "../images/showcase.svg"

const Showcase = () => {
  return (
    <div>
        <section className="bg-dark text-light text-center text-sm-start p-5 p-lg-0 pt-lg-5 mt-5">

        <div class="container d-flex">

          <div className="d-sm-flex align-items-stretch justify-content-between">

              <div>
                <h1>
                  Keep your medical records safe and secure
                </h1>
                <p class="lead pt-5">
                  Unified Health Interface is a blockchain based electronic medical record system that can be accessed by hospitals and patients for storing medical records and data.
                </p>
                <Link to="/dashboard" className="g-4 btn btn-primary" target="_blank">Get Started</Link>
                <a href="#about" className="m-4 g-4 btn btn-secondary">About us</a>
              </div>

              <div>
                <img src={sc} class="img-fluid"  alt=""/>
              </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Showcase