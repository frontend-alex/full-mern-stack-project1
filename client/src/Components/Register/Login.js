import React, { useState } from "react";
import { Link } from "react-router-dom";

import useGetData from "../../Hooks/useGetData";

import { BsDoorOpen } from "react-icons/bs";
import { MdAlternateEmail } from "react-icons/md";
import { RxEyeClosed } from "react-icons/rx";
import { AiOutlineEye } from "react-icons/ai";
import { IoReturnDownBackOutline } from "react-icons/io5";

import OkToast from "../../Constants/ToastMessages/OkToast";
import useAuth from "../../Hooks/useAuth";

const Login = ({ setToggle }) => {

  const [ user ] = useAuth();

  const { postLogin } = useGetData();

  const [togglePass, setTogglePass] = useState(false);
  const [toggleToast, setToggleToast] = useState(false);

  const [error, setError] = useState("");
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setValues((state) => ({ ...state, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    postLogin(values.email, values.password).then((res) => {
      if (res.status == 404) {
        setError(res.message);
      } else if (res.status == 201) {
        setToggleToast((prev) => !prev);

        setTimeout(() => {
          localStorage.setItem("auth", res.token);
          window.location.href = `/dashboard/${user?.username}`
        }, 3000);
      }
    });
  };

  return (
    <div className="register-container">

      {toggleToast && <OkToast text="Successfully login" />}

      <div className="data-container">

        {/* custom component */}
        <div className="navigation">
          <div className="home-btn">
            <Link to="/" className="">
              Home <IoReturnDownBackOutline className="icon" />{" "}
            </Link>
          </div>
          <div className="home-btn">
            <p onClick={() => setToggle((prev) => !prev)} className="">
              <IoReturnDownBackOutline className="icon rotate" />
              Register{" "}
            </p>
          </div>
        </div>
        {/* custom  component */}

        <form onSubmit={onSubmit} className="data-container-pos">
          <div className="register-text">
            <BsDoorOpen className="icon" />
            <h1 className="login-h">Hello again user!</h1>
            <p className="login-p">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
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

          {error && <p className="err-msg">{error}</p>}

          <div className="">
            <p>
              Dont have an account?
              <span
                className="purple"
                onClick={() => setToggle((prev) => !prev)}
              >
                Sign up
              </span>
            </p>
          </div>

          <button className="button-regi" type="submit">
            Log in
          </button>
        </form>
      </div>
      <div className="background-attachment-login backgrounda"></div>
    </div>
  );
};

export default Login;
