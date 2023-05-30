import React from 'react'

const Faq = () => {
  return (
    <div className="bg-primary p-5">
    <section className="">
      <h1 className="text-center">Frequently Asked Questions</h1>
    <div class="accordion" id="accordionExample">

  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        What is IPFS?
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      IPFS (InterPlanetary File System) is a distributed peer-to-peer protocol that allows users to store and share files in a decentralized manner.
      </div>
    </div>
  </div>

  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        How does IPFS work?
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      IPFS works by breaking files into small pieces, which are then stored across a network of nodes. When a user requests a file, IPFS retrieves the pieces from multiple nodes and reassembles them.
      </div>
    </div>
  </div>

  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Is IPFS like BitTorrent?
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      IPFS and BitTorrent share some similarities, such as the use of peer-to-peer networking to distribute files. However, IPFS has some additional features, such as content addressing and versioning, that make it more suited to certain use cases.
      </div>
    </div>
  </div>

  <div class="accordion-item">
    <h2 class="accordion-header" id="headingFour">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
        What are the benefits of using IPFS?
      </button>
    </h2>
    <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      Some benefits of using IPFS include decentralized storage and distribution, improved content availability, and reduced reliance on centralized servers.
      </div>
    </div>
  </div>

  <div class="accordion-item">
    <h2 class="accordion-header" id="headingFive">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
        Is IPFS secure?
      </button>
    </h2>
    <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      IPFS does not provide inherent security features, but users can encrypt their data and authenticate content using cryptographic hashes. Additionally, IPFS can be used in conjunction with other security protocols and tools.
      </div>
    </div>
  </div>

  
  
</div>
        </section>
    </div>  
  )
}

export default Faq