import React from 'react'

const Navbar = () => {
  return (
    <header className="p-3 text-bg-dark">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a href="/" className="brand-name d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
              Device Coffee

            </a>
            <ul className="nav col-12 col-lg-auto mx-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li><a href="#" className="nav-link px-3 text-secondary">Home</a></li>
              <li><a href="#" className="nav-link px-3 text-white">Places to Drink</a></li>
              <li><a href="#" className="nav-link px-3 text-white">Drinks</a></li>
            </ul> 
            <div className="text-end">
              <button type="button" className="btn btn-outline-light me-2">Login</button>
              <button type="button" className="btn btn-warning">Sign-up</button>
            </div>
          </div>
        </div>
      </header>
  )
}

export default Navbar