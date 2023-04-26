import Search from "./search";


const Navbar=()=>{
    return(
        <div >
        <header class="header">
          <div class="header-1">
            <a href="#" class="logo">
              {" "}
              <i class="fas fa-book"></i> bookly{" "}
            </a>
  
            <Search/>
  
            <div class="icons">
              <div id="search-btn" class="fas fa-search"></div>
              <a href="#" class="fas fa-heart"></a>
              <a href="#" class="fas fa-shopping-cart"></a>
              <button><div id="login-btn" class="fas fa-user"></div></button>
            </div>
          </div>
        </header>
      </div>
    );
} 

export default Navbar;