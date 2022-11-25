import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../../../context/AuthContext";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { signIn } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    console.log("cargado");
    try {
      await signIn(email, password);
      navigate("/createAcompanhante");
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };

  return (
    <div c>
      <div>
        <h1>Sign in to your account</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email </label>
          <input onChange={(e) => setEmail(e.target.value)} type="email" />
        </div>
        <div>
          <label>Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
        </div>
        <button>Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;
