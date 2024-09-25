import React from "react";
import "./css/events.css";

const Events = () => {
  const [eventData, setEventData] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const live_events = await fetch("/Event/live_events.json");
      const liveEventsData = await live_events.json();
      const past_events = await fetch("/Event/past_event.json");
      const pastEventsData = await past_events.json();

      setEventData(liveEventsData);
      setEventData((eventData) => [...eventData, pastEventsData]);
    };
    fetchData();
  }, []);
  console.log(eventData);
  return (
    <div id="team">
      <h1 className="event_eventname">ACES Events 2024-25</h1>
      <p className="event_tag">
        Experience the legacy of past events and the excitement of live events,
        all in one place – your gateway to departmental excellence.
      </p>
      {eventData.map((row, i) => (
        <div key={i} className="event_maindiv">
          <div className="event_teamName">{row[0].status}</div>
          <div key={i} className="event_subdiv">
            {row.map((obj, j) => {
              return (
                <div key={j} className="event_page">
                  {obj.name && (
                    <div className="event_card">
                      <div className="event_content">
                        <div className="event_imgBx">
                          <a
                            href={obj.reg_link}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <img src={obj.img} alt="" />
                          </a>
                        </div>
                        <div className="event_contentBx">
                          <h3>{obj.name}</h3>
                        </div>
                      </div>
                      <ul className="event_sci">
                        <li style={{ "--i": 1 }}>
                          <a
                            href={obj.reg_link}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i className="fa fa-link" aria-hidden="true"></i>
                          </a>
                        </li>
                        <li style={{ "--i": 1 }}>{obj.isRegOpen}</li>
                      </ul>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Events;
