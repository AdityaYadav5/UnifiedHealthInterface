import React from 'react'
import {Link} from 'react-router-dom'

const Dashboard = () => {
  return (
    <div class="container mt-5 pt-5">
        <div class="row m-5">
            <div class="col-sm-6 mb-3 mb-sm-0">
                <div class="card">
                    <div class="card-body">
                        <div class="card-title">
                            Patients
                        </div>
                        <p class="card-text">
                            Click to Avail Patient Services
                        </p>
                        {/* User page Link */}
                        <Link to="/user" className="btn btn-primary">Go to Patient Page</Link>
                    </div>
                </div>
            </div>

            <div class="col-sm-6 mb-3 mb-sm-0">
                <div class="card">
                    <div class="card-body">
                        <div class="card-title">
                            Hospitals
                        </div>
                        <p class="card-text">
                            Click to Avail Hospital Services 
                        </p>
                        {/* Hospital/dashboard 2 Link */}
                        <Link to="/dashboard2" className="btn btn-primary">Go to Hospitals</Link>
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

export default Dashboard