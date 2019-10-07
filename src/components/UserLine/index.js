import React from 'react';
import {Line, Votes, VoteCell} from "./style";

const UserLine = ({user, venues, vote}) => {

    console.log('venues', venues)
    return <Line>
        <div>{user.name}</div>
        <Votes>
            {venues.map(venue => {
                console.log('v', venue)
                const isVoted = venue.usersVoted.includes(user.id);
                return <VoteCell key={venue.id}
                                 onClick={() => vote(venue.id, user.id, isVoted)}>{isVoted ? 'voted' : '-'}</VoteCell>
            })}
        </Votes>
    </Line>
}

export default UserLine;
