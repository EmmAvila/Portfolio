import React, { Fragment } from "react";
import { GrPrevious, GrNext } from "react-icons/gr";
import { BsLaptop } from "react-icons/bs";
import { AiFillGithub, AiOutlineDownload } from "react-icons/ai";

function MyWork() {
  return (
    <Fragment>
      <div className="col p-4">
        <div className="p-4 slide-in-top">
          <div className="row">
            <div className="col-6">
              <h2 className="ff-jose fw-bold ls-2">Some of my projects</h2>
            </div>
          </div>
          <hr></hr>
          <div className="row">
            <div className="col-md-4 text-center my-2">
              <div
                id="carouselExampleControls1"
                className="carousel slide my-1"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner" style={{ height: 157 }}>
                  <div className="carousel-item active">
                    <img
                      src="../portfolio-images/dogs/detail.png"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="../portfolio-images/dogs/home.png"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="../portfolio-images/dogs/landing.png"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                </div>
                <button
                  className="carousel-control-prev go-btn"
                  type="button"
                  data-bs-target="#carouselExampleControls1"
                  data-bs-slide="prev"
                >
                  <GrPrevious />
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next go-btn"
                  type="button"
                  data-bs-target="#carouselExampleControls1"
                  data-bs-slide="next"
                >
                  <GrNext />
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
              <h5 className="ff-jose my-1">Dogs App</h5>
              <span>
                Single Page Application developed with: <br></br>
                <span className="ls-2 fw-semibold" style={{ color: "#02777f" }}>
                  React Js, Redux
                </span>
              </span>
              <br></br>
              <span>
                Back end developed with: <br></br>
                <span className="ls-2 fw-semibold" style={{ color: "#02777f" }}>
                  Node Js, Express, Sequelize, PostgreSQL
                </span>
              </span>
              <div className="row d-flex justify-content-center">
                <a
                  href="https://dogs-client-alpha.vercel.app/"
                  className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded"
                  target="_blank"
                >
                  <BsLaptop /> Watch Live
                </a>
                <a
                  href="https://github.com/EmmAvila/PI-Dogs"
                  className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded"
                  target="_blank"
                >
                  <AiFillGithub /> Source Code
                </a>
              </div>
            </div>
            <div className="col-md-4 text-center my-2">
              <div
                id="carouselExampleControls2"
                className="carousel slide my-1"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner" style={{ height: 157 }}>
                  <div className="carousel-item active">
                    <img
                      src="../portfolio-images/word-game/game.png"
                      className="d-block w-100 h-200"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="../portfolio-images/word-game/Presentancion.png"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="../portfolio-images/word-game/Profile.png"
                      className="d-block w-100 h-200"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="../portfolio-images/word-game/stats.png"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                </div>
                <button
                  className="carousel-control-prev go-btn"
                  type="button"
                  data-bs-target="#carouselExampleControls2"
                  data-bs-slide="prev"
                >
                  <GrPrevious />
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next go-btn"
                  type="button"
                  data-bs-target="#carouselExampleControls2"
                  data-bs-slide="next"
                >
                  <GrNext />
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
              <div>
                <h5 className="ff-jose my-1">World Game</h5>
                <span>
                  Mobile application developed with: <br></br>
                  <span
                    className="ls-2 fw-semibold"
                    style={{ color: "#02777f" }}
                  >
                    React Native, Redux
                  </span>
                </span>
                <br></br>
                <span>
                  Back end developed with: <br></br>
                  <span
                    className="ls-2 fw-semibold"
                    style={{ color: "#02777f" }}
                  >
                    Node Js, Express, Sequelize, PostgreSQL
                  </span>
                </span>
                <div className="row d-flex justify-content-center">
                  <a
                    href="https://www.youtube.com/watch?v=q3r3_pfw6Ws"
                    className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded"
                    target="_blank"
                  >
                    <BsLaptop /> Watch Video
                  </a>
                  <a
                    href="https://github.com/Feli-dev/PF-WorldGame"
                    className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded"
                    target="_blank"
                  >
                    <AiFillGithub /> Source Code
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 text-center my-2">
              <div
                id="carouselExampleControls3"
                className="carousel slide my-1"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner" style={{ height: 157 }}>
                  <div className="carousel-item active">
                    <img
                      src="../portfolio-images/flutter/img1.jpg"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="../portfolio-images/flutter/img2.jpg"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="../portfolio-images/flutter/img4.jpg"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                </div>
                <button
                  className="carousel-control-prev go-btn"
                  type="button"
                  data-bs-target="#carouselExampleControls3"
                  data-bs-slide="prev"
                >
                  <GrPrevious />
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next go-btn"
                  type="button"
                  data-bs-target="#carouselExampleControls3"
                  data-bs-slide="next"
                >
                  <GrNext />
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
              <h5 className="ff-jose my-1">Movies</h5>
              <span>
                Mobile application for Android developed with: <br></br>
                <span className="ls-2 fw-semibold" style={{ color: "#02777f" }}>
                  Flutter, Provider
                </span>
              </span>

              <div className="row d-flex justify-content-center">
                <a
                  href="https://github.com/EmmAvila/movies"
                  className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded"
                  target="_blank"
                >
                  <AiFillGithub /> Source Code
                </a>
                <a
                  href="https://mega.nz/file/zp1mmCwB#Lrn3GDa3BNxXjGAsJHV9J2VHknPVvG4eWTG2FMWMbq0"
                  className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded"
                  target="_blank"
                >
                  <AiOutlineDownload /> Link Apk
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default MyWork;
