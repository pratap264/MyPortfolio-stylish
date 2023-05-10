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
            I'm a Full Stack Web Developer located in India(Pune). I have a{" "}
            <br />
            serious passion for Creating Creative Web-Appliactions with Multiple{" "}
            <br />
            Technologies,UI effects, Problem Solvings, animations and creating{" "}
            <br />
            intuitive, dynamic user experiences.
          </p>
          <p className="about-text">
            Well-organised person, problem solver, independent employee with{" "}
            <br />
            high attention to detail. Interested in Cricket,Chess,outdoor
            activities, <br />
            TV series, PC Gaming and many more... <br />
            Most Important Take care of everyone and their feelings,
          </p>
          <p className="about-text">
            Interested in the entire Full Stack spectrum and working on
            ambitious <br />
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

      <div className="skills" id="skills">
        <pre className="test">
          &nbsp;&nbsp;&nbsp;&nbsp;&lt;/html&gt;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;body&gt;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h2&gt;
          <br />
          <p className="about-title">
            {" "}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;My
            Skills
          </p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h2/&gt;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;
          <p className="about-text">
            I create successful responsive websites that are fast, easy to use,
            and <br />
            built with best practices. The main area of my expertise is
            front-end development, <br />
            HTML, CSS, JS, building small and medium web apps, custom plugins,{" "}
            <br />
            features, animations, and coding interactive layouts.
          </p>
          <p className="about-text">
            I also have full-stack developer experience with <br />
            (ExpressJs, MS-SQL, Django, TypeScript etc...) .<br />
          </p>
          <p className="about-text">
            <p>
              Visit my
              <a
                style={{ margin: "3px", color: "#08fdd8" }}
                href="https://www.linkedin.com/in/jacek-jeznach-0a99b640"
              >
                {" "}
                LinkedIn{" "}
              </a>
              profile for more details or just
              <a
                style={{ margin: "3px", color: "#08fdd8" }}
                href="https://jacekjeznach.com/contact"
              >
                {" "}
                Contact{" "}
              </a>{" "}
              me.
            </p>
          </p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;p/&gt;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;body/&gt;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&lt;html/&gt;
          <br />
        </pre>

        <div class="skills-details">
          <div class="chart">
            {" "}
            <span>Front-end</span>
            <footer>
              <div data-width="95%" style={{width: '95%'}}></div>
            </footer>
          </div>
          <div class="chart">
            {" "}
            <span>Back-end</span>
            <footer>
              <div
                data-width="75%"
                style={{background: 'rgb(255, 34, 83)', width: '75%;'}}
              ></div>
            </footer>
          </div>
          <div class="chart">
            {" "}
            <span>ReactJS</span>
            <footer>
              <div
                data-width="70%"
                style={{background: 'rgb(210, 108, 213)', width: '70%'}}
              ></div>
            </footer>
          </div>
          <div class="chart">
            {" "}
            <span>ASP.NET</span>
            <footer>
              <div data-width="55%" style={{width: '55%'}}></div>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
