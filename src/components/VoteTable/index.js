import React, {useState} from 'react';
import PropTypes from 'prop-types';
import uniqid from 'uniqid';
import {Input, Button} from "../../commonStyles";
import {Table, UserInput} from "./style";

import UserLine from "../UserLine";
import Venue from "../Venue";

const VoteTable = ({venues, onVote}) => {
    const [users, addUser] = useState([{
        id: 'fghj',
        name: 'User 1'
    }, {
        id: 'fghe',
        name: 'User 2'
    }, {
        id: 'fghr',
        name: 'User 3'
    }, {
        id: 'fgtj',
        name: 'User 4'
    }]);
    const [userInputValue, setUserInput] = useState('');

    const handleUserInputChange = (e) => setUserInput(e.target.value);

    const winnerId = () => {
        let id;
        let maxVotes = 0;
        for (let i = 0; i < venues.length; i++) {
            const current = venues[i];
            const currentVotes = current.usersVoted.length;
            if (currentVotes > maxVotes) {
                maxVotes = currentVotes;
                id = current.id;
            }
        }
        return id;
    }

    return (
        <>
            <Table>
                <thead>
                <tr>
                    <th/>
                    {venues.length ? venues.map(venue =>
                        <Venue
                            key={venue.id}
                            name={venue.name}
                            url={venue.url}
                            rating={venue.rating}
                            categories={venue.categories}
                            isWinner={venue.id === winnerId()}
                        />) : null}
                </tr>
                </thead>
                {users.map(user =>
                    <UserLine
                        key={user.id}
                        user={user}
                        vote={onVote}
                        venues={venues}
                    />)}
            </Table>
            <UserInput>
                <Input
                    type="text"
                    value={userInputValue}
                    onChange={handleUserInputChange}
                />
                <Button
                    onClick={() => addUser([...users, {id: uniqid(), name: userInputValue}])}
                >
                    Add user
                </Button>
            </UserInput>
        </>
    )
}

VoteTable.propTypes = {
    venues: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        categories: PropTypes.arrayOf(PropTypes.string),
        rating: PropTypes.number,
        url: PropTypes.string,
        usersVoted: PropTypes.arrayOf(PropTypes.string),
    })),
    onVote: PropTypes.func,
}

export default VoteTable;
