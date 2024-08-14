import React from "react";
import "./css/team.css";

const Team = () => {
  const [teamData, setTeamData] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const faculty = await fetch("Teams/faculty.json");
      const facultyData = await faculty.json();
      const heads = await fetch("Teams/heads.json");
      const headsData = await heads.json();
      const technical = await fetch("Teams/technical.json");
      const techData = await technical.json();
      const web = await fetch("Teams/web.json");
      const webData = await web.json();
      const event = await fetch("Teams/event.json");
      const eventData = await event.json();
      const editorial = await fetch("Teams/editorial.json");
      const editorialData = await editorial.json();
      const dnp = await fetch("Teams/dnp.json");
      const dnpData = await dnp.json();
      const notification = await fetch("Teams/notification.json");
      const notificationData = await notification.json();
      const treasury = await fetch("Teams/treasury.json");
      const treasuryData = await treasury.json();
      const marketing = await fetch("Teams/marketing.json");
      const marketingData = await marketing.json();
      setTeamData(facultyData);
      setTeamData((teamData) => [...teamData, headsData]);
      setTeamData((teamData) => [...teamData, techData]);
      setTeamData((teamData) => [...teamData, webData]);
      setTeamData((teamData) => [...teamData, eventData]);
      setTeamData((teamData) => [...teamData, editorialData]);
      setTeamData((teamData) => [...teamData, dnpData]);
      setTeamData((teamData) => [...teamData, notificationData]);
      setTeamData((teamData) => [...teamData, treasuryData]);
      setTeamData((teamData) => [...teamData, marketingData]);
    };
    fetchData();
  }, []);
  //console.log(teamData);
  return (
    <div id="team">
      <h1 className="eventname">ACES COMMITTEE 2023</h1>
      {teamData.map((row, i) => (
        <div key={i} className="maindiv">
          <div className="teamName">{row[0].team}</div>
          <div key={i} className="subdiv">
            {row.map((obj, j) => {
              return (
                <div key={j} className="page">
                  {obj.name && (
                    <div class="card">
                      <div class="content">
                        <div class="imgBx">
                          <img src={obj.img} alt="" />
                        </div>
                        <div class="contentBx">
                          <h3>
                            {obj.name}
                            <br />
                            <span>{obj.position}</span>
                          </h3>
                        </div>
                      </div>
                      <ul class="sci">
                        <li style={{ "--i": 1 }}>
                          <a href="mailto: `{obj.mail}`">
                            <i class="fa fa-envelope" aria-hidden="true"></i>
                          </a>
                        </li>
                        {obj.instagram && (
                          <li style={{ "--i": 2 }}>
                            <a href={obj.instagram}>
                              <i class="fa fa-instagram" aria-hidden="true"></i>
                            </a>
                          </li>
                        )}
                        <li style={{ "--i": 3 }}>
                          <a href={obj.linkedin}>
                            <i class="fa fa-linkedin" aria-hidden="true"></i>
                          </a>
                        </li>
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

export default Team;
