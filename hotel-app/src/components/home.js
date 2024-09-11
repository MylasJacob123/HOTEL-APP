import React from "react";
import "./home.css";
import Navigation from "./navigation";
import Image1 from "./assets/Rectangle 19.png";
import Image2 from "./assets/Rectangle 21.png";
import Image3 from "./assets/Rectangle 22.png";
import Image4 from "./assets/Rectangle 20.png";
import Image5 from "./assets/Rectangle 26.png";
import Image6 from "./assets/Rectangle 31.png";
import Image7 from "./assets/Rectangle 33.png";

function Home() {
  return (
    <div className="home-container">
      {/* SECTION A */}
      <div className="section-A">
        <div className="section-A-top">
          <Navigation />
        </div>
        <div className="section-A-middle">
          <h2 className="section-A-middle-head-text">
            Helping You Find An Escape To To A Comfortable Place
          </h2>
          <h4 className="section-A-middle-sub-text">
            It could be A quiet place for your journey ahead
          </h4>
        </div>
        <div className="section-A-bottom"></div>
      </div>

      {/* SECTION B */}
      <div className="section-B">
        <div className="section-B-top">
          <div className="section-B-top-box1">
            <h2 className="section-B-top-box1-heading">
              Enjoy a unforgettable stay with the best charm
            </h2>
          </div>
          <div className="section-B-top-box2">
            <p className="section-B-top-box2-paragraph">
              Book your perfect stay, effortlessly. Find peace of mind with
              instant booking and exclusive offers.
            </p>
            <span className="section-B-top-box2-director">More info</span>
          </div>
        </div>

        <div className="section-B-bottom">
          <div className="image">
            <img className="outer-image" src={Image1} alt="image1" />
          </div>
          <div className="middle-image">
            <div className="inner-images">
              <img className="inner-image" src={Image2} alt="image2" />
            </div>
            <div className="inner-images">
              <img className="inner-image" src={Image3} alt="image3" />
            </div>
          </div>
          <div className="image">
            <img className="outer-image" src={Image4} alt="image4" />
          </div>
        </div>
      </div>

      {/* SECTION C */}
      <div className="section-C">
        <div className="section-C-top">
          <div className="section-C-top-info1">
            <h2 className="section-C-top-info1-heading">
              Enjoy the best of our quality facilities
            </h2>
          </div>
          <div className="section-C-top-info2">
            <button className="section-C-top-info2-button">See more</button>
          </div>
        </div>
        <div className="section-C-bottom">
          <div className="line"></div>
          <div className="section-C-bottom-info1">
            <div className="section-C-bottom-info1-img">
              <img
                className="section-C-bottom-images"
                src={Image5}
                alt="image5"
              />
            </div>
            <div className="section-C-bottom-info1-detail"></div>
          </div>
          <div className="line"></div>
          <div className="section-C-bottom-info2">
            <div className="section-C-bottom-info2-img">
            <img
                className="section-C-bottom-images"
                src={Image6}
                alt="image6"
              />
            </div>
            <div className="section-C-bottom-info2-detail"></div>
          </div>
          <div className="line"></div>
          <div className="section-C-bottom-info3">
            <div className="section-C-bottom-info3-img">
            <img
                className="section-C-bottom-images"
                src={Image7}
                alt="image7"
              />
            </div>
            <div className="section-C-bottom-info3-detail"></div>
          </div>
        </div>
      </div>

      {/* SECTION D */}
      <div className="section-D">
        <div className="section-D-top">
          <div className="section-D-top-info"></div>
          <div className="section-D-top-info"></div>
        </div>
        <div className="section-D-bottom"></div>
      </div>
    </div>
  );
}

export default Home;
