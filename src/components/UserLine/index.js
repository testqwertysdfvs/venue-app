import React from 'react';
import {Row, Name, VoteCell} from "./style";

const UserLine = ({user, venues, vote}) => {

    console.log('venues', venues)
    return <Row>
        <td><Name>{user.name}</Name></td>
            {venues.map(venue => {
                console.log('v', venue)
                const isVoted = venue.usersVoted.includes(user.id);
                return <td key={venue.id}
                                 onClick={() => vote(venue.id, user.id, isVoted)}><VoteCell isVoted={isVoted}/></td>
            })}
    </Row>
}

export default UserLine;
