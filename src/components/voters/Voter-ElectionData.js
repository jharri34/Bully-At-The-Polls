import React from 'react';

function VoterElectionData({ election }) {
    return (

        <div>
            <React.Fragment>
                <div>
                    { election.name }
                </div>
                <div>
                    { election.electionDay }
                </div>
            </React.Fragment>
        </div>
    );
}

export default VoterElectionData;
