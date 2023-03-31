import React from "react";
import { Link } from "react-router-dom";
import style from "./Navbar.module.css";

export default function Navbar({ loginData, handelLogOut }) {
  console.log(loginData, "loginData");

  return (
    <nav
      className={`navbar navbar-expand-lg ${style.navbar}`}
      // style={{ backgroundColor: "#144272" }}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="home">
          Noxe
        </Link>

        {loginData ? (
          <ul className="navbar-nav me-auto m-0 ">
            <li className="nav-item">
              <Link className="nav-link active" to="home"></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="About">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="Tvshowes">
                Tvshowes
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="people">
                people
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="moves">
                moves
              </Link>
            </li>
          </ul>
        ) : (
          " "
        )}
        <div className="collapse navbar-collapse m-0" id="navbarColor01">
          <ul className=" navbar-nav  list-unstyled d-flex auth-linkes m-0 ms-auto">
            <div className={`d-flex align-items-center ${style.socialmwdia}`}>
              {loginData ? (
                <h5 className="mx-3 my-0">
                  Hi{" " + loginData.first_name + " "}
                </h5>
              ) : (
                ""
              )}
            </div>
            {!loginData ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="Register">
                    Register
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="login">
                    login
                  </Link>
                </li>
              </>
            ) : (
              <li className="nav-item">
                <Link onClick={handelLogOut} className="nav-link">
                  logout
                </Link>
                {/* <Link onClick={handelLogOut} className="nav-link" to="login">
                  logout
                </Link> 
                what is the deffrent between use navigation and the to in the link why she choose to use use navigation*/}
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
