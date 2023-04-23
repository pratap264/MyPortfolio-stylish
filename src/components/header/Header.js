import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <nav class="navbar">
      <div class="logo">Pratapsingha Garud<p style={{marginLeft:"90px",fontSize:"13px"}}>web developer</p></div>
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
            <a class="nav-link" href="#">
              Skills
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Projects
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Experience
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
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
