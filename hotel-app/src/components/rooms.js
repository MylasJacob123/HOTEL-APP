import React from "react";
import "./rooms.css";
import Navigation from "./navigation";
import FooterImg from "./assets/Rectangle 77.png";
import RoomsFooterLogo from "./assets/Mandala Royal Resort Logo Minimalist (5).png";
import SingleRoomDeluxe from "./assets/Single Room Deluxe Image.png";
import SingleRoomDeluxePremium from "./assets/Single Room Deluxe Premium.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWifi,
  faBath,
  faShower,
  faBed,
  faUtensils,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

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
          <div className="room-display-card">
            <div className="room-display-card-image-div">
              <img
                className="room-display-card-image"
                src={SingleRoomDeluxe}
                alt="Image of the Single Room Deluxe"
              />
            </div>
            <div className="room-display-card-info">
              <div class="room-display-card-info-heading-body">
                <h4>Single Room Deluxe</h4>
                <div className="room-display-card-info-heading-body-line"></div>
              </div>
              <h5>
                <span className="room-display-card-info-price">$350</span> / per night
              </h5>
              <div className="room-display-card-info-amenities">
                <div className="room-display-card-info-amenity">
                  <div class="room-display-card-info-amenity-icon">
                    <FontAwesomeIcon icon={faWifi} />
                  </div>
                  <div class="room-display-card-info-amenity-text"><span>High-speed Wi-Fi</span></div>
                </div>
                <div className="room-display-card-info-amenity">
                  <div class="room-display-card-info-amenity-icon">
                    <FontAwesomeIcon icon={faUtensils} />
                  </div>
                  <div class="room-display-card-info-amenity-text"><span>Breakfast</span></div>
                </div>
                <div className="room-display-card-info-amenity">
                  <div class="room-display-card-info-amenity-icon">
                    <FontAwesomeIcon icon={faBed} />
                  </div>
                  <div class="room-display-card-info-amenity-text"><span>One bed in room</span></div>
                </div>
                <div className="room-display-card-info-amenity">
                  <div class="room-display-card-info-amenity-icon">
                    <FontAwesomeIcon icon={faBath} />
                  </div>
                  <div class="room-display-card-info-amenity-text"><span>1 Bathroom</span></div>
                </div>
                <div className="room-display-card-info-amenity">
                  <div class="room-display-card-info-amenity-icon">
                    <FontAwesomeIcon icon={faUser} />
                  </div>
                  <div class="room-display-card-info-amenity-text"><span>1-2 people</span></div>
                </div>
              </div>
            </div>
          </div>
          <div className="room-display-card"></div>
          <div className="room-display-card"></div>
          <div className="room-display-card"></div>
          <div className="room-display-card"></div>
          <div className="room-display-card">
            <div className="room-display-card-image-div">
              <img
                className="room-display-card-image"
                src={SingleRoomDeluxePremium}
                alt="Image of the Single Room Deluxe"
              />
            </div>
            <div className="room-display-card-info">
              <div class="room-display-card-info-heading-body">
                <h4>Single Room Deluxe Premium</h4>
                <div className="room-display-card-info-heading-body-line"></div>
              </div>
              <h5>
                <span className="room-display-card-info-price">$425</span> / per night
              </h5>
              <div className="room-display-card-info-amenities">
                <div className="room-display-card-info-amenity">
                  <div class="room-display-card-info-amenity-icon">
                    <FontAwesomeIcon icon={faWifi} />
                  </div>
                  <div class="room-display-card-info-amenity-text"><span>High-speed Wi-Fi</span></div>
                </div>
                <div className="room-display-card-info-amenity">
                  <div class="room-display-card-info-amenity-icon">
                    <FontAwesomeIcon icon={faUtensils} />
                  </div>
                  <div class="room-display-card-info-amenity-text"><span>Breakfast</span></div>
                </div>
                <div className="room-display-card-info-amenity">
                  <div class="room-display-card-info-amenity-icon">
                    <FontAwesomeIcon icon={faBed} />
                  </div>
                  <div class="room-display-card-info-amenity-text"><span>One bed in room</span></div>
                </div>
                <div className="room-display-card-info-amenity">
                  <div class="room-display-card-info-amenity-icon">
                    <FontAwesomeIcon icon={faBath} />
                  </div>
                  <div class="room-display-card-info-amenity-text"><span>1 Bathroom</span></div>
                </div>
                <div className="room-display-card-info-amenity">
                  <div class="room-display-card-info-amenity-icon">
                    <FontAwesomeIcon icon={faUser} />
                  </div>
                  <div class="room-display-card-info-amenity-text"><span>1-2 people</span></div>
                </div>
              </div>
            </div>
          </div>
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
            <div className="rooms-display-last-bottom-bottom1"></div>
            <div className="rooms-display-last-bottom-bottom2">
              <div className="rooms-display-last-bottom-bottom2-box1">
                <h6>(c)2024Greywood. All rights reserved</h6>
              </div>
              <div className="rooms-display-last-bottom-bottom2-box2">
                <h6>Terms & Conditions</h6>
                <h6>Privacy Policy</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Rooms;
