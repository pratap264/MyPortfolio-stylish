import React, { useEffect, useState } from "react";
import TextShpere from "../../pages/skills/TextShpere";
import "./Homepage.css";

const Homepage = () => {


  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    msg: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission

    const { name, email, subject, msg } = formData;

    // Construct the mailto link
    const mailtoLink = `mailto:?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${msg}`)}`;

    // Open the user's email client
    window.location.href = mailtoLink;
  };




  // useEffect(() => {
  //   // Add `letter-hidden` class to all span elements inside `.bouncer`
  //   document.querySelectorAll(".bouncer > span").forEach((element) => {
  //     element.classList.add("letter-hidden");
  //   });

  //   // Observer settings
  //   const intersectionObserverSettings = {
  //     root: null,
  //     rootMargin: "0px",
  //     threshold: 0,
  //   };

  //   const intersectionObserverSettings2 = {
  //     root: null,
  //     rootMargin: "0px",
  //     threshold: 0.25,
  //   };

  //   // Callback for initial observer
  //   const callback = (entries, observer) => {
  //     let i = 0;
  //     entries.forEach((entry) => {
  //       if (entry.isIntersecting) {
  //         setTimeout(() => {
  //           entry.target.classList.remove("hidden");
  //         }, 200 * i++);
  //       }
  //     });
  //   };

  //   const observer = new IntersectionObserver(
  //     callback,
  //     intersectionObserverSettings
  //   );

  //   setTimeout(() => {
  //     document.querySelectorAll(".scroll-appearance").forEach((element) => {
  //       observer.observe(element);
  //     });
  //   }, 1000);

  //   // Callback for bounce effect
  //   const bounceLetter = function () {
  //     this.classList.add("let-bounce");
  //   };

  //   const callback2 = (entries, observer2) => {
  //     entries.forEach((entry) => {
  //       if (entry.isIntersecting) {
  //         let i = 0;
  //         entry.target.querySelectorAll("span").forEach((element) => {
  //           setTimeout(() => {
  //             bounceLetter.call(element);
  //             setTimeout(() => {
  //               element.classList.remove("letter-hidden");
  //             }, 1500);
  //           }, 130 * i++);
  //         });
  //         observer2.unobserve(entry.target);
  //       }
  //     });
  //   };

  //   const observer2 = new IntersectionObserver(
  //     callback2,
  //     intersectionObserverSettings2
  //   );

  //   document.querySelectorAll(".bouncer").forEach((element) => {
  //     observer2.observe(element);
  //   });

  //   // Cleanup observers on unmount
  //   return () => {
  //     observer.disconnect();
  //     observer2.disconnect();
  //   };
  // }, []);


  useEffect(() => {
    const spans = document.querySelectorAll(".bouncer span");

    // Initial animation: show each letter one by one with a bounce effect
    spans.forEach((span) => {
      span.classList.add("letter-hidden"); // Start hidden
    });

    let i = 0;
    spans.forEach((span) => {
      setTimeout(() => {
        span.classList.remove("letter-hidden");
        span.classList.add("let-bounce");
        setTimeout(() => {
          span.classList.remove("let-bounce"); // Remove bounce class after animation
        }, 300); // Match duration of bounce animation in CSS
      }, i++ * 100); // Reduce delay between letters to 100ms
    });

    // Hover effect: apply bounce animation on mouseover
    const bounceLetter = function () {
      this.classList.add("let-bounce");
      setTimeout(() => {
        this.classList.remove("let-bounce");
      }, 1000); // Match duration of hover bounce animation
    };

    spans.forEach((span) => {
      span.addEventListener("mouseover", bounceLetter.bind(span));
    });

    // Cleanup: Remove event listeners on unmount
    return () => {
      spans.forEach((span) => {
        span.removeEventListener("mouseover", bounceLetter.bind(span));
      });
    };
  }, []);


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
          <h1 className="title bouncer">
            {" "}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>H</span><span>i</span>,<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>I</span><span>'</span><span>m</span>{" "}
            <div className="alpha-parent">
              <div className="alpha" id="alpha1">
                P
              </div>
              <div className="alpha" id="alpha2">
                P
              </div>
            </div>
            {" "}{" "}{" "}<span>r</span><span>a</span><span>t</span><span>a</span><span>p</span>,
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>F</span><span>u</span><span>l</span><span>l</span>
            <span>S</span><span>t</span><span>a</span><span>c</span><span>k</span> {" "}
            {/* <span>W</span><span>e</span><span>b</span> {" "} */}
            <span>D</span><span>e</span><span>v</span><span>e</span><span>l</span><span>o</span><span>p</span><span>e</span><span>r</span>
          </h1>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h1/&gt;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;
          <p className="role">
            {" "}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            UI/UX Expert / Content Creator
          </p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;p/&gt;
          <br />
          <div className="button"></div>
          <button
            className="btn"
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
          >
            Contact Me!
          </button>
          <br />
          <br />
        </pre>
        <div class="scroll-down">
          <span>scroll down</span>
          <i class="fas fa-arrow-down"></i>
        </div>
        <div class="scroll-down scroll-down--left">
          <span>scroll down</span>
          <i class="fas fa-arrow-down"></i>
        </div>
      </div>

      <div className="about" id="about">
        <div className="about-content">
          <pre className="test">
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;/html&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;body&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h2&gt;
            <br />
            <p className="about-title bouncer">
              {" "}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>M</span><span>e</span> ,
              <span>M</span><span>y</span><span>s</span><span>e</span><span>l</span><span>f</span> &amp; <span>I</span>
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
        <div className="about-image">
          <img src={require("../../assets/Pratap2.jpg")} alt="About Me" />
        </div>
        <div className="about-scroll-down">
          <span>scroll down</span>
          <i className="fas fa-arrow-down"></i>
        </div>
        <div className="about-scroll-down about-scroll-down--left">
          <span>scroll down</span>
          <i className="fas fa-arrow-down"></i>
        </div>
      </div>


      {/*Skills page started */}
      <div class="section-3-content">
        <section>
          <div className="skills" id="skills">
            <pre className="test">
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;/html&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;body&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h2&gt;
              <br />
              <p className="about-title bouncer">
                {" "}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>M</span><span>y</span>{" "}<span>S</span><span>k</span>
                <span>i</span><span>l</span><span>l</span><span>s</span>
              </p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h2/&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;
              <p className="about-text">
                I create successful responsive websites that<br />are fast,
                easy to use, and built with best practices.<br />The main area
                of my expertise is front-end<br />development, HTML, CSS, JS,
                building small<br />and medium web apps, custom plugins,<br />
                features, animations, & coding interactive layouts.
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
                    href="https://www.linkedin.com/in/pratapsingh-garud-206a3b196/"
                  >
                    {" "}
                    LinkedIn{" "}
                  </a>
                  profile for more details <br />or just
                  <a
                    style={{ margin: "3px", color: "#08fdd8" }}
                    href="#contact"
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
          </div>
        </section>
        <div className="textsphare">
          <TextShpere />
        </div>
        <div class="skills-scroll-down">
          <span>scroll down</span>
          <i class="fas fa-arrow-down"></i>
        </div>
        <div class="skills-scroll-down skills-scroll-down--left">
          <span>scroll down</span>
          <i class="fas fa-arrow-down"></i>
        </div>
      </div>

      {/* Skills page ended */}
      {/* Work code starts  */}

      <div className="work" id="work">
        <pre className="test">
          &nbsp;&nbsp;&nbsp;&nbsp;&lt;/html&gt;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;body&gt;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h2&gt;
          <br />
          <p className="about-title bouncer">
            {" "}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>M</span><span>y</span>{" "}<span>P</span><span>o</span>
            <span>r</span><span>t</span><span>f</span><span>o</span><span>l</span><span>i</span><span>o</span>
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

          <div id="home-magicwall" class="fake-magicwall">
            <ul>
              <li>
                <div class="magic-wall_item lazyload" id="modal1">
                  <img src={require("../../assets/Bez-nazwy-3.jpg")} alt="image" />
                  <div class="hover-content"></div>
                  <a href="#" class="colorbox"></a>
                </div>
              </li>
              <li>
                <div class="magic-wall_item lazyload">
                  <img src={require("../../assets/3.jpg")} alt="image" />
                  <div class="hover-content"></div>
                  <a href="#" class="colorbox"></a>
                </div>
              </li>
              <li>
                <div class="magic-wall_item lazyload">
                  <img src={require("../../assets/Adrian-Flux-Motorsport-1.jpg")} alt="image" />
                  <div class="hover-content"></div>
                  <a href="#" class="colorbox"></a>
                </div>
              </li>
              <li>
                <div class="magic-wall_item lazyload">
                  <img src={require("../../assets/Bez-nazwy-3.jpg")} alt="image" />
                  <div class="hover-content"></div>
                  <a href="#" class="colorbox"></a>
                </div>
              </li>
              <li>
                <div class="magic-wall_item lazyload">
                  <img
                    src={require("../../assets/https-club-silversurfers-com-wp-content-themes-club-2B-img-logo-svg.png")}
                    alt="image"
                  />
                  <div class="hover-content"></div>
                  <a href="#" class="colorbox"></a>
                </div>
              </li>
              <li>
                <div class="magic-wall_item lazyload">
                  <img src={require("../../assets/london-block.jpg")} alt="image" />
                  <div class="hover-content"></div>
                  <a href="#" class="colorbox"></a>
                </div>
              </li>
              <li>
                <div class="magic-wall_item lazyload">
                  <img
                    src={require("../../assets/Adrian-Flux-Motorsport-e1546707189414.jpg")}
                    alt="image"
                  />
                  <div class="hover-content"></div>
                  <a href="#" class="colorbox"></a>
                </div>
              </li>
              <li>
                <div class="magic-wall_item lazyload">
                  <img src={require("../../assets/unnamed.jpg")} alt="image" />
                  <div class="hover-content"></div>
                  <a href="#" class="colorbox"></a>
                </div>
              </li>
              <li>
                <div class="magic-wall_item lazyload">
                  <img src={require("../../assets/ttelo.png")} alt="image" />
                  <div class="hover-content"></div>
                  <a href="#" class="colorbox"></a>
                </div>
              </li>
              <li>
                <div class="magic-wall_item lazyload">
                  <img src={require("../../assets/2-scaled.jpg")} alt="image" />
                  <div class="hover-content"></div>
                  <a href="#" class="colorbox"></a>
                </div>
              </li>
              <li>
                <div class="magic-wall_item lazyload">
                  <img
                    src={require("../../assets/Adrian-Flux-Motorsport-e1546707189414.jpg")}
                    alt="image"
                  />
                  <div class="hover-content"></div>
                  <a href="#" class="colorbox"></a>
                </div>
              </li>
              <li>
                <div class="magic-wall_item lazyload">
                  <img src={require("../../assets/unnamed.jpg")} alt="image" />
                  <div class="hover-content"></div>
                  <a href="#" class="colorbox"></a>
                </div>
              </li>
              <li>
                <div class="magic-wall_item lazyload">
                  <img src={require("../../assets/ttelo.png")} alt="image" />
                  <div class="hover-content"></div>
                  <a href="#" class="colorbox"></a>
                </div>
              </li>
              <li>
                <div class="magic-wall_item lazyload">
                  <img src={require("../../assets/2-scaled.jpg")} alt="image" />
                  <div class="hover-content"></div>
                  <a href="#" class="colorbox"></a>
                </div>
              </li>
              <li>
                <div class="magic-wall_item lazyload" id="modal1">
                  <img src={require("../../assets/Bez-nazwy-3.jpg")} alt="image" />
                  <div class="hover-content"></div>
                  <a href="#" class="colorbox"></a>
                </div>
              </li>
              <li>
                <div class="magic-wall_item lazyload">
                  <img src={require("../../assets/3.jpg")} alt="image" />
                  <div class="hover-content"></div>
                  <a href="#" class="colorbox"></a>
                </div>
              </li>
              <li>
                <div class="magic-wall_item lazyload">
                  <img src={require("../../assets/Adrian-Flux-Motorsport-1.jpg")} alt="image" />
                  <div class="hover-content"></div>
                  <a href="#" class="colorbox"></a>
                </div>
              </li>
              <li>
                <div class="magic-wall_item lazyload">
                  <img src={require("../../assets/Bez-nazwy-3.jpg")} alt="image" />
                  <div class="hover-content"></div>
                  <a href="#" class="colorbox"></a>
                </div>
              </li>
            </ul>
          </div>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;section/&gt;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;body/&gt;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&lt;html/&gt;
          <br />
        </pre>
        <div class="work-scroll-down">
          <span>scroll down</span>
          <i class="fas fa-arrow-down"></i>
        </div>
        <div class="work-scroll-down work-scroll-down--left">
          <span>scroll down</span>
          <i class="fas fa-arrow-down"></i>
        </div>
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
          <p className="about-title bouncer">
            {" "}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>E</span><span>x</span><span>p</span><span>e</span> 
            <span>r</span><span>i</span><span>e</span><span>n</span><span>c</span><span>e</span>
          </p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h2/&gt;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;
          <p className="about-text">
            I Work in TransUnion and <br />
          </p>
          <p className="about-text">
            I also have full-stack developer experience with <br />
            (Java,Javascript,Vue,React,Angular,Dotnet,Spingboot,GCP,AWS,<br />Jenkins,ExpressJs, MS-SQL,PostgresSQL,Django,TypeScript etc...) .<br />
          </p>
          <p className="about-text">
            <p>
              Visit my
              <a
                style={{ margin: "3px", color: "#08fdd8" }}
                href="#"
              >
                {" "}
                LinkedIn{" "}
              </a>
              profile for more details or just
              <a
                style={{ margin: "3px", color: "#08fdd8" }}
                href="#"
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
            <span>B.Tech VIIT (PUNE)</span>
            <footer>
              <div data-width="100%" style={{ width: "100%" }}></div>
            </footer>
          </div>
          <div class="chart">
            {" "}
            <span>5TechG</span>
            <footer>
              <div
                data-width="70%"
                style={{ background: "rgb(210, 108, 213)", width: "100%" }}
              ></div>
            </footer>
          </div>
          <div class="chart">
            {" "}
            <span>TransUnion</span>
            <footer>
              <div
                data-width="70%"
                style={{ background: "#ff2253", width: "60%" }}
              ></div>
            </footer>
          </div>

          <div class="chart">
            {" "}
            <span>NA</span>
            <footer>
              <div data-width="5%" style={{ width: "1%" }}></div>
            </footer>
          </div>
        </div>
        <div class="experience-scroll-down">
          <span>scroll down</span>
          <i class="fas fa-arrow-down"></i>
        </div>
        <div class="experience-scroll-down experience-scroll-down--left">
          <span>scroll down</span>
          <i class="fas fa-arrow-down"></i>
        </div>
      </div>

      {/* Contact code starts  */}
      <div className="section-6-content">
        <section>
          <div className="contact" id="contact">
            <div className="box1">
              <pre className="test">
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;/html&gt;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;body&gt;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h2&gt;
                <br />
                <p className="about-title bouncer">
                  {" "}
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>C</span><span>o</span><span>n</span><span>t</span>
                  <span>a</span><span>c</span><span>t</span> {" "} <span>M</span><span>e</span>
                </p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h2/&gt;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;
                <p className="about-text">
                  I'm interested in opportunities - especially <br />
                  ambitious or large projects. However, if you have other <br />
                  request or question, don't hesitate to use the form.
                </p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;p/&gt;{" "}
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;form&gt;
              </pre>
              <div className="contact-form">
                <form id="cform" autoComplete="off" onSubmit={handleSubmit}>
                  <ul>
                    <li className="half-input">
                      <input
                        className="input__field input__field--hoshi"
                        placeholder="Name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                      <label className="input__label input__label--hoshi input__label--hoshi-color-2"></label>
                    </li>
                    <li className="half-input">
                      <input
                        className="input__field input__field--hoshi"
                        placeholder="Email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                      <label className="input__label input__label--hoshi input__label--hoshi-color-2"></label>
                    </li>
                    <li className="animated fadeInUp">
                      <input
                        className="input__field input__field--hoshi"
                        placeholder="Subject"
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      />
                      <label className="input__label input__label--hoshi input__label--hoshi-color-2"></label>
                    </li>
                    <li className="animated fadeInUp">
                      <textarea
                        className="input__field input__field--hoshi"
                        placeholder="Message"
                        name="msg"
                        value={formData.msg}
                        onChange={handleChange}
                        required
                      ></textarea>
                      <label className="input__label input__label--hoshi input__label--hoshi-color-2"></label>
                    </li>
                    <button className="btn-long" type="submit">
                      Send message!
                    </button>
                  </ul>
                </form>
              </div>
            </div>
          </div>
        </section>
        <div class="google-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d7562.132042483152!2d73.7286!3d18.6161!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1683820439352!5m2!1sen!2sin"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          <div class="map-content">
            <p>Pratapsingh Garud</p>
            <span>
              Viman Nagar
              <br />
              411014, Pune MH.
            </span>
            <br />
            <span>@: iammoderator000@gmail.com</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
