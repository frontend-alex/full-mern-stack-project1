import React from "react";

import { IoReturnDownBackOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

import img from '../assests/images/error-img.png'

const ErrorPage = () => {
  return (
    <div className="error-page-container">
      <div className="error-image">
        <img src={img} alt="Error-image" />
      </div>
      <div className="error-text">
        <h1>The page you were looking for does not exist :(</h1>
        <p>
          We looked all over, but that page seems to have gotten away from us.
          Try one of these links to get back on track.
        </p>

        <Link to='/'><IoReturnDownBackOutline className="icon"/>Go back</Link>
      </div>
    </div>
  );
};

export default ErrorPage;
