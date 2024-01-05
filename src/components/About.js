import React, { Fragment } from "react";
import {
  MdOutlineDashboard,
  MdOutlineSmartphone,
  MdEmail,
} from "react-icons/md";

function About() {
  return (
    <Fragment>
      <div className="col py-3 d-flex align-items-center about-image">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 d-flex align-items-center">
              <div>
                <h1
                  className="fw-bold slide-in-top"
                  style={{ color: "#02777f" }}
                >
                  About me
                </h1>
                <hr></hr>
                <p className="slide-in-bottom">
                  Mobile Android Developer with learning, organization and
                  communication skills, committed and team player. <br></br>
                </p>
                <p className="slide-in-bottom">
                  Currently looking for new opportunities in mobile development
                  industry and willing to work on challenging and diverse
                  projects with the latest technologies.
                </p>
                <p className="slide-in-bottom ">
                  Previously worked as Android developer.<br></br>
                  Technologies I've worked on :{" "}
                  <span
                    className="ls-2 fw-semibold"
                    style={{ color: "#02777f" }}
                  >
                    Kotlin, Flutter, JavaScript, React Native.{" "}
                  </span>
                </p>
                <p className="slide-in-bottom">
                  Currently Learning{" "}
                  <span
                    className="ls-2 fw-semibold"
                    style={{ color: "#02777f" }}
                  >
                    Quality Assurance
                  </span>{" "}
                  and improving my knwoledge on{" "}
                  <span
                    className="ls-2 fw-semibold"
                    style={{ color: "#02777f" }}
                  >
                    Kotlin
                  </span>
                </p>
                <div>
                  <h4
                    className="fw-bold slide-in-top"
                    style={{ color: "#02777f" }}
                  >
                    Contact Me!
                  </h4>
                  <MdEmail className="fs-5" />
                  {"    "}
                  <span> e.avila.casta@gmail.com</span>
                  <br></br>
                  <MdOutlineSmartphone className="fs-5" />
                  <span> +52 333 4423 354</span>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <img
                className="img-fluid"
                src="../images/prog3.png"
                alt="..."
              ></img>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default About;
