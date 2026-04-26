import React, { useState } from "react";
import Joi from "joi";
import { useNavigate } from "react-router-dom";
//---------style------------------
import style from "./Register.module.css";

export default function Register() {
  //------data 3aiza azherha aw a5odha mn el user------------
  let [user, setuser] = useState({
    first_name: "",
    Last_name: "",
    age: "",
    email: "",
    Password: "",
  });
  //from api response
  let [errMassage, seterrMassage] = useState({
    flag: false,
    massage: "haalo thats email is requird",
  });
  // let [errMassage, seterrMassage] = useState([]);//
  //from validation lib joi
  let [errorList, setErrorList] = useState([]);
  //loading spinner
  let [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  //---------handel GoTO LOGIN-------------------
  let HandelGOTOLOgin = () => {
    let path = "/login"; //404 login fa bn7tag backslash"/""
    navigate(path);
  };
  //01--import usenavigate-
  //2--  const navigate = useNavigate();
  //3-let path = "login";
  //navigate(path);
  //------------------handel submet----------------------
  let submitFormData = (e) => {
    e.preventDefault();
    setLoading(true);
    seterrMassage("hallo email is requird,could you write it again ,please");

    if (HandelValidateForm()) {
      setLoading(false);
      HandelGOTOLOgin();
    } else {
      setLoading(false);
    }
  };

  const handelGetFormData = (e) => {
    let userCopy = { ...user }; // deep copy b2a 3amly makan (متغير ب address) geded
    userCopy[e.target.name] = e.target.value;
    setuser(userCopy);
  };
  //--------------validation With joi--------
  // هنعمل variable hnsamih ay 7aga
  // import joi
  // goaha function esmaha object bta5od object
  // object da feh nafs esm data eli 3aiz a3mellaha validation
  // joi dot ema string(any value is a string) ema number(if only numbers)
  // fe emal tlds:top level domain ba5od arr of el masmo7een
  // bndy ll validate el data b2a eli 3aizino yvalidatha
  // bn return schemaVarName.validate(user);
  // abortEarly: true lw 3ando moshkela birag3 array of owel moshkela
  //abortEarly: false raga3li kol el mashakel
  //byraga3 []error we massage lw fe moshkela lw mafish  bytala3 bs value
  //"^[a-z][0-9]{3}$" ^ ybd2 b small litter y7twi 3lA alkam
  const HandelValidateForm = () => {
    const schemaVarName = Joi.object({
      first_name: Joi.string().alphanum().required().min(3).max(10),
      Last_name: Joi.string().alphanum().required().min(3).max(10),
      age: Joi.number().min(16).max(80).required(),
      email: Joi.string()
        .required()
        .email({ tlds: { allow: ["com", "net"] } }),
      Password: Joi.string().required().pattern(new RegExp("^[a-z][0-9]{3}$")),
    });

    let validationResulte = schemaVarName.validate(user, { abortEarly: false });
    if (validationResulte.error) {
      setErrorList(validationResulte.error.details);
      return false;
    } else {
      return true;
    }
  };
  return (
    <>
      <div className={style.container}>
        <div className={style["register-image"]} />
        <div className={style.cardcontainer}>
          <h1 className={style.formtitle}>Create Account</h1>
          {errMassage.flag ? (
            <div className="alert alert-danger p-1">{errMassage.massage}</div>
          ) : null}
          <form onSubmit={submitFormData}>
            <div className="inputgroup my-2">
              <input
                onChange={handelGetFormData}
                typeof="text"
                className={style.forminput}
                name="first_name"
                placeholder=" First name"
              />
              {/* #on change mash bt update nafsaha 8er lw user da5al 7arf aw rakam gded 
            bs el onmove htt8er lw das arrow upp /arrow dawen */}
              {errorList.map((er, index) => {
                if (er.message.includes("first_name")) {
                  return (
                    <p key={index} className={style.errorAlert}>
                      Please enter a valid name
                    </p>
                  );
                }
              })}
            </div>
            <div className="inputgroup my-2">
              <input
                onChange={handelGetFormData}
                typeof="text"
                className={style.forminput}
                name="Last_name"
                placeholder="Last name"
              />
              {errorList.map((er, index) => {
                if (er.message.includes("Last_name")) {
                  return (
                    <p key={index} className={style.errorAlert}>
                      Please enter a valid name
                    </p>
                  );
                }
              })}
            </div>
            <div className="inputgroup my-2">
              <input
                onChange={handelGetFormData}
                typeof="text"
                className={style.forminput}
                name="age"
                placeholder="Age"
              />
              {errorList.map((er, index) => {
                if (er.message.includes("age")) {
                  return (
                    <p key={index} className={style.errorAlert}>
                      please , Enter a valid Age
                    </p>
                  );
                }
              })}
            </div>
            <div className="inputgroup my-2">
              <input
                onChange={handelGetFormData}
                typeof="text"
                className={style.forminput}
                name="email"
                placeholder="Email"
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
            <div className="inputgroup my-2">
              <input
                onChange={handelGetFormData}
                typeof="Password"
                className={style.forminput}
                name="Password"
                placeholder="Password"
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
                "Register"
              )}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
