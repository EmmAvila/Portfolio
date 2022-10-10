import React, { Fragment } from "react";
import { VscHome } from "react-icons/vsc";
import { FiUser } from "react-icons/fi";
import { BsCode } from "react-icons/bs";
import eng from "../cv_eng.pdf";
import esp from "../cv_esp.pdf";

import {
  MdOutlineDashboard,
  MdOutlineContactPage,
  MdEmail,
  MdLanguage,
} from "react-icons/md";
import {
  AiFillLinkedin,
  AiOutlineFilePdf,
  AiFillGithub,
  AiOutlineUnorderedList,
} from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <Fragment>
      <div
        className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 slide-in-left"
        style={{ backgroundColor: "#02777f" }}
      >
        <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
          <span className="fs-5 d-none d-sm-inline ff-jost fw-600 mb-4">
            Emmanuel
          </span>

          <ul
            className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
            id="menu"
          >
            <li className="nav-item">
              <NavLink to="/" className="nav-link align-middle px-0 text-white">
                <VscHome className="fs-5" />
                <span className="ms-1 d-none d-sm-inline">Home</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about"
                className="nav-link align-middle px-0 text-white"
              >
                <FiUser className="fs-5" />
                <span className="ms-1 d-none d-sm-inline ">About</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/skills"
                className="nav-link align-middle px-0 text-white"
              >
                <BsCode className="fs-5" />
                <span className="ms-1 d-none d-sm-inline ">Skills</span>
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/mywork"
                className="nav-link align-middle px-0 text-white"
              >
                <MdOutlineDashboard className="fs-5" />
                <span className="ms-1 d-none d-sm-inline ">My Work</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <div className="dropdown pt-2 ">
                <a
                  href="/"
                  className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
                  id="dropdownUser1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <MdLanguage className="fs-5" />
                  <span className="d-none d-sm-inline mx-1">Web </span>
                </a>
                <ul
                  className="dropdown-menu shadow"
                  aria-labelledby="dropdownUser1"
                >
                  <li>
                    <a
                      className="dropdown-item text-black"
                      href="https://www.linkedin.com/in/emmanuel-avila-dev/"
                      target="/blank"
                    >
                      <AiFillLinkedin className="fs-5" /> LinkedIn
                    </a>
                  </li>

                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a
                      className="dropdown-item text-black"
                      href="https://github.com/EmmAvila"
                      target="/blank"
                    >
                      <AiFillGithub className="fs-5" /> Github
                    </a>
                  </li>
                  <hr className="dropdown-divider" />
                  <li>
                    <a
                      className="dropdown-item text-black"
                      href={eng}
                      target="/blank"
                    >
                      <AiOutlineFilePdf className="fs-5 " /> CV (Eng)
                    </a>
                  </li>
                  <hr className="dropdown-divider" />
                  <li>
                    <a
                      className="dropdown-item text-black"
                      href={esp}
                      target="/blank"
                    >
                      <AiOutlineFilePdf className="fs-5" /> CV (Esp)
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
          {/* <hr /> */}
        </div>
      </div>
    </Fragment>
  );
}

export default Sidebar;
