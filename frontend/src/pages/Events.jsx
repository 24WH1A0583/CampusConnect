import { useEffect, useState } from "react";
import api from "../services/api";
import Navbar from "../components/Navbar";
import EventCard from "../components/EventCard";

function Events() {
  const [events, setEvents] = useState([]);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");

  async function fetchEvents() {
    try {
      const res = await api.get("/events");
      setEvents(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchEvents();
  }, []);

  async function createEvent() {
    try {
      const token = localStorage.getItem("token");

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
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setTitle("");
      setDescription("");
      setLocation("");
      setDate("");

      fetchEvents();
    } catch (error) {
      console.log(error);
      alert("Could not create event");
    }
  }

  return (
    <div>
      <Navbar />

      <h1>Events</h1>

      <h2>Create Event</h2>

      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <br /><br />

      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <br /><br />

      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />

      <br /><br />

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <br /><br />

      <button onClick={createEvent}>
        Create Event
      </button>

      <hr />

      <h2>All Events</h2>

      {events.length === 0 ? (
        <p>No events found.</p>
      ) : (
        events.map((event) => (
          <EventCard
            key={event._id}
            event={event}
          />
        ))
      )}
    </div>
  );
}

export default Events;