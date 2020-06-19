import React from 'react';

function VoterReferendum({ contests }) {

    console.log(contests)
    return (
        <div>VoterReferendum
            {contests.map(contest => (
                <div>{ contest.type }</div>
            )) }
        </div>
    );
}

export default VoterReferendum;
