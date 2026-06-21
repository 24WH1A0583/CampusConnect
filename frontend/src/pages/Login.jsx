import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../services/api";
import "../css/Login.css";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res =
        await api.post(
          "/auth/login",
          formData
        );

      localStorage.setItem(
        "token",
        res.data.token
      );

      localStorage.setItem(
        "user",
        JSON.stringify(
          res.data.user
        )
      );

      navigate(
        "/dashboard"
      );
    } catch (error) {
      alert(
        error.response?.data
          ?.message ||
          "Login failed"
      );
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1>
          CampusConnect
        </h1>

        <p className="auth-subtitle">
          Sign in to continue
        </p>

        <form
          onSubmit={
            handleSubmit
          }
        >
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={
              formData.email
            }
            onChange={
              handleChange
            }
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={
              formData.password
            }
            onChange={
              handleChange
            }
            required
          />

          <button
            type="submit"
          >
            Login
          </button>
        </form>

        <p className="auth-link">
          Don't have an
          account?{" "}
          <Link to="/register">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;