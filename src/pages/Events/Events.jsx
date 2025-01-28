import EventCard from "./EventCard";
import events from "content/events/Events.jsx";
import "./Events.css";


export default function Events() {
  return (
    <div className="event-container">

      {/* Upcoming Events Section */}
      <h1 className="section-title">Upcoming Events</h1>

      {/* Past Events Section */}
      <h1 className="section-title">Past Events</h1>

      {events.map(eventDetails => (
        <EventCard eventDetails={eventDetails} key={eventDetails.title} />
      ))}

    </div>
  );
}
