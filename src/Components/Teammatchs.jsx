import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Loader from './Loader';

function TeamMatches() {
  const { id } = useParams();
  const [teamData, setTeamData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const teamMatchesApiUrl = `https://apis.ccbp.in/ipl/${id}`;
    axios.get(teamMatchesApiUrl)
      .then(response => {
        setTeamData(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching team matches:', error);
        setLoading(false);
      });
  }, [id]);

  return (
    <div className="team-matches">
      {loading ? (
        <Loader />
      ) : (
        <div className="team-data">
          <img src={teamData.team_banner_url} alt="team banner" className="team-banner" />
          <h2 className="latest-match-heading">Latest Match</h2>
          <div className="latest-match">
            <p>Date: {teamData.latest_match_details.date}</p>
            <p>Venue: {teamData.latest_match_details.venue}</p>
            <p>Result: {teamData.latest_match_details.result}</p>
          </div>
          <h2 className="recent-matches-heading">Recent Matches</h2>
          <ul className="recent-matches-list">
            {teamData.recent_matches.map(match => (
              <li key={match.id} className="match-card">
                <p>{match.competing_team}</p>
                <img src={match.competing_team_logo} alt={match.competing_team} />
                <p>{match.result}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default TeamMatches;
