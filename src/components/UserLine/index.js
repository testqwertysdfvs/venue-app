import React from 'react';
import {Row, Name, VoteCell, Check} from "./style";

const UserLine = ({user, venues, vote}) => {

    return <Row>
        <td><Name>{user.name}</Name></td>
            {venues.map(venue => {
                const isVoted = venue.usersVoted.includes(user.id);
                return <td key={venue.id}
                           onClick={() => vote(venue.id, user.id, isVoted)}><VoteCell isVoted={isVoted}>{isVoted && <Check/>}</VoteCell></td>
            })}
    </Row>
}

export default UserLine;
