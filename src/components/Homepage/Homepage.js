import React from "react";
import "./Homepage.css";

const Homepage = () => {
  return (
    <>
      <div className="landing-page">
        <pre className="test">
          &nbsp;&nbsp;&nbsp;&nbsp;&lt;/html&gt;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;body&gt;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h1&gt;
          <br />
          <h1 className="title">
            {" "}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hi, <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I'm Pratap,
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Full Stack Web
            developer
          </h1>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h1/&gt;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;
          <p className="role">
            {" "}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Front End Developer / Backend Expert
          </p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;p/&gt;
          <br />
          <div className="button"></div>
          <button className="btn">contact me!</button>
          <br />
          <br />
          <br />
          {/* &lt;head&gt;&lt;title&gt;Title&lt;/title&gt;&lt;/head&gt;
        <br />
        &lt;body&gt;
        <br />
        &lt;p&gt;Unrendred html&lt;/p&gt;
        <br />
        &lt;/body&gt;
        <br />
        &lt;/html&gt;
        <br />
        &lt;/div&gt;
        <br /> */}
        </pre>
      </div>

      <div className="about" id="about">
        <pre className="test">
          &nbsp;&nbsp;&nbsp;&nbsp;&lt;/html&gt;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;body&gt;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h2&gt;
          <br />
          <p className="about-title">
            {" "}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;My,
            Myself &amp; I
          </p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h2/&gt;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;
          <p className="about-text">
            I'm a Full Stack Web Developer located in India(Pune). I have a <br />
            serious passion for Creating Creative Web-Appliactions with Multiple <br />
            Technologies,UI effects, Problem Solvings, animations and creating <br />
            intuitive, dynamic user experiences.
          </p>
          <p className="about-text">
            Well-organised person, problem solver, independent employee with <br />
            high attention to detail. Interested in Cricket,Chess,outdoor activities, <br />
            TV series, PC Gaming and many more...  <br />
            Most Important Take care of everyone and their feelings,
          </p>
         
          <p className="about-text">
            Interested in the entire Full Stack spectrum and working on ambitious <br />
            projects with positive people.
          </p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;p/&gt;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;body/&gt;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&lt;html/&gt;
          <br />
        </pre>
      </div>
    </>
  );
};

export default Homepage;
