import React from 'react'
import {Link} from 'react-router-dom'

const Dashboard2 = () => {
  return (
    <div class="container mt-5 pt-5">
        <div class="row m-5">
            <div class="col-sm-6 mb-3 mb-sm-0">
                <div class="card">
                    <div class="card-body">
                        <div class="card-title">
                            Special Treatment Title
                        </div>
                        <p class="card-text">
                            With Supporting text below as a natural lead-in to additional content
                        </p>
                        {/* User page Link */}
                        <Link to="/register" className="btn btn-primary">Register</Link>
                    </div>
                </div>
            </div>

            <div class="col-sm-6 mb-3 mb-sm-0">
                <div class="card">
                    <div class="card-body">
                        <div class="card-title">
                            Special Treatment Title
                        </div>
                        <p class="card-text">
                            With Supporting text below as a natural lead-in to additional content
                        </p>
                        {/* Hospital/dashboard 2 Link */}
                        <Link to="/login" className="btn btn-primary">Login</Link>
                    </div>
                </div>
            </div>

        </div>
    
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
    </div>



    


  )
}

export default Dashboard2