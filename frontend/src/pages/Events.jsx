import { useEffect, useState } from "react";
import api from "../services/api";
import Navbar from "../components/Navbar";
import EventCard from "../components/EventCard";
import "../css/Pages.css";

function Events() {
  const [events, setEvents] = useState([]);

  const [title, setTitle] = useState("");
  const [description, setDescription] =
    useState("");
  const [location, setLocation] =
    useState("");
  const [date, setDate] =
    useState("");

  async function fetchEvents() {
  try {
    const res =
      await api.get(
        "/events"
      );

    const today =
      new Date()
        .toISOString()
        .split("T")[0];

    const activeEvents =
      res.data.filter(
        (event) =>
          event.date &&
          event.date
            .split("T")[0] >=
            today
      );

    setEvents(
      activeEvents
    );
  } catch (error) {
    console.log(error);
  }
}

  useEffect(() => {
    fetchEvents();
  }, []);

  async function createEvent() {
    try {
      const token =
        localStorage.getItem(
          "token"
        );

      await api.post(
        "/events",
        {
          title,
          description,
          location,
          date,
        },
        {
          headers: {
            Authorization:
              `Bearer ${token}`,
          },
        }
      );

      setTitle("");
      setDescription("");
      setLocation("");
      setDate("");

      fetchEvents();

      alert(
        "Event created successfully!"
      );
    } catch (error) {
      console.log(error);
      alert(
        "Could not create event"
      );
    }
  }

  return (
    <>
      <Navbar />

      <div className="page">
        <h1>Events</h1>

        <div className="form-card">
          <h2>Create Event</h2>

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
            placeholder="Description"
            value={description}
            onChange={(e) =>
              setDescription(
                e.target.value
              )
            }
          />

          <input
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e) =>
              setLocation(
                e.target.value
              )
            }
          />

          <input
            type="date"
            value={date}
            onChange={(e) =>
              setDate(
                e.target.value
              )
            }
          />

          <button
            onClick={
              createEvent
            }
          >
            Create Event
          </button>
        </div>

        <h2 className="section-title">
          All Events
        </h2>

        {events.length === 0 ? (
          <p
            style={{
              textAlign:
                "center",
            }}
          >
            No events found.
          </p>
        ) : (
          events.map((event) => (
            <EventCard
              key={event._id}
              event={event}
              fetchEvents={fetchEvents}
            />
          ))
        )}
      </div>
    </>
  );
}

export default Events;