import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Qeydiyyat: ${email}`);
    navigate("/"); 
  };

  return (
    <div className="registration-form-container">
      <h2>Qeydiyyatdan keç</h2>
      <form onSubmit={handleSubmit} className="registration-form">
        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Şifrə"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Qeydiyyatdan keç</button>
      </form>
    </div>
  );
};

export default Registration;
