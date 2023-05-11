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
              <div data-width="95%" style={{ width: "95%" }}></div>
            </footer>
          </div>
          <div class="chart">
            {" "}
            <span>Back-end</span>
            <footer>
              <div
                data-width="75%"
                style={{ background: "rgb(255, 34, 83)", width: "75%;" }}
              ></div>
            </footer>
          </div>
          <div class="chart">
            {" "}
            <span>ReactJS</span>
            <footer>
              <div
                data-width="70%"
                style={{ background: "rgb(210, 108, 213)", width: "70%" }}
              ></div>
            </footer>
          </div>
          <div class="chart">
            {" "}
            <span>ASP.NET</span>
            <footer>
              <div data-width="55%" style={{ width: "55%" }}></div>
            </footer>
          </div>
        </div>
      </div>

      {/* Work code starts  */}

      <div className="work" id="work">
        <pre className="test">
          &nbsp;&nbsp;&nbsp;&nbsp;&lt;/html&gt;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;body&gt;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h2&gt;
          <br />
          <p className="about-title">
            {" "}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;My Work
          </p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h2/&gt;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;
          <p className="about-text">
            A small gallery of recent projects chosen by me.Some of them I've
            done all together with amazing people from companies around the{" "}
            <br />
            globe. It's only a drop in the ocean compared to the entire list.{" "}
            Interested to see some more? Visit{" "}
            <a
              rel="work"
              href="#work"
              style={{ margin: "3px", color: "#08fdd8" }}
            >
              My work
            </a>{" "}
            page.
          </p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;p/&gt;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;section&gt;
          <div class="work-data">
            <div class="work-row">
              <div class="work-item">Column</div>
              <div class="work-item">Column</div>
              <div class="work-item">Column</div>
              <div class="work-item">Column</div>
            </div>
            <div class="work-row">
              <div class="work-item">Column</div>
              <div class="work-item">Column</div>
              <div class="work-item">Column</div>
              <div class="work-item">Column</div>
            </div>
          </div>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;section/&gt;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;body/&gt;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&lt;html/&gt;
          <br />
        </pre>
      </div>

      {/* Experince code starts  */}

      <div className="experience" id="experience">
        <pre className="test">
          &nbsp;&nbsp;&nbsp;&nbsp;&lt;/html&gt;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;body&gt;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h2&gt;
          <br />
          <p className="about-title">
            {" "}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Experience
          </p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h2/&gt;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;
          <p className="about-text">
            I Work in TarnsUinon and <br />
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
            <span>5TechG</span>
            <footer>
              <div data-width="95%" style={{ width: "95%" }}></div>
            </footer>
          </div>
          <div class="chart">
            {" "}
            <span>Google</span>
            <footer>
              <div
                data-width="75%"
                style={{ background: "rgb(255, 34, 83)", width: "75%;" }}
              ></div>
            </footer>
          </div>
          <div class="chart">
            {" "}
            <span>TransUnion</span>
            <footer>
              <div
                data-width="70%"
                style={{ background: "rgb(210, 108, 213)", width: "70%" }}
              ></div>
            </footer>
          </div>
          <div class="chart">
            {" "}
            <span>Mastercard</span>
            <footer>
              <div data-width="55%" style={{ width: "55%" }}></div>
            </footer>
          </div>
        </div>
      </div>

      {/* Contact code starts  */}

      <div className="contact" id="contact">
        <div className="box1">
          <pre className="test">
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;/html&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;body&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h2&gt;
            <br />
            <p className="about-title">
              {" "}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Contact
              Me
            </p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h2/&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;
            <p className="about-text">
              I'm interested in freelance opportunities - especially <br />
              ambitious or large projects. However, if you have other <br />
              request or question, don't hesitate to use the form.
            </p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;p/&gt;{" "}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;form&gt;
          </pre>
          <div class="contact-form">
            <form id="cform" autocomplete="off">
              <ul>
                <li class="half-input">
                  <input
                    class="input__field input__field--hoshi"
                    placeholder="Name"
                    type="text"
                    name="name"
                  />
                  <label class="input__label input__label--hoshi input__label--hoshi-color-2"></label>
                </li>
                <li class="half-input">
                  <input
                    class="input__field input__field--hoshi"
                    placeholder="Email"
                    type="email"
                    name="email"
                  />
                  <label class="input__label input__label--hoshi input__label--hoshi-color-2"></label>
                </li>
                <li class="animated fadeInUp">
                  <input
                    class="input__field input__field--hoshi"
                    placeholder="Subject"
                    type="text"
                    name="subject"
                  />
                  <label class="input__label input__label--hoshi input__label--hoshi-color-2"></label>
                </li>
                <li class="animated fadeInUp">
                  <textarea
                    class="input__field input__field--hoshi"
                    placeholder="Message"
                    name="msg"
                  ></textarea>
                  <label class="input__label input__label--hoshi input__label--hoshi-color-2"></label>
                </li>
                <button className="btn-long">Send message!</button>
                {/* <li class="submit animated fadeInUp">
                  <input type="hidden" name="ip" value="103.208.69.48" />
                  <a href="" id="submit-form" class="flat-button submit-form">
                    <div>
                      <span class="bg"></span>
                      <span class="base"></span>
                      <span class="text">Send message!</span>
                    </div>
                  </a>
                  <input
                    style={{ display: "none" }}
                    id="submit"
                    type="submit"
                    class="flat-button"
                    value="SEND"
                  />
                </li> */}
              </ul>
            </form>
            <pre className="test">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;form/&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;body/&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;html/&gt;
            </pre>
            {/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;form/&gt;
            <br /> */}
          </div>
        </div>
        <div className="box2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d7562.132042483152!2d73.7286!3d18.6161!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1683820439352!5m2!1sen!2sin"
            width="850"
            height="1264"
           style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Homepage;
