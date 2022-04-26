import React from "react";
import "./Login.css";

export const Login = () => {
  const loginToApp = () => {};
  const register = () => {};

  return (
    <div className="login">
      <img
        src="https://news.hitb.org/sites/default/files/styles/large/public/field/image/500px-LinkedIn_Logo.svg__1.png?itok=q_lR0Vks"
        alt=""
      />
      <form>
        <input type="text" placeholder="Full name (required if registering)" />
        <input type="text" placeholder="Profile picture URL (optional)" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit" onClick={loginToApp}>
          Sign In
        </button>
      </form>
      <p>
        Not a member?{" "}
        <span className="login_reguster" onClick={register}>
          Register Now
        </span>
      </p>
    </div>
  );
};
