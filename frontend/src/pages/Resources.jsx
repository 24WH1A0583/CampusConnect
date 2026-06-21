import { useEffect, useState } from "react";
import api from "../services/api";
import Navbar from "../components/Navbar";
import ResourceCard from "../components/ResourceCard";
import "../css/Pages.css";

function Resources() {
  const [resources, setResources] =
    useState([]);

  const [title, setTitle] =
    useState("");

  const [subject, setSubject] =
    useState("");

  const [link, setLink] =
    useState("");

  async function fetchResources() {
    try {
      const res =
        await api.get(
          "/resources"
        );

      setResources(
        res.data
      );
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchResources();
  }, []);

  async function createResource() {
    try {
      const token =
        localStorage.getItem(
          "token"
        );

      await api.post(
        "/resources",
        {
          title,
          subject,
          link,
        },
        {
          headers: {
            Authorization:
              `Bearer ${token}`,
          },
        }
      );

      setTitle("");
      setSubject("");
      setLink("");

      fetchResources();

      alert(
        "Resource uploaded successfully!"
      );
    } catch (error) {
      console.log(error);
      alert(
        "Could not upload resource"
      );
    }
  }

  return (
    <>
      <Navbar />

      <div className="page">
        <h1>
          Resources
        </h1>

        <div className="form-card">
          <h2>
            Upload Resource
          </h2>

          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) =>
              setTitle(
                e.target.value
              )
            }
          />

          <input
            type="text"
            placeholder="Subject"
            value={subject}
            onChange={(e) =>
              setSubject(
                e.target.value
              )
            }
          />

          <input
            type="text"
            placeholder="Resource Link"
            value={link}
            onChange={(e) =>
              setLink(
                e.target.value
              )
            }
          />

          <button
            onClick={
              createResource
            }
          >
            Upload Resource
          </button>
        </div>

        <h2 className="section-title">
          Available Resources
        </h2>

        {resources.length ===
        0 ? (
          <p
            style={{
              textAlign:
                "center",
            }}
          >
            No resources
            found.
          </p>
        ) : (
          resources.map(
            (
              resource
            ) => (
              <ResourceCard
                key={
                  resource._id
                }
                resource={
                  resource
                }
                fetchResources={
                    fetchResources
                }
              />
            )
          )
        )}
      </div>
    </>
  );
}

export default Resources;