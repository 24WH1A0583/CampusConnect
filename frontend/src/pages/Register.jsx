
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../services/api";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    branch: "",
    year: "",
    interests: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.post("/auth/register", {
        ...formData,
        interests: formData.interests
          .split(",")
          .map((item) => item.trim()),
      });

      alert("Registration Successful!");
      navigate("/");
    } catch (error) {
      alert(
        error.response?.data?.message ||
          "Registration failed"
      );
    }
  };

  return (
    <div>
      <h1>CampusConnect Register</h1>

      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Name"
          onChange={handleChange}
        />

        <br /><br />

        <input
          name="email"
          type="email"
          placeholder="Email"
          onChange={handleChange}
        />

        <br /><br />

        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
        />

        <br /><br />

        <input
          name="branch"
          placeholder="Branch"
          onChange={handleChange}
        />

        <br /><br />

        <input
          name="year"
          type="number"
          placeholder="Year"
          onChange={handleChange}
        />

        <br /><br />

        <input
          name="interests"
          placeholder="AI, Web Dev, DSA"
          onChange={handleChange}
        />

        <br /><br />

        <button type="submit">
          Register
        </button>
      </form>

      <br />

      <Link to="/">
        Already have an account?
      </Link>
    </div>
  );
}

export default Register;