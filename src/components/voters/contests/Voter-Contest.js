import React from 'react';
import VoterContestDetails from './Voter-Contest-Details';
function VoterContest({ contests }) {
  
    return (
        <div className='contest-details-container'>
            {contests.map(contest => (
              <VoterContestDetails
                contest={ contest }
              />
            )) }

    </div>
    
    
    );
}

export default VoterContest;
