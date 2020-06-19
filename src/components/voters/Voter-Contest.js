import React from 'react';
import BullySpinner from '../shared/bullyspinner';
function VoterContest({ contests }) {

    console.log(contests)
    return (
        <div>Contests
            {contests.map(contest => (
                <div>{ contest.type }</div>
            
            )) }
    </div>
    
    
    );
}

export default VoterContest;
