import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import style from "./Navbar.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
export default function Navbar({ loginData, handelLogOut }) {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className={style.Navbar}>
        <div className={style.divfloxosa}>
          <NavLink className={style.navlogo} to="/home">
            Noxe
          </NavLink>

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
                    people
                  </NavLink>
                </li>
                <li className={style.navlink}>
                  <NavLink
                    to="moves"
                    className={({ isActive, isPending }) =>
                      isPending ? style.pending : isActive ? style.active : ""
                    }
                  >
                    moves
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
            <ul className={style.ulLinks}>
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
                  <li>
                    <NavLink
                      to="/login"
                      className={({ isActive, isPending }) =>
                        isPending ? style.pending : isActive ? style.active : ""
                      }
                    >
                      login
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <h5 className={style.navlink}>
                      Hi Ya{" " + loginData.first_name + " "}
                    </h5>
                  </li>
                  <li>
                    <Link onClick={handelLogOut} className={style.navlink}>
                      logout
                    </Link>
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
