import React from 'react'
// import {Link} from 'react-router-dom'

const Info = () => {
  return (
    <div>
        <section className="p-5 bg-transparent">

        <div className="container">
          <div className="row text-center g-4">

            <div className="col-md p-4">
            <div class="card bg-dark text-light">
                    <div class="card-body text-center">
                        <div class="h4 mb-3">
                            
                        </div>
                        <h3 class="card-title mb-3">
                          <i className="bi bi-chevron-compact-right"></i>Decentralization</h3>
                        <p class="card-text g-4">
                        IPFS is a decentralized protocol that allows files to be stored and accessed from multiple nodes rather than relying on a single server.
                        <br/>
                        <br/>
                        <br/>
                        </p>
                    </div>
                </div>
            </div>

            <div className="col-md p-4">
            <div class="card bg-dark text-light">
                    <div class="card-body text-center">
                        <div class="h1 mb-3">
                        
                        </div>
                        <h3 class="card-title mb-3">
                          <i className="bi bi-chevron-compact-right"></i>
                          Versioning</h3>
                        <p class="card-text g-4">
                            It  allows different versions of a file to be stored and accessed separately.Useful for tracking changes over time and collaborating on shared file.
                            <br/>
                            <br/>
                        </p>
                    </div>
                </div>
            </div>

            <div className="col-md p-4">
            <div class="card bg-dark text-light">
                    <div class="card-body text-center">
                        <div class="h1 mb-3">
                        
                        </div>
                        <h3 class="card-title mb-3">
                          <i className="bi bi-chevron-compact-right"></i>Efficient Data Distribution</h3>
                        <p class="card-text g-4">
                        IPFS uses a content-addressed data model and a distributed hash table (DHT) to efficiently distribute files across the network.
                        <br/>
                        <p></p>
                        </p>
                        
                    </div>
                </div>
            </div>

            

          </div>
        </div>

        <div className="container">
          <div className="row text-center g-4">

            <div className="col-md p-4">
            <div class="card bg-dark text-light">
                    <div class="card-body text-center">
                        <div class="h4 mb-3">
                            
                        </div>
                        <h3 class="card-title mb-3">
                          <i className="bi bi-chevron-compact-right"></i>Content Addressing</h3>
                        <p class="card-text g-4">
                        Files are identified by their content rather than their location. This makes it possible to access files even if the original location or server is no longer available.
                        <p></p>
                        </p>
                    </div>
                </div>
            </div>

            <div className="col-md p-4">
            <div class="card bg-dark text-light">
                    <div class="card-body text-center">
                        <div class="h1 mb-3">
                        
                        </div>
                        <h3 class="card-title mb-3">
                          <i className="bi bi-chevron-compact-right"></i>
                          Tamper Evident</h3>
                        <p class="card-text g-4">
                        IPFS uses cryptographic hashes to ensure that data is tamper-evident, meaning that any changes to the data can be detected.
                        <br/>
                        <br/>
                        <p></p>
                        </p>
                    </div>
                </div>
            </div>

            <div className="col-md p-4">
            <div class="card bg-dark text-light">
                    <div class="card-body text-center">
                        <div class="h1 mb-3">
                        
                        </div>
                        <h3 class="card-title mb-3">
                          <i className="bi bi-chevron-compact-right"></i>Interoperability</h3>
                        <p class="card-text g-4">
                        IPFS is designed to be interoperable with other protocols and tools, enabling it to be used in conjunction with other decentralized technologies.
                        <br/>
                        <br/>
                        <p></p>
                        </p>
                        
                    </div>
                </div>
            </div>

            

          </div>
        </div>


      </section>
    </div>
  )
}

export default Info