import React, { Fragment } from "react";

function Home() {
  return (
    <Fragment>
      <div className="col py-3 d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 d-flex align-items-center">
              <div>
                <h1 className="m-0 font-big ">Hi, my name is Emmanuel</h1>
                <p className="ls-2 mt-2 ">
                  I'm an Android Mobile Developer and QA Enginner.
                </p>
                <p className="ls-2 mt-2 ">
                  I currently live in Guadalajara, Jalisco, México
                </p>
              </div>
            </div>

            <div className="col-lg-6 col-md-12 col-sm-12">
              <img
                className="img-fluid"
                src="../images/prog2.png"
                alt="..."
              ></img>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Home;
