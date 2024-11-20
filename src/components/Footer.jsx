import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="banner">
          <div className="left">
          <img className="logo" src="public\logobg.png" alt="logo" /> 
          </div>
          <div className="right">
            <p>Sector 125 , Noida</p>
            <p>Open: 05:00 PM - 12:00 AM</p>
          </div>
        </div>
        <div className="banner">
          <div className="left">
            <p>Developed By Ishita</p>
          </div>
          <div className="right">
            <p>All Rights Reserved By Munchify.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;