import { useEffect, useState } from "react";
import api from "../services/api";
import Navbar from "../components/Navbar";
import InternshipCard from "../components/InternshipCard";

function Internships() {
  const [internships, setInternships] =
    useState([]);

  const [company, setCompany] =
    useState("");

  const [role, setRole] =
    useState("");

  const [link, setLink] =
    useState("");

  const [deadline, setDeadline] =
    useState("");

  async function fetchInternships() {
    try {
      const res =
        await api.get(
          "/internships"
        );

      setInternships(
        res.data
      );
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchInternships();
  }, []);

  async function createInternship() {
    try {
      const token =
        localStorage.getItem(
          "token"
        );

      await api.post(
        "/internships",
        {
          company,
          role,
          link,
          deadline,
        },
        {
          headers: {
            Authorization:
              `Bearer ${token}`,
          },
        }
      );

      setCompany("");
      setRole("");
      setLink("");
      setDeadline("");

      fetchInternships();
    } catch (error) {
      console.log(error);
      alert(
        "Could not add internship"
      );
    }
  }

  return (
    <div>
      <Navbar />

      <h1>Internships</h1>

      <h2>
        Add Internship
      </h2>

      <input
        type="text"
        placeholder="Company"
        value={company}
        onChange={(e) =>
          setCompany(
            e.target.value
          )
        }
      />

      <br />
      <br />

      <input
        type="text"
        placeholder="Role"
        value={role}
        onChange={(e) =>
          setRole(
            e.target.value
          )
        }
      />

      <br />
      <br />

      <input
        type="text"
        placeholder="Apply Link"
        value={link}
        onChange={(e) =>
          setLink(
            e.target.value
          )
        }
      />

      <br />
      <br />

      <input
        type="date"
        value={deadline}
        onChange={(e) =>
          setDeadline(
            e.target.value
          )
        }
      />

      <br />
      <br />

      <button
        onClick={
          createInternship
        }
      >
        Add Internship
      </button>

      <hr />

      <h2>
        Available Internships
      </h2>

      {internships.length ===
      0 ? (
        <p>
          No internships found.
        </p>
      ) : (
        internships.map(
          (internship) => (
            <InternshipCard
              key={
                internship._id
              }
              internship={
                internship
              }
            />
          )
        )
      )}
    </div>
  );
}

export default Internships;