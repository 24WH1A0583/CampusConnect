import { useEffect, useState } from "react";
import api from "../services/api";
import Navbar from "../components/Navbar";
import InternshipCard from "../components/InternshipCard";
import "../css/Pages.css";

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

    const today =
      new Date()
        .toISOString()
        .split("T")[0];

    const activeInternships =
      res.data.filter(
        (internship) =>
          internship.deadline &&
          internship.deadline
            .split("T")[0] >=
            today
      );

    setInternships(
      activeInternships
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

      alert(
        "Internship added successfully!"
      );
    } catch (error) {
      console.log(error);
      alert(
        "Could not add internship"
      );
    }
  }

  return (
    <>
      <Navbar />

      <div className="page">
        <h1>
          Internships
        </h1>

        <div className="form-card">
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

          <input
            type="date"
            value={deadline}
            onChange={(e) =>
              setDeadline(
                e.target.value
              )
            }
          />

          <button
            onClick={
              createInternship
            }
          >
            Add Internship
          </button>
        </div>

        <h2 className="section-title">
          Available Internships
        </h2>

        {internships.length ===
        0 ? (
          <p
            style={{
              textAlign:
                "center",
            }}
          >
            No internships
            found.
          </p>
        ) : (
          internships.map(
            (
              internship
            ) => (
              <InternshipCard
                key={
                  internship._id
                }
                internship={
                  internship
                }
                fetchInternships={
                    fetchInternships
                }
              />
            )
          )
        )}
      </div>
    </>
  );
}

export default Internships;