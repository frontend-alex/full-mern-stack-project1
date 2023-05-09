import React, { useState } from "react";

import { Link } from "react-router-dom";
import { MdAlternateEmail } from "react-icons/md";
import { RxEyeClosed } from "react-icons/rx";
import { AiOutlineEye } from "react-icons/ai";
import { BsDoorClosed } from "react-icons/bs";
import { IoReturnDownBackOutline } from "react-icons/io5";

import OkToast from "../../Constants/ToastMessages/OkToast";

import useGetData from "../../Hooks/useGetData";

const Register = ({ setToggle }) => {
  const { postRegister } = useGetData();

  const [togglePass, setTogglePass] = useState(false);
  const [toggleToast, setToggleToast] = useState(false);

  const [error, setError] = useState("");

  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    rePassword: "",
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setValues((state) => ({ ...state, [name]: value }));
  };

  const useOnSubmit = (e) => {
    e.preventDefault();

    postRegister(
      values.username,
      values.email,
      values.password,
      values.rePassword,
    ).then((res) => {
      if (res.status == 404) {
        setError(res.message);
      } else if (res.status == 201) {
        setToggleToast((prev) => !prev);
        setTimeout(() => {
          setToggle((prev) => !prev);
        }, 3000);
      }
    });
  };

  return (
    <div className="register-container">
      {toggleToast && <OkToast text="Successfully created an account" duration={5000}/>}

      <div className="background-attachment-register backgrounda"></div>
      <div className="data-container">



        {/* custom component */}
        <div className="navigation">
          <div className="home-btn">
            <p onClick={() => setToggle((prev) => !prev)}>
              Login <IoReturnDownBackOutline className="icon" />{" "}
            </p>
          </div>
          <div className="home-btn">
            <Link to='/'>
              <IoReturnDownBackOutline className="icon rotate" />
              Home
            </Link>
          </div>
        </div>
        {/* custom  component */}




        <form onSubmit={useOnSubmit} className="data-container-pos">
          <div className="register-text">
            <BsDoorClosed className="icon" />
            <h1 className="login-h">Hello there!</h1>
            <p className="login-p">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
          </div>

          <div className="input-container">
            <input
              type="text"
              required
              onChange={onChangeHandler}
              name="username"
            />
            <label>Username</label>
          </div>
          <div className="input-container">
            <input
              type="email"
              required
              onChange={onChangeHandler}
              name="email"
            />
            <MdAlternateEmail className="icon" />
            <label>Email</label>
          </div>
          <div className="input-container">
            <input
              type={!togglePass ? "password" : "text"}
              required
              onChange={onChangeHandler}
              name="password"
            />
            {togglePass ? (
              <RxEyeClosed
                className="icon"
                onClick={() => setTogglePass((prev) => !prev)}
              />
            ) : (
              <AiOutlineEye
                className="icon"
                onClick={() => setTogglePass((prev) => !prev)}
              />
            )}
            <label>Password</label>
          </div>
          <div className="input-container">
            <input
              type={!togglePass ? "password" : "text"}
              required
              onChange={onChangeHandler}
              name="rePassword"
            />
            <label>Re-enter Password</label>
          </div>

          {error != "" ? <p className="err-msg">{error}</p> : ""}

          <div>
            <p>
              Already have an account? 
              <span
                className="purple"
                onClick={() => setToggle((prev) => !prev)}
              >
                 Log in
              </span>
            </p>
          </div>

          <button className="button-regi" type="submit">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
