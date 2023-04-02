import { Route, Routes } from "react-router-dom";
import React, { useState, useEffect } from "react";
// import React, { Fragment, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";
//-----------myFiles--------------------
import About from "./About/About";
import Home from "./Home/Home";
import Moves from "./Moves/Moves";
import Navbar from "./Navbar/Navbar";
import Notfound from "./Notfound/Notfound";
import People from "../Pages//People/People";
import Register from "../Pages/Register/Register";
import Tvshowes from "../Pages/Tvshowes/Tvshowes";
import Login from "../Pages/Login/Login";
import ProtectedRout from "./protectedRoutes/protectedRout";
import Details from "./Details/Details";
import { MediaContextProvider } from "./mediaContext/MediaContext";
import Footer from "./Footer/Footer";

//---------Css-------------------------------
function App() {
  let [loginData, setloginData] = useState(null);
  let navigate = useNavigate();
  let getuserData = () => {
    let token = localStorage.getItem("token");
    let decoded = jwtDecode(token);
    setloginData(decoded);
    console.log(loginData);
  };
  useEffect(() => {
    if (localStorage.getItem("token")) {
      getuserData();
      console.log(loginData, "loginData from app /useeffect");
    }
  }, []);

  ///---------handel logout--------------
  const handelLogOut = () => {
    //3-clear local storage data
    localStorage.removeItem("token");
    //2-set login data state whith null
    setloginData(null);
    navigate("/login");
  };
  return (
    <>
      <Navbar handelLogOut={handelLogOut} loginData={loginData} />
      <div className="container">
        <MediaContextProvider>
          <Routes>
            <Route element={<ProtectedRout loginData={loginData} />}>
              <Route path="/" element={<Home />} />
              <Route path="home" element={<Home />} />
              <Route path="moves" element={<Moves />} />
              <Route path="about" element={<About />} />
              <Route path="people" element={<People />} />
              <Route path="details" element={<Details />} />
              <Route path="Tvshowes" element={<Tvshowes />} />
              <Route path="Register" element={<Register />} />
            </Route>
            <Route path="login" element={<Login getuserData={getuserData} />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
        </MediaContextProvider>

        {/* <Routes>
        <Route element={<ProtectedRout loginData={loginData} />}>
              <Route path="Register" element={<Register />} />
              </Route>
  </Routes> */}
      </div>
      <Footer />
    </>
  );
}

export default App;
