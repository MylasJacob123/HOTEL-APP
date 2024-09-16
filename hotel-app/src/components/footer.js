import React from "react";
import "./footer.css";
import FooterLogo from "./assets/Mandala Royal Resort Logo Minimalist (5).png";

function Footer() {
  return (
    <div className="footer">
          <div className="footer-top">
            <div className="footer-top1">
              <div className="footer-top1-logo-div">
                <div className="footer-top1-logo">
                  <img src={FooterLogo} alt="Footer Logo" />
                </div>
                <h6>20 Houston Park Ave</h6>
                <h6>Evelyn, Richmond Monaco 2322</h6>
              </div>
              <div className="footer-top1-overview">
                <div>
                  <h6>Rooms</h6>
                  <h6>Facilities</h6>
                  <h6>About</h6>
                </div>
                <div>
                  <h6>Instagram</h6>
                  <h6>Twitter</h6>
                  <h6>YouTube</h6>
                </div>
              </div>
            </div>
            <div className="footer-top2">
              <h6>Contact Details</h6>
              <p className="footer-top2-contact-details">
                greywood@gmail.com
                <br />
                +27 81 007 1498
              </p>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="footer-bottom1"></div>
            <div className="footer-bottom2">
              <div className="footer-bottom2-box1">
              <h6>(c)2024Greywood. All rights reserved</h6>
              </div>
              <div className="footer-bottom2-box2">
                <h6>Terms & Conditions</h6>
                <h6>Privacy Policy</h6>
              </div>
            </div>
          </div>
        </div>
  )
}
export default Footer;