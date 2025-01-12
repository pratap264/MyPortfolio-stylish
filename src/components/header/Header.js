import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <nav class="navbar">
      <div class="logo"><div className="alpha-parent-header" >
              <div className="alpha-header" id="alpha-header-1">P</div>
              <div className="alpha-header" id="alpha-header-2">P</div>
            </div>
            {"  "}   <p style={{marginLeft:"47px",paddingTop:"13px"}}> ratapsingh Garud</p> <p style={{marginLeft:"90px",fontSize:"13px",marginBottom:"3px"}}>web developer</p></div>
      <div>
        <input type="checkbox" id="checkbox_toggle" />
        <label for="checkbox_toggle" class="hamburger">
          &#9776;
        </label>

        <ul class="nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#about">
              About
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#skills">
              Skills
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#work">
              Work
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#experience">
              Experience
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#contact">
              Contact
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" style={{color: '#08fdd8'}}>
              Blogs
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" style={{color: '#08fdd8'}}>
              Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Header;
