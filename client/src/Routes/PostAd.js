import React, { useState } from "react";

const PostAd = () => {
  const [data, setData] = useState({
    image: "https://plainbackground.com/plain1024/abaaa5.png",
    header: "Your header...",
    text: "Your text...",
  });

  const changeHandler = (e) => {
    const { value, name } = e.target;
    setData((state) => ({ ...state, [name]: value }));
  };


  return (
    <div className="post-ad-container">
      <header
        className="ad-header"
        style={{ backgroundImage: `url(${data.image})` }}
      ></header>

      <div className="ad-info">
        <div className="add-texts">
          <h1>{data.header}</h1>
          <p>{data.text}</p>
        </div>
        <div className="register-container">
          <form className="data-container-pos">
            <div className="input-container">
              <input required onChange={changeHandler} name="image" />
              <label>Image Url</label>
            </div>

            <div className="input-container">
              <input required onChange={changeHandler} name="header" />
              <label>Header</label>
            </div>
            <div className="input-container">
              <input required onChange={changeHandler} name="text" />
              <label>Paraghrapf</label>
            </div>
             <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PostAd;
