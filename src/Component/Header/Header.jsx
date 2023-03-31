import React from 'react';
import'./Header.css'
import logo from'../../../public/user-2.png'

const Header = () => {
    return (
        <div>
            

    <nav class="navbar navbar-expand-lg bg-body-tertiary mx-5 py-3">
  <div class="container">
    <a class="navbar-brand fw-bold" href="#">Knowledge Cafe </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      </ul>
 
       {/* <img className='image' src="../../../public/user-2.png" alt="" /> */}
       <img  className='image' src={logo} alt="" />
      


    </div>
  </div>
</nav>
        <hr className='mx-auto'/>
        </div>
    );
};

export default Header;