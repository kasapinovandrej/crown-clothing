import React from "react";
import SingIn from "../../components/sing-in/SingIn";
import SingUp from "../../components/sing-up/SingUp";
import "./sing-in-and-sing-up.scss";

const singInAndSingUp = () => {
  return (
    <div className="sing-in-and-sing-up">
      <SingIn />
      <SingUp />
    </div>
  );
};

export default singInAndSingUp;
