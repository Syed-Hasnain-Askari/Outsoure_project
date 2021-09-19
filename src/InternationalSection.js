import React from "react";
import "./intersection.css";
import image from "./image3.jpg";

export default function InternationalSection() {
  return (
    <div className="intersection-wrapper">
      <div className="intersection-container">
        <div className="intersection-left">
          <img src={image}></img>
        </div>
        <div className="intersection-right">
          <h1>International</h1>
          <p className="intersection-subheading">
            your address in America for free. We brought the distance between
            you and your purchases!
          </p>
          <p className="intersection-para">
            You can buy from the USA stores and receive it in the Kingdom of
            Saudi Arabia at your national address or any other address of your
            choice.
          </p>
          <a>for more details</a>
        </div>
      </div>
    </div>
  );
}
