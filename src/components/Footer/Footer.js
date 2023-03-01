import React from "react";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <footer className="text-center ">
        <div className="p-3">
          <p className="mr-5">© 2023 Copyright - aya adel</p>
          <FaFacebook
            /* redirect to external URL */
            onClick={() => window.location.replace("https://www.facebook.com")}
          />
          <AiFillInstagram className="mx-2" />
          <FaYoutube className="mr-2" />
        </div>
      </footer>
    </>
  );
};

export default Footer;
