import React from 'react';
import "./rooms.css";
import Navigation from "./navigation";

function Rooms() {
  return (
    <div className="rooms-display">
        <div className="rooms-display-header">
            <div className="rooms-display-header-top">
                <Navigation />
            </div>
            <div className="rooms-display-header-bottom"></div>
        </div>
        <div className="rooms-display-middle"></div>
        <div className="rooms-display-last"></div>
    </div>
  )
}
export default  Rooms;