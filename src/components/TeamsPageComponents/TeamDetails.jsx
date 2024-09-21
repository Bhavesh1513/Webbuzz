import React from 'react';
import { useParams } from 'react-router-dom';
import { INDIA, ENGLAND, AUSTRALIA, PAKISTAN, WEST_INDIES, SRI_LANKA, NEW_ZEALAND } from '../../data/TeamsData';

const TeamDetails = () => {
  const { teamName } = useParams();

  // Map the team names to their respective data
  const teams = {
    india: INDIA,
    england: ENGLAND,
    australia: AUSTRALIA,
    pakistan: PAKISTAN,
    west_indies: WEST_INDIES,
    sri_lanka: SRI_LANKA,
    new_zealand: NEW_ZEALAND,
  };

  const teamData = teams[teamName] || [];

  return (
    <div className='text-white bg-ternary-color h-[100vh] p-4'>
      <h1 className='text-2xl font-bold mb-4'>{teamName.toUpperCase()} Team</h1>
      <div className='grid grid-cols-3 gap-4'>
        {teamData.map(player => (
          <div key={player.id} className='border rounded-lg p-4'>
            <h3 className='text-xl font-bold'>{player.Name}</h3>
            <p>Age: {player.Age}</p>
            <p>Profession: {player.profession}</p>
            <p>Jersey No: {player.jerseyNo}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamDetails;
