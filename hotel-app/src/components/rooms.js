import React from "react";
import "./rooms.css";
import Navigation from "./navigation";
import FooterImg from "./assets/Rectangle 77.png";
import RoomsFooterLogo from "./assets/Mandala Royal Resort Logo Minimalist (5).png";

function Rooms() {
  return (
    <div className="rooms-display">
      {/* HEADER */}
      <div className="rooms-display-header">
        <div className="rooms-display-header-top">
          <Navigation />
        </div>
        <div className="rooms-display-header-bottom">
          <ul className="rooms-display-header-bottom-categories">
            <div className="rooms-display-header-bottom-categories-box">
              <li>
                <span className="rooms-display-header-bottom-categories-box-category">
                  All
                </span>
              </li>
              <div className="rooms-display-header-bottom-categories-box-category-hover"></div>
            </div>
            <div className="rooms-display-header-bottom-categories-box">
              <li>
                <span className="rooms-display-header-bottom-categories-box-category">
                  Single Rooms
                </span>
              </li>
              <div className="rooms-display-header-bottom-categories-box-category-hover"></div>
            </div>
            <div className="rooms-display-header-bottom-categories-box">
              <li>
                <span className="rooms-display-header-bottom-categories-box-category">
                  Double Rooms
                </span>
              </li>
              <div className="rooms-display-header-bottom-categories-box-category-hover"></div>
            </div>
            <div className="rooms-display-header-bottom-categories-box">
              <li>
                <span className="rooms-display-header-bottom-categories-box-category">
                  Queen Rooms
                </span>
              </li>
              <div className="rooms-display-header-bottom-categories-box-category-hover"></div>
            </div>
            <div className="rooms-display-header-bottom-categories-box">
              <li>
                <span className="rooms-display-header-bottom-categories-box-category">
                  King Rooms
                </span>
              </li>
              <div className="rooms-display-header-bottom-categories-box-category-hover"></div>
            </div>
            <div className="rooms-display-header-bottom-categories-box">
              <li>
                <span className="rooms-display-header-bottom-categories-box-category">
                  Presidential Suite
                </span>
              </li>
              <div className="rooms-display-header-bottom-categories-box-category-hover"></div>
            </div>
          </ul>
          <div className="rooms-display-header-bottom-categories-line"></div>
        </div>
      </div>

      {/* MIDDLE */}
      <div className="rooms-display-middle">
        <div class="rooms-display-middle-cards">
          <div className="room-display-card"></div>
          <div className="room-display-card"></div>
          <div className="room-display-card"></div>
          <div className="room-display-card"></div>
          <div className="room-display-card"></div>
          <div className="room-display-card"></div>
          <div className="room-display-card"></div>
          <div className="room-display-card"></div>
          <div className="room-display-card"></div>
        </div>
      </div>

      {/* LAST */}
      <div className="rooms-display-last">
        <div className="rooms-display-last-top">
          <p className="rooms-display-last-top-paragraph">
            Elevate your stay by discovering our full array of exquisite rooms
            and suites. Each one offers a unique blend of luxury and
            sophistication, meticulously designed to provide the ultimate in
            comfort and style. Click below to explore our exclusive selections
            and find the perfect retreat tailored to your desires.
          </p>
          <div className="rooms-display-last-top-image-div">
            <img
              src={FooterImg}
              alt="Image of a couple sharing laughter in a hotel bed"
            />
          </div>
        </div>
        <div className="rooms-display-last-middle">
          <div className="rooms-display-last-middle-btn-navigation"></div>
        </div>
        <div className="rooms-display-last-bottom">
          <div className="rooms-display-last-bottom-top">
            <div className="rooms-display-last-bottom-top1">
              <div className="rooms-display-last-bottom-top1-logo-div">
                <div className="rooms-display-last-bottom-top1-logo">
                  <img src={RoomsFooterLogo} alt="Logo of the hotel" />
                </div>
                <h6>20 Houston Park Ave</h6>
                <h6>Evelyn, Richmond Monaco 2322</h6>
              </div>
              <div className="rooms-display-last-bottom-top1-overview">
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
            <div className="rooms-display-last-bottom-top2">
            <h6>Contact Details</h6>
              <p className="rooms-display-last-bottom-top2-contact-details">
                greywood@gmail.com
                <br />
                +27 81 007 1498
              </p>
            </div>
          </div>
          <div className="rooms-display-last-bottom-bottom">
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Rooms;
