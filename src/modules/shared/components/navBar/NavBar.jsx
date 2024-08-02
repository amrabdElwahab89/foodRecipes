import React from "react";
import "./NavBar.css";
import pp from "../../../../assets/images/navBar/pp.png";

export default function NavBar() {
  return (
    <>
      <div className="navBar-container">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent "
            >
              {/* -------------------------------------Left Section */}
              <form className="d-flex w-50" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>

              {/* --------------------------------------Right Section */}
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 pe-4 ">
                <li className="nav-item d-flex">
                  <img src={pp} alt="" />
                  <a className="nav-link" href="#">
                    upSkilling
                  </a>
                </li>
                {/*---------------------------------------------------- Drop Down List */}
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  ></a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item ms-3 m-auto">
                  <i className="fa-solid fa-bell"></i>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
