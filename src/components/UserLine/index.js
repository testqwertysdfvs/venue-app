import React from 'react';
import PropTypes from 'prop-types';
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

UserLine.propTypes = {
    user: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired
    }).isRequired,
    venues: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        categories: PropTypes.arrayOf(PropTypes.string).isRequired,
        rating: PropTypes.number.isRequired,
        url: PropTypes.string.isRequired,
        usersVoted: PropTypes.arrayOf(PropTypes.string).isRequired,
    })).isRequired,
    vote: PropTypes.func.isRequired,
}

export default UserLine;
