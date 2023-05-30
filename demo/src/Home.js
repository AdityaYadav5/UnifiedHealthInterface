import React from 'react'
// import Navbar from '../components/Navbar'
import Showcase from './components/Showcase'
// import Team from './components/Team'
import Info from './components/Info'
import Faq from './components/Faq'
import un from './images/undraw_nakamoto_-2-iv6.svg'

const Home = () => {
  return (
    <div>
    <Showcase/>
      {/* Info Cards */}

      <section class="bg-info p-5 p-lg-0 pt-lg-5 text-center text-sm-start">
        <div class="container d-flex">
            <div class="d-sm-flex align-items-center justify-content-between">
            
               <img className="img-fluid w-50 d-none d-sm-block" src={un} />

               <div>
                <h1 class="m-4">What is IPFS?</h1>
                <p class="lead m-4">
                At a high level, IPFS is a way to store and share files in a decentralized manner. This means that instead of relying on a central server to store and distribute files, IPFS uses a network of nodes to store pieces of files across the network. When a user requests a file, IPFS retrieves the pieces from multiple nodes and reassembles them, allowing the user to access the file.
                It is an open-source protocol, so anyone can use, modify and contribute to its development</p>
            </div>

            </div>
        </div>
    </section>

    <Info/>
    {/* display info */}



{/*     
    <Team/> */}

    <Faq/>

    </div>
  )
}

export default Home