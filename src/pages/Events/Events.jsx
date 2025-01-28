import EventCard from "./EventCard";
import { eventsPast, eventsUpcoming } from "content/events/Events.jsx";
import "./Events.css";


export default function Events() {
  return (
    <div className="event-container">

      {/* Upcoming Events Section */}
      <h1 className="section-title">Upcoming Events</h1>

      {eventsUpcoming.length > 0
      ? eventsUpcoming.map(eventDetails => (<EventCard eventDetails={eventDetails} key={eventDetails.title} />))
      : <p className="event-empty-message">You’re all caught up!<br />But keep an eye out on this page&hellip;</p>}

      {/* Past Events Section */}
      <h1 className="section-title">Past Events</h1>

      {eventsPast.map(eventDetails => (
        <EventCard eventDetails={eventDetails} key={eventDetails.title} />
      ))}

    </div>
  );
}
