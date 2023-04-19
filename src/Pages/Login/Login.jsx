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
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdF9uYW1lIjoiN2x3YSIsImxhc3RfbmFtZSI6ImFkZWwiLCJpYXQiOjE1MTYyMzkwMjJ9.lKtVWdf4NI5-xHCDfsbQnGVW9p4mWrFUEtTdNehjCTg";

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

    let validationResulte = HandelValidateForm();
    if (validationResulte.error) {
      setErrorList(validationResulte.error.details);
      setLoading(false);
    } else {
      localStorage.setItem("token", token);
      getuserData();
      HandelGOTOHome();
    }
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
      Password: Joi.string().required(),
      //  Password: Joi.string().required().pattern(new RegExp("^[a-z][0-9]{3}$")),
    });
    return schemaVarName.validate(user, { abortEarly: false });
  };
  //-----------------------redarin-----------------------------
  return (
    <>
      <div className={style.container}>
        <div className={style.cardcontainer}>
          <h1 className={style.formtitle}>Sign In</h1>

          <form onSubmit={submitFormData}>
            <div>
              <input
                onChange={handelGetFormData}
                typeof="text"
                className={style.forminput}
                name="email"
                placeholder=" Email"
              />
              {errorList.map((er, index) => {
                if (er.message.includes("email")) {
                  return (
                    <p key={index} className={style.errorAlert}>
                      Please enter a valid Email
                    </p>
                  );
                }
              })}
            </div>
            <div>
              <input
                onChange={handelGetFormData}
                typeof="Password"
                className={style.forminput}
                name="Password"
                placeholder=" Password"
              />
              {errorList.map((er, index) => {
                if (er.message.includes("Password")) {
                  return (
                    <p key={index} className={style.errorAlert}>
                      Please enter a valid Password
                    </p>
                  );
                }
              })}
            </div>
            <button className={style.button} type="submit">
              {loading ? (
                <div
                  className="spinner-border text-primary"
                  role="status"
                ></div>
              ) : (
                "Login"
              )}
            </button>
            <div className="clearfix">{/*msh sha8ala */}</div>
          </form>
        </div>
      </div>
    </>
  );
}
