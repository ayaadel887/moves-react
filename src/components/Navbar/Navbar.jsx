import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import style from "./Navbar.module.css";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar({ loginData, handelLogOut }) {
  const [click, setClick] = useState(false);
  const navigate = useNavigate();
  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className={style.Navbar}>
        <div className={style.menu}>
          <h1 className={style.navlogo} onClick={() => navigate("/home")}>
            No<span>xe</span>
          </h1>

          {loginData ? (
            <>
              <ul className={click ? `${style.ulLinks}` : `${style.desapear}`}>
                <li className={style.navlink}>
                  <NavLink
                    to="/home"
                    className={({ isActive, isPending }) =>
                      isPending ? style.pending : isActive ? style.active : ""
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li className={style.navlink}>
                  <NavLink
                    to="/About"
                    className={({ isActive, isPending }) =>
                      isPending ? style.pending : isActive ? style.active : ""
                    }
                  >
                    About
                  </NavLink>
                </li>
                <li className={style.navlink}>
                  <NavLink
                    to="/Tvshowes"
                    className={({ isActive, isPending }) =>
                      isPending ? style.pending : isActive ? style.active : ""
                    }
                  >
                    Tvshowes
                  </NavLink>
                </li>
                <li className={style.navlink}>
                  <NavLink
                    to="/people"
                    className={({ isActive, isPending }) =>
                      isPending ? style.pending : isActive ? style.active : ""
                    }
                  >
                    People
                  </NavLink>
                </li>
                <li className={style.navlink}>
                  <NavLink
                    to="moves"
                    className={({ isActive, isPending }) =>
                      isPending ? style.pending : isActive ? style.active : ""
                    }
                  >
                    Movies
                  </NavLink>
                </li>
              </ul>

              <GiHamburgerMenu
                className={style.burgericon}
                onClick={handleClick}
              />
            </>
          ) : (
            " "
          )}
          <div className={style.loginoutbox} id="navbarColor01">
            <ul className={click ? `${style.ulLinks}` : `${style.desapear}`}>
              {!loginData ? (
                <>
                  <li className={style.navlink}>
                    <NavLink
                      to="/Register"
                      className={({ isActive, isPending }) =>
                        isPending ? style.pending : isActive ? style.active : ""
                      }
                    >
                      Register
                    </NavLink>
                  </li>
                  <li className={style.navlink}>
                    <NavLink
                      to="/login"
                      className={({ isActive, isPending }) =>
                        isPending ? style.pending : isActive ? style.active : ""
                      }
                    >
                      Login
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  {/* <li className={style.welcom}>
                    {" " + loginData.first_name + " "}
                  </li> */}
                  <li>
                    <button onClick={handelLogOut} className={style.logout}>
                      Logout
                    </button>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

{
  /*   -------------------------------------------

          what is the deffrent between use navigation and the to in the link why she choose to use use navigation --/}
                
//*/
}
