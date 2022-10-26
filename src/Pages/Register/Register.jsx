// import axios from "axios";
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
    let validationResulte = HandelValidateForm();

    if (validationResulte.error) {
      setErrorList(validationResulte.error.details);
      setLoading(false);
    } else {
      console.log("3dina mn el validation");
      HandelGOTOLOgin();

      //let { data } = await axios.post(
      //     "https://routeegypt.herokuapp.com/signup",
      //     user
      //   );
      //   if (data.message == "success") {
      //     alert("go login");
      //   } else {
      //     seterrMassage(data.message);
      //   }
    }
  };
  //-------------code el bashmohandesa btb3t -----------------------------------
  //el user redistration data-------------------------------
  //-ll api be post --------------------------
  // let submitFormData = async (e) => {
  //   e.preventDefault();
  //   let { data } = await axios.post(
  //     "https://routeegypt.herokuapp.com/signup",
  //     user
  //   );
  //   if (data.message == "success") {
  //     alert("go login");
  //   } else {
  //     seterrMassage(data.message);
  //   }
  //   console.log(data, "iam data");
  //   console.log(e, "hi iam event");
  // };
  //-----------------handel lGetFormData-----------------------------------
  //-gbt el data el user da5alha we 7ateta fe state bta3ty
  const handelGetFormData = (e) => {
    // let userCopy=user;//keda el atnen beshawro  3la nfs el makan fe el memory (shalow copy)
    let userCopy = { ...user }; // deep copy b2a 3ansy makan geded
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
      age: Joi.number().min(20).max(80).required(),
      email: Joi.string()
        .required()
        .email({ tlds: { allow: ["com", "net"] } }),
      Password: Joi.string().required().pattern(new RegExp("^[a-z][0-9]{3}$")),
    });
    return schemaVarName.validate(user, { abortEarly: false });
  };
  return (
    <>
      <div className="w-75 m-outo">
        <h1 className="my-3">Registration Form</h1>

        {errorList.map((er, index) => (
          <div key={index} className="alert alert-danger p-1">
            {er.message}
          </div>
        ))}
        {errMassage.flag ? (
          <div className="alert alert-danger p-1">{errMassage.massage}</div>
        ) : (
          ""
        )}
        <form onSubmit={submitFormData}>
          <div className="inputgroup my-2">
            <label htmlFor="fist_name">First name:</label>
            <input
              onChange={handelGetFormData}
              typeof="text"
              className="form-control"
              name="first_name"
            />
            {/*on change mash bt update nafsaha 8er lw user da5al 7arf aw rakam gded 
            bs el onmove htt8er lw das arrow upp /arrow dawen */}
          </div>
          <div className="inputgroup my-2">
            <label htmlFor="Last_name">Last name:</label>
            <input
              onChange={handelGetFormData}
              typeof="text"
              className="form-control"
              name="Last_name"
            />
          </div>
          <div className="inputgroup my-2">
            <label htmlFor="age">age:</label>
            <input
              onChange={handelGetFormData}
              typeof="text"
              className="form-control"
              name="age"
            />
          </div>
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
            className={`btn  float-end ${style.button}`}
            style={{ backgroundColor: "#ffe7cc" }}
            type="submit"
          >
            {loading ? (
              <div className="spinner-border text-primary" role="status"></div>
            ) : (
              "Register"
            )}
          </button>
          <div className="clearfix">{/*msh sha8ala */}</div>
        </form>
      </div>
    </>
  );
}
