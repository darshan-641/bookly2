import { useState } from "react";
import "../CSS/style.css";
// import Login from "../Login/login";
// import Signup from "../Signup/signup";

export default function Navbar() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const handleLoginModalClose = () => {
    setShowLoginModal(false);
  }

  const handleSignUpModalClose = () => {
    setShowSignUpModal(false);
  }

  const handleSignupClick=()=>{
    setShowLoginModal(false);
    setShowSignUpModal(true);
  }
  
  const handleLoginClick=()=>{
    setShowLoginModal(true);
    setShowSignUpModal(false);
  }
  
  let loginModal=null;
  let signUpModal=null;
  // if(showLoginModal){
  //   loginModal= <Login  show={showLoginModal} handleClose={handleLoginModalClose} handleSignUp={handleSignupClick}></Login>;
  // }
  // if(showSignUpModal){
  //   signUpModal=<Signup show={showSignUpModal} handleClose={handleSignUpModalClose} handleLogin={handleLoginClick}></Signup>
  // }
  
  return (
    <div className="sticky top-0 z-10 w-full">
      <header class="header">
        <div class="header-1">
          <a href="#" class="logo">
            {" "}
            <i class="fas fa-book"></i> bookly{" "}
          </a>

          <form action="" class="search-form">
            <input
              type="search"
              name=""
              placeholder="search here..."
              id="search-box"
            />
            <label for="search-box" class="fas fa-search"></label>
          </form>

          <div class="icons">
            <div id="search-btn" class="fas fa-search"></div>
            <a href="#" class="fas fa-heart"></a>
            <a href="#" class="fas fa-shopping-cart"></a>
            <button onClick={() => setShowLoginModal(true)}><div id="login-btn" class="fas fa-user"></div></button>
           {loginModal}
           {signUpModal}
          </div>
        </div>

        <div class="header-2">
          <nav class="navbar">
            <a href="/">home</a>
            <a href="#featured">featured</a>
            <a href="#arrivals">arrivals</a>
            <a href="#reviews">reviews</a>
            <a href="#blogs">blogs</a>
          </nav>
        </div>
      </header>
    </div>
  );
}
