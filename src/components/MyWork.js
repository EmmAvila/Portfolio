import React, { Fragment } from "react";
import { GrPrevious, GrNext } from "react-icons/gr";
import { BsLaptop } from "react-icons/bs";
import { FaGooglePlay } from "react-icons/fa";
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

          <div className="d-flex flex-wrap" style={{}}>
            {/* Rutas Busmen */}
            <div
              className="col-md-4 text-center my-2 mx-auto"
              style={{
                width: 200,
              }}
            >
              <div
                id="carouselExampleControls1"
                className="carousel slide my-1"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src="../portfolio-images/rutas/rutas_5.jpg"
                      className="d-block w-100 h-200"
                      alt="..."
                      style={{
                        height: 400,
                      }}
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="../portfolio-images/rutas/rutas_1.jpg"
                      className="d-block w-100 h-200"
                      alt="..."
                      style={{
                        height: 400,
                      }}
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="../portfolio-images/rutas/rutas_2.jpg"
                      className="d-block w-100 h-200"
                      alt="..."
                      style={{
                        height: 400,
                      }}
                    />
                  </div>

                  <div className="carousel-item">
                    <img
                      src="../portfolio-images/rutas/rutas_4.jpg"
                      className="d-block w-100 h-200"
                      alt="..."
                      style={{
                        height: 400,
                      }}
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="../portfolio-images/rutas/rutas_6.jpg"
                      className="d-block w-100 h-200"
                      alt="..."
                      style={{
                        height: 400,
                      }}
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

              <div>
                <h5 className="ff-jose my-1">Rutas Busmen</h5>
                <span>
                  Mobile application developed with: <br></br>
                  <span
                    className="ls-2 fw-semibold"
                    style={{ color: "#02777f" }}
                  >
                    Kotlin, MVVM, Retrofit
                  </span>
                </span>

                <div className="row d-flex justify-content-center">
                  <a
                    href="https://play.google.com/store/apps/details?id=com.geovoy.rutasbusmen&hl=es_MX&gl=US"
                    className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded"
                    target="_blank"
                  >
                    <FaGooglePlay /> Play Store
                  </a>
                </div>
              </div>
            </div>
            {/* Fast Notes */}
            <div
              className="col-md-4 text-center my-2 mx-auto"
              style={{
                width: 200,
              }}
            >
              <div
                id="carouselExampleControls4"
                className="carousel slide my-1"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src="../portfolio-images/fast/fast1.jpg"
                      className="d-block w-100 h-200"
                      alt="..."
                      style={{
                        height: 400,
                      }}
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="../portfolio-images/fast/fast2.jpg"
                      className="d-block w-100 h-200"
                      alt="..."
                      style={{
                        height: 400,
                      }}
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="../portfolio-images/fast/fast3.jpg"
                      className="d-block w-100 h-200"
                      alt="..."
                      style={{
                        height: 400,
                      }}
                    />
                  </div>

                  <div className="carousel-item">
                    <img
                      src="../portfolio-images/fast/fast4.jpg"
                      className="d-block w-100 h-200"
                      alt="..."
                      style={{
                        height: 400,
                      }}
                    />
                  </div>
                </div>
                <button
                  className="carousel-control-prev go-btn"
                  type="button"
                  data-bs-target="#carouselExampleControls4"
                  data-bs-slide="prev"
                >
                  <GrPrevious />
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next go-btn"
                  type="button"
                  data-bs-target="#carouselExampleControls4"
                  data-bs-slide="next"
                >
                  <GrNext />
                  <span className="visually-hidden">Next</span>
                </button>
              </div>

              <div>
                <h5 className="ff-jose my-1">Fast Notes</h5>
                <span>
                  Mobile application developed with: <br></br>
                  <span
                    className="ls-2 fw-semibold"
                    style={{ color: "#02777f" }}
                  >
                    Kotlin, Retrofit
                  </span>
                </span>
                <br></br>
                <span>
                  Back end developed with: <br></br>
                  <span
                    className="ls-2 fw-semibold"
                    style={{ color: "#02777f" }}
                  >
                    Firebase Authentication, Firestore
                  </span>
                </span>
                <div className="row d-flex justify-content-center">
                  <a
                    href="https://play.google.com/store/apps/details?id=com.emmavila.fastnotes"
                    className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded"
                    target="_blank"
                  >
                    <FaGooglePlay /> Play Store
                  </a>
                </div>
              </div>
            </div>
            {/* Busmen Recojo */}
            <div
              className="col-md-4 text-center my-2 mx-auto"
              style={{ width: 200 }}
            >
              <div
                id="carouselExampleControls6"
                className="carousel slide my-1"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src="../portfolio-images/recojo/recojo_0.jpg"
                      className="d-block w-100"
                      alt="..."
                      style={{
                        height: 400,
                      }}
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="../portfolio-images/recojo/recojo_1.png"
                      className="d-block w-100"
                      alt="..."
                      style={{
                        height: 400,
                      }}
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="../portfolio-images/recojo/recojo_2.png"
                      className="d-block w-100"
                      alt="..."
                      style={{
                        height: 400,
                      }}
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="../portfolio-images/recojo/recojo_3.png"
                      className="d-block w-100"
                      alt="..."
                      style={{
                        height: 400,
                      }}
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="../portfolio-images/recojo/recojo_4.png"
                      className="d-block w-100"
                      alt="..."
                      style={{
                        height: 400,
                      }}
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="../portfolio-images/recojo/recojo_5.png"
                      className="d-block w-100"
                      alt="..."
                      style={{
                        height: 400,
                      }}
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="../portfolio-images/recojo/recojo_6.png"
                      className="d-block w-100"
                      alt="..."
                      style={{
                        height: 400,
                      }}
                    />
                  </div>
                </div>
                <button
                  className="carousel-control-prev go-btn"
                  type="button"
                  data-bs-target="#carouselExampleControls6"
                  data-bs-slide="prev"
                >
                  <GrPrevious />
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next go-btn"
                  type="button"
                  data-bs-target="#carouselExampleControls6"
                  data-bs-slide="next"
                >
                  <GrNext />
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
              <h5 className="ff-jose my-1">Busmen Recojo</h5>
              <span>
                Mobile application for Android developed with: <br></br>
                <span className="ls-2 fw-semibold" style={{ color: "#02777f" }}>
                  Flutter, Provider
                </span>
              </span>
            </div>
            {/* Instaladores */}
            <div
              className="col-md-4 text-center my-2 mx-auto"
              style={{
                width: 200,
              }}
            >
              <div
                id="carouselExampleControls2"
                className="carousel slide my-1"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src="../portfolio-images/insta/inst_1.jpg"
                      className="d-block w-100 h-200"
                      alt="..."
                      style={{
                        height: 400,
                      }}
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="../portfolio-images/insta/inst_2.jpg"
                      className="d-block w-100 h-200"
                      alt="..."
                      style={{
                        height: 400,
                      }}
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="../portfolio-images/insta/inst_3.jpg"
                      className="d-block w-100 h-200"
                      alt="..."
                      style={{
                        height: 400,
                      }}
                    />
                  </div>

                  <div className="carousel-item">
                    <img
                      src="../portfolio-images/insta/inst_4.jpg"
                      className="d-block w-100 h-200"
                      alt="..."
                      style={{
                        height: 400,
                      }}
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
                <h5 className="ff-jose my-1">Instaladores Geovoy</h5>
                <span>
                  Mobile application developed with: <br></br>
                  <span
                    className="ls-2 fw-semibold"
                    style={{ color: "#02777f" }}
                  >
                    Kotlin, Retrofit
                  </span>
                </span>
              </div>
            </div>
            {/* World Game */}
            <div
              className="col-md-4 text-center my-2 mx-auto"
              style={{ width: 200 }}
            >
              <div
                id="carouselExampleControls3"
                className="carousel slide my-1"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src="../portfolio-images/word-game/game.png"
                      className="d-block w-100 h-400"
                      alt="..."
                      style={{ height: 400 }}
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="../portfolio-images/word-game/Presentancion.png"
                      className="d-block w-100"
                      alt="..."
                      style={{
                        height: 400,
                      }}
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="../portfolio-images/word-game/Profile.png"
                      className="d-block w-100 h-200"
                      alt="..."
                      style={{
                        height: 400,
                      }}
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="../portfolio-images/word-game/stats.png"
                      className="d-block w-100"
                      alt="..."
                      style={{
                        height: 400,
                      }}
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
            {/* Movies */}
            <div
              className="col-md-4 text-center my-2 mx-auto"
              style={{ width: 200 }}
            >
              <div
                id="carouselExampleControls5"
                className="carousel slide my-1"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src="../portfolio-images/flutter/img1.jpg"
                      className="d-block w-100"
                      alt="..."
                      style={{
                        height: 400,
                      }}
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="../portfolio-images/flutter/img2.jpg"
                      className="d-block w-100"
                      alt="..."
                      style={{
                        height: 400,
                      }}
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="../portfolio-images/flutter/img4.jpg"
                      className="d-block w-100"
                      alt="..."
                      style={{
                        height: 400,
                      }}
                    />
                  </div>
                </div>
                <button
                  className="carousel-control-prev go-btn"
                  type="button"
                  data-bs-target="#carouselExampleControls5"
                  data-bs-slide="prev"
                >
                  <GrPrevious />
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next go-btn"
                  type="button"
                  data-bs-target="#carouselExampleControls5"
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
