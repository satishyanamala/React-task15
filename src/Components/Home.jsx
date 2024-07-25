import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from './Loader';
import TeamCard from './Teamcard';

const teamsApiUrl = 'https://apis.ccbp.in/ipl';

function Home() {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(teamsApiUrl)
      .then(response => {
        setTeams(response.data.teams);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching teams:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="home">
      <img src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png" alt="ipl logo" className="ipl-logo" />
      <h1 className="home-title">IPL Dashboard</h1>
      {loading ? (
        <Loader />
      ) : (
        <ul className="teams-list">
          {teams.map(team => (
            <TeamCard key={team.id} team={team} />
          ))}
        </ul>
      )}
    </div>
  );
}

export default Home;
