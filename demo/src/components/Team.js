import React from 'react'
import {Link} from 'react-router-dom'

const Team = () => {
  return (
    <div>
      <section id="about" class="p-4 bg-tertiary bg-gradient">
        <div class="container">
          <h2 class="text-center">
            Team Members
          </h2>
          <p class="lead text-center mb-5">
            We are students of Jaypee Institute of Information Technology,Noida
          </p>

          <div class="row g-4">
            <div class="col-md-6 col-lg-4">
              <div class="card bg-white">
                <div class="card-body text-center">
                  {/* <img src={photo} class="card-img-top img-thumbnail rounded mx-auto d-block rounded-circle"  alt=""/> */}
                  <div class="d-flex align-items-center">
                  <img class="card-img-top rounded-circle" src=""/>
                  </div>
                  <h3 class="card-title">Aditya</h3>
                  <p class="p-text mb-0">
                  20103063
                  <br/>
                  B3
                  </p>
                  <Link to="https://twitter.com/explore" target="_blank"><i class="bi bi-twitter text-dark mx-1"></i></Link>
                  <Link to=""><i class="bi bi-discord text-dark mx-1"></i></Link>
                  <Link to=""><i class="bi bi-linkedin text-dark mx-1"></i></Link>
                  <Link to=""><i class="bi bi-facebook text-dark mx-1"></i></Link>
                </div>
              </div>
            </div>

            <div class="col-md-6 col-lg-4">
              <div class="card bg-white">
                <div class="card-body text-center">
                  <img class="card-img-top rounded-circle" src=""/>
                  <h3 class="card-title">Vikalp</h3>
                  <p class="p-text mb-0">
                  20103069<br/>
                  B3
                  </p>
                  <Link to="https://twitter.com/explore" target="_blank"><i class="bi bi-twitter text-dark mx-1"></i></Link>
                  <Link to=""><i class="bi bi-discord text-dark mx-1"></i></Link>
                  <Link to=""><i class="bi bi-linkedin text-dark mx-1"></i></Link>
                  <Link to=""><i class="bi bi-facebook text-dark mx-1"></i></Link>
                </div>
              </div>
            </div>

            <div class="col-md-6 col-lg-4">
              <div class="card bg-white">
                <div class="card-body text-center">
                  {/* <img src={photo} class="card-img-top img-thumbnail rounded mx-auto d-block rounded-circle"  alt=""/> */}
                  <img class="card-img-top rounded-circle" src=""/>
                  <h3 class="card-title">Kartik</h3>
                  <p class="p-text mb-0">
                  20103083<br/>
                  B3
                  </p>
                  <Link to="https://twitter.com/explore" target="_blank"><i class="bi bi-twitter text-dark mx-1"></i></Link>
                  <Link to=""><i class="bi bi-discord text-dark mx-1"></i></Link>
                  <Link to=""><i class="bi bi-linkedin text-dark mx-1"></i></Link>
                  <Link to=""><i class="bi bi-facebook text-dark mx-1"></i></Link>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  )
}

export default Team