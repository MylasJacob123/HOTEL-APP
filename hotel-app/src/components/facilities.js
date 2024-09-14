import React from "react";
import "./facilities.css";
import Navigation from "./navigation";
import TheSpa from "./assets/spa-setting-with-lit-candle-fluffy-towels-fragrant-flowers-promotes-relaxation.jpg";
import IndoorSwimmingPool from "./assets/Indoor Swimming Pool.png";
import Caffe from "./assets/elegant-wooden-dining-room-with-modern-lighting-generated-by-ai.jpg";
import Gym from "./assets/Luxury Training Gym-1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Facilities() {
  return (
    <div className="facilities-display">
      <div className="facilities-header">
        <div className="facilities-header-top">
          <Navigation />
        </div>
        <div className="facilities-header-top-line"></div>
        <div className="facilities-header-bottom">
          <div className="facilities-header-bottom1">
            <div className="facilities-header-bottom1-box1">
              <img src={TheSpa} />
            </div>
            <div className="facilities-header-bottom1-box2">
              <div className="box2-1">
                <h3>The Spa</h3>
                <p>
                  Relax and rejuvenate in our serene spa. Pamper yourself with
                  our luxurious spa treatments.
                </p>
              </div>
              <span className="section-B-top-box2-director">
                <FontAwesomeIcon icon={faArrowRight} />
              </span>
            </div>
          </div>
          <div className="facilities-header-bottom-line"></div>
          <div className="facilities-header-bottom2">
            <div className="facilities-header-bottom2-box1">
              <img src={IndoorSwimmingPool} />
            </div>
            <div className="facilities-header-bottom2-box2">
              <div class="box2-1">
                <h3>Indoor Swimming Pool</h3>
                <p>
                  Escape to our tranquil indoor pool, where luxury meets
                  leisure.
                </p>
              </div>
              <span className="section-B-top-box2-director">
                <FontAwesomeIcon icon={faArrowRight} />
              </span>
            </div>
          </div>
          <div className="facilities-header-bottom-line"></div>
        </div>
      </div>
      <div className="facilities-middle">
        <div className="facilities-header-bottom">
          <div className="facilities-header-bottom1">
            <div className="facilities-header-bottom1-box1">
              <img src={Caffe} />
            </div>
            <div className="facilities-header-bottom1-box2">
              <div className="box2-1">
                <h3>Caffe & Restaurant</h3>
                <p>
                  Experience world-class dining without leaving the hotel.
                  Exquisite meals, crafted by our top chefs.
                </p>
              </div>
              <span className="section-B-top-box2-director">
                <FontAwesomeIcon icon={faArrowRight} />
              </span>
            </div>
          </div>
          <div className="facilities-header-bottom-line"></div>
          <div className="facilities-header-bottom2">
            <div className="facilities-header-bottom2-box1">
              <img src={Gym} />
            </div>
            <div className="facilities-header-bottom2-box2">
              <div class="box2-1">
                <h3>Indoor Training Gym</h3>
                <p>
                  Elevate your fitness experience in our state-of-the-art indoor
                  gym, where luxury meets performance.
                </p>
              </div>
              <span className="section-B-top-box2-director">
                <FontAwesomeIcon icon={faArrowRight} />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="facilities-footer">
      <div className="facilities-footer-top">
            <div className="facilities-footer-top1">
              <div className="facilities-footer-top1-logo-div">
                <div className="facilities-footer-top1-logo">
                  <img src={Image9} alt="image9" />
                </div>
                <h6>20 Houston Park Ave</h6>
                <h6>Evelyn, Richmond Monaco 2322</h6>
              </div>
              <div className="facilities-footer-top1-overview">
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
            <div className="facilities-footer-top2">
              <h6>Contact Details</h6>
              <p className="facilities-footer-top2-contact-details">
                greywood@gmail.com
                <br />
                +27 81 007 1498
              </p>
            </div>
          </div>
          <div className="facilities-footer-bottom">
            <div className="facilities-footer-bottom1"></div>
            <div className="facilities-footer-bottom2">
              <div className="facilities-footer-bottom2-box1">
              <h6>(c)2024Greywood. All rights reserved</h6>
              </div>
              <div className="facilities-footer-bottom2-box2">
                <h6>Terms & Conditions</h6>
                <h6>Privacy Policy</h6>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}
export default Facilities;
