import React, { useState } from "react";
import { Data } from "../../Constants/Data";
import ErrorToast from "../ToastMessages/ErrorToast";

const Header = () => {
  const [data, setData] = useState("");

  const [results, setResults] = useState(Data.headerCards);
  const [error, setError] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if (results.length == 0) {
      setError((prev) => !prev);
    } else {
      setResults(
        results.filter((result) =>
          result.h1.toLocaleLowerCase().includes(data.toLocaleLowerCase()),
        ),
      );
    }
  };

  return (
    <header className="main-header-container">
      {error && <ErrorToast text="Invalid Language" />}

      <div className="header-text">
        <h1>{Data.headerData.mainHeading}</h1>
        <p className="gray">{Data.headerData.paraghraph}</p>
      </div>

      <form onSubmit={onSubmit} className="flex-header-input">
        <div className="header-input">
          <input
            className="h-input"
            type="text"
            placeholder=""
            required
            value={data}
            onChange={(e) => setData(e.target.value)}
          />
          <label className="h-label">Search</label>
        </div>
        <button type="submit" className="header-btn">
          Search
        </button>
      </form>

      <div className="header-remeasuring">
        <div className="header-cards-container">
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>

          {results.length == 0 ? (
            <h1 className="error-msg">No found</h1>
          ) : (
            <>
              {results.map((card) => {
                const { h1, p, picture, id } = card;
                return (
                  <div className="header-card" key={id}>
                    <img src={picture} />
                    <h1>{h1}</h1>
                    <p className="purple">{p}</p>
                  </div>
                );
              })}
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
