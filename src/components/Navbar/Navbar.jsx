import React, { useState } from "react";
import { Link } from "react-router-dom";
import style from "./Navbar.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
export default function Navbar({ loginData, handelLogOut }) {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className={style.Navbar}>
        <div className={style.divfloxosa}>
          <Link className={style.navlogo} to="home">
            Noxe
          </Link>
          {loginData ? (
            <>
              <ul className={click ? `${style.ulLinks}` : `${style.desapear}`}>
                <li className={style.navitem}>
                  <Link className={style.navlink} to="home">
                    Home
                  </Link>
                </li>
                <li className={style.navitem}>
                  <Link className={style.navlink} to="About">
                    About
                  </Link>
                </li>
                <li className={style.navitem}>
                  <Link className={style.navlink} to="Tvshowes">
                    Tvshowes
                  </Link>
                </li>
                <li className={style.navitem}>
                  <Link className={style.navlink} to="people">
                    people
                  </Link>
                </li>
                <li className={style.navitem}>
                  <Link className={style.navlink} to="moves">
                    moves
                  </Link>
                </li>
              </ul>

              <GiHamburgerMenu
                className={style.burgericon}
                onClick={handleClick}
              />

              {/* {loginData ? (
                <h5 className={style.UserName}>
                  Hi Ya{" " + loginData.first_name + " "}
                </h5>
              ) : (
                ""
              )} */}
            </>
          ) : (
            " "
          )}
          <div className={style.loginoutbox} id="navbarColor01">
            <ul className={style.ulLinks}>
              {!loginData ? (
                <>
                  <li className={style.navitem}>
                    <Link className={style.navlink} to="Register">
                      Register
                    </Link>
                  </li>
                  <li className={style.navitem}>
                    <Link className={style.navlink} to="login">
                      login
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li className={style.navitem}>
                    <h5 className={style.navlink}>
                      Hi Ya{" " + loginData.first_name + " "}
                    </h5>
                  </li>
                  <li className={style.navitem}>
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
  /*  // const [isOpen, setisOpen] = useState(false);
  // const changboolean = () => {
  //   setisOpen(!isOpen);
  //   console.log(isOpen);
  // };
  ------------------------
   <>  <div className={style.Navbar}>
        <span className={style.navlogo}>Noxe</span>
        <div className={`${style.navitems} ${isOpen && "{style.open"}}`}>
          <a href="/home">Home</a>
          <a href="/about">About</a>
          <a href="/service">Service</a>
          <a href="/contact">Contact</a>
        </div>
        <GiHamburgerMenu
          className={`${style.bar} ${isOpen && "open"}`}
          onClick={() => changboolean()}
        />
      </div>

</> */
}
{
  /*   -------------------------------------------
  <>// import { GiHamburgerMenu } from "react-icons/gi";
  export default function Navbar({ loginData, handelLogOut }) {
      <nav className={style.Navbar}>
        <Link className={style.navlogo} to="home">
          Noxe
        </Link>
        {/* <GiHamburgerMenu
            onClick={handelREsponsiveMenu}
            className={style.responsiveIcon}
          /> --/}

          {loginData ? (
            <ul className=" ">
              <li className={style.navitem}>
                <Link className={style.navlink} to="home"></Link>
              </li>
              <li className={style.navitem}>
                <Link className={style.navlink} to="About">
                  About
                </Link>
              </li>
              <li className={style.navitem}>
                <Link className={style.navlink} to="Tvshowes">
                  Tvshowes
                </Link>
              </li>
              <li className={style.navitem}>
                <Link className={style.navlink} to="people">
                  people
                </Link>
              </li>
              <li className={style.navitem}>
                <Link className={style.navlink} to="moves">
                  moves
                </Link>
              </li>
            </ul>
          ) : (
            " "
          )}
          <div className="" id="navbarColor01">
            <ul className=" ">
              <div className={``}>
                {loginData ? (
                  <h5 className="">Hi{" " + loginData.first_name + " "}</h5>
                ) : (
                  ""
                )}
              </div>
              {!loginData ? (
                <>
                  <li className={style.navitem}>
                    <Link className={style.navlink} to="Register">
                      Register
                    </Link>
                  </li>
                  <li className={style.navitem}>
                    <Link className={style.navlink} to="login">
                      login
                    </Link>
                  </li>
                </>
              ) : (
                <li className={style.navitem}>
                  <Link onClick={handelLogOut} className={style.navlink}>
                    logout
                  </Link>
                  {/* <Link onClick={handelLogOut} className="nav-link" to="login">
        logout
      </Link> 
          what is the deffrent between use navigation and the to in the link why she choose to use use navigation --/}
                </li>
              )}
            </ul>
          </div>
        </nav>
      </> */
}
