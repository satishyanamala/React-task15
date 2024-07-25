import React from 'react';
import { Link } from 'react-router-dom';


function TeamCard({ team }) {
  return (
    <li className="team-card">
      <Link to={`/team-matches/${team.id}`} className="team-link">
        <img src={team.team_image_url} alt={team.name} className="team-logo" />
        <p className="team-name">{team.name}</p>
      </Link>
    </li>
  );
}

export default TeamCard;
