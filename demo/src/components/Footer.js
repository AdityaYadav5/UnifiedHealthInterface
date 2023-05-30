import React from 'react'
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <div>
        <footer class="p-5 bg-dark text-lg-start text-white text-center fixed-bottom position-relative">
            <div class="container row">
                <div class="col-lg-10">
                <p class="lead">
                    Copyright &copy; 2023 Unified Health Interface
                </p>
                </div>
                <div class="col-lg-2">
                <a href="#" class="position-absolute bottom-0 end-0 p-5">
                    <i class="bi bi-arrow-up-circle h1"></i>
                </a>
                </div>
            </div>
        </footer>
    </div>
  )
}

export default Footer