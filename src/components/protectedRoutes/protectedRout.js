import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const ProtectedRout = ({ loginData }) => {
  {
    console.log(loginData, "hi uam protected");
  }
  return <>{loginData ? <Outlet /> : <Navigate to={"/login"} />}</>;
};
//Outlet------ داهاتلي الكمبونينت الي عليها الدور الي هيتشال ويتحط مكانه
//   الفرق بين النافيجيت وال اللنك ان النافيجيت بقوله روح حته معينه من  غير ما تدوس علي حاجه
//لاكن اللنك بحتاج كلمه ادوس عليها عشان اروح مكان معين
//  جينا في ال app .js
//<Route element={protectedRout} loginData={loginData}>
//  هنحط هنا كل اللنكات الي عايزين نحميها
// </Route>
export default ProtectedRout;
