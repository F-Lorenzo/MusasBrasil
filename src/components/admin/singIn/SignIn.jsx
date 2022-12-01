import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { GoogleButton } from "react-google-button";
import { UserAuth } from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const googleSignIn = UserAuth().googleSignIn;
  const user = UserAuth().user;
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
      navigate("/AdminPanel");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1 className="">Sign in</h1>
      <div className="">
        <GoogleButton onClick={handleGoogleSignIn} />
        <Link to={"/AdminPanel"}>
          <button>Admin panel</button>
        </Link>
      </div>
    </div>
  );
};

export default SignIn;
