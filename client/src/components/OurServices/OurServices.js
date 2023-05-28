import React from 'react'
import { Link } from "react-router-dom";
import QR from "../../assets/QR.svg";
import dog from "../../assets/dog.svg";
import "./OurServices.css"

export default function OurServices() {
  return (
    <div className="our-services">
        <h2>Our Services</h2>
        <p>We have the following services to help dogs.</p>
        <div className="button-container">
        <Link to="/ScanDog" className="button">
            Scan a dog
            <img src={QR} alt="QR Logo" />
          </Link>
          <Link to="/AddDog" className="button">
            Add a dog
            <img src={dog} alt="Dog Logo" />
          </Link>
        </div>
      </div>
  )
}
