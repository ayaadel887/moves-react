import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Joi from "joi";

import style from "./Login.module.css";

export default function Login({ getuserData }) {
  let [user, setuser] = useState({
    email: " ",
    Password: " ",
  });
  let [errMassage, seterrMassage] = useState({
    flag: false,
    massage: "haalo thats email is requird",
  });
  let [errorList, setErrorList] = useState([]);
  let [loading, setLoading] = useState(false);
  let token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdF9uYW1lIjoiTXVoYW1lZCIsImxhc3RfbmFtZSI6ImFkZWwiLCJpYXQiOjE1MTYyMzkwMjJ9.orEsqdlkj2AqVnqDJ8A4tp2WKIxA-72JD7OouBFyBII";
  //---------------------handel navigate----------------------
  const navigate = useNavigate();
  let HandelGOTOHome = () => {
    let path = "/home"; // backslash"/""
    navigate(path);
  };
  //----------------------handel submitFormData-----------------
  let submitFormData = (e) => {
    e.preventDefault();
    setLoading(true);
    seterrMassage("hallo email is requird,could you write it again ,please");
    console.log(errMassage, "errmassage");
    let validationResulte = HandelValidateForm();
    if (validationResulte.error) {
      setErrorList(validationResulte.error.details);
      setLoading(false);
    } else {
      console.log("3dina mn el validation");
      localStorage.setItem("token", token);
      getuserData();
      HandelGOTOHome();
    }
    //let { data } = await axios.post(
    //     "https://routeegypt.herokuapp.com/signin",
    //     user
    //   );
    //   if (data.message == "success") {
    //     alert("go login");
    //localStorage.setItem("token",data.token);
    //   } else {
    //     seterrMassage(data.message);
    //   }
  };
  //-----------handelGetFormData-------------------------------------
  const handelGetFormData = (e) => {
    let userCopy = { ...user };
    userCopy[e.target.name] = e.target.value;
    setuser(userCopy);
  };
  const HandelValidateForm = () => {
    const schemaVarName = Joi.object({
      email: Joi.string()
        .required()
        .email({ tlds: { allow: ["com", "net"] } }),
      Password: Joi.string().required().pattern(new RegExp("^[a-z][0-9]{3}$")),
    });
    return schemaVarName.validate(user, { abortEarly: false });
  };
  //-----------------------redarin-----------------------------
  return (
    <>
      <div className="w-75 m-outo">
        <h1 className="my-3">Login Form</h1>

        {errorList.map((er, index) => (
          <div key={index} className="alert alert-danger p-1">
            {er.message}
          </div>
        ))}

        <form onSubmit={submitFormData}>
          <div className="inputgroup my-2">
            <label htmlFor="email">Email:</label>
            <input
              onChange={handelGetFormData}
              typeof="text"
              className="form-control"
              name="email"
            />
          </div>
          <div className="inputgroup my-2">
            <label htmlFor="Password">Password:</label>
            <input
              onChange={handelGetFormData}
              typeof="Password"
              className="form-control"
              name="Password"
            />
          </div>
          <button
            className={`btn float-end ${style.button}`}
            style={{ backgroundColor: "#125b50" }}
            type="submit"
          >
            {loading ? (
              <div className="spinner-border text-primary" role="status"></div>
            ) : (
              "Login"
            )}
          </button>
          <div className="clearfix">{/*msh sha8ala */}</div>
        </form>
      </div>
    </>
  );
}
