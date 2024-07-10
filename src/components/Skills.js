import React, { Fragment } from "react";

function Skills() {
  return (
    <Fragment>
      <div className="col py-3 d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 d-flex align-items-center">
              <div>
                <h1
                  className="font-big slide-in-top"
                  style={{ color: "#02777f" }}
                >
                  Technologies I know
                </h1>
                <hr></hr>

                <div className="row my-2">
                  <div className="col-lg-3 col-md-3 py-3 col-sm-4 col-6 d-flex justify-content-center">
                    <img
                      className="technology-image  slide-in-bottom-technology"
                      src="../images/kotlin.png"
                      alt="Kotlin"
                    ></img>
                  </div>
                  <div className="col-lg-3 col-md-3 pt-4 col-sm-4 col-6 d-flex justify-content-center">
                    <img
                      className="technology-image  slide-in-bottom-technology"
                      style={{ height: 90 }}
                      src="../images/flutter.png"
                      alt="Flutter"
                    ></img>
                  </div>
                  <div className="col-lg-3 col-md-3 py-3 col-sm-4 col-6 d-flex justify-content-center">
                    <img
                      className="technology-image  slide-in-bottom-technology"
                      src="../images/react.png"
                      alt="React"
                    ></img>
                  </div>
                  <div className="col-lg-3 col-md-3 py-3 col-sm-4 col-6 d-flex justify-content-center">
                    <img
                      className="technology-image  slide-in-bottom-technology"
                      src="../images/js.png"
                      alt="Java Script"
                    ></img>
                  </div>
                </div>
                <div className="row my-2">
                  <div className="col-lg-3 col-md-3 py-3 col-sm-4 col-6 d-flex justify-content-center">
                    <img
                      className="technology-image  slide-in-bottom-technology"
                      src="../images/selenium.png"
                      alt="selenium"
                    ></img>
                  </div>
                  <div className="col-lg-3 col-md-3 pt-4 col-sm-4 col-6 d-flex justify-content-center">
                    <img
                      className="technology-image  slide-in-bottom-technology"
                      style={{ height: 90 }}
                      src="../images/postm.png"
                      alt="postman"
                    ></img>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <img
                className="img-fluid"
                src="../images/prog.png"
                alt="..."
              ></img>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Skills;
