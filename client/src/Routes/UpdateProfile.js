import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

import { AiOutlineEdit } from "react-icons/ai";
import { IoReturnDownBackOutline } from "react-icons/io5";

import OkToast from "../Constants/ToastMessages/OkToast";

import userImg from '../assests/images/user.png'

import useGetData from "../Hooks/useGetData";

const UpdateProfile = ({ user }) => {
  const { userId } = useParams();

  const [values, setValues] = useState({
    userPfp: userImg,
    bio: "Hello there, my name is..",
  });


  const [error, setError] = useState("");
  const [toast, setToast] = useState(false);

  const { updateProfile } = useGetData();

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setValues((state) => ({ ...state, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    updateProfile(values.userPfp, values.bio, userId).then(
      (res) => {
        if (res.status == 404) {
          setError(res.error);
        } else if (res.status == 201) {
          setToast((prev) => !prev);
          setError(res.message);
          setTimeout(() => {
            window.location.href = `/dashboard/${user.username}`;
          }, 3000);
        }
      },
    );

  };

  return (
    <div className="edit-profile-container">
      {toast && <OkToast text={error} />}

      {/* custom component */}
      <div className="navigation">
        <div className="home-btn">
          <Link to={`/dashboard/${user.username}`} className="">
            Dashboard <IoReturnDownBackOutline className="icon" />{" "}
          </Link>
        </div>
        <div className="home-btn">
          <Link className="">
            <IoReturnDownBackOutline className="icon rotate" />
            Register
          </Link>
        </div>
      </div>
      {/* custom  component */}

      <div className="register-container">
        <form onSubmit={onSubmit} className="data-container-pos">
          <div className="register-text">
            <AiOutlineEdit className="icon" />
            <h1 className="login-h">Go do your magic!</h1>
            <p className="login-p">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
          </div>

          <div className="edit-profile-pos">
            <div className="user-preview">
              <img src={values.userPfp} />
              <div className="user-text">
                <h3>{user.username}</h3>
                <span>{values.bio}</span>
              </div>
            </div>

            <div className="input-container">
              <input
                type="text"
                required
                onChange={onChangeHandler}
                name="userPfp"
              />
              <label>Profile Picture</label>
            </div>

            <div className="input-container">
              <input
                type="text"
                required
                onChange={onChangeHandler}
                name="bio"
              />
              <label>Bio</label>
            </div>

            {/* {error && <p className="err-msg">{error}</p>} */}

            <button className="button-regi" type="submit">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
