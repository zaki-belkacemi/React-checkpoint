import React from "react";

export const Login = () => {
  return (
    <div className="logini">
      <div className="logincard">
        <h2 className="heading2">welcome to our Restaurant</h2>
        <div className="login">
          <input className="input" placeholder="Username" type="text" />
          <input className="input" placeholder="Password" type="password" />
          <button className="button">LOGIN </button>
        </div>
      </div>
    </div>
  );
};
