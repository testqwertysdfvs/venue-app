import React, {useState, useCallback, useEffect} from 'react';
import PropTypes from 'prop-types';
import uniqid from 'uniqid';
import {Input, Button} from "../../commonStyles";
import {Table, UserInput, ContentBlock} from "./style";
import preloader from './../../assets/images/preloader.gif';

import UserLine from "../UserLine";
import Venue from "../Venue";

const VoteTable = ({address, venues, onVote, isLoading}) => {
    const [users, addUser] = useState([]);
    const [userInputValue, setUserInput] = useState('');

    const handleUserInputChange = (e) => setUserInput(e.target.value);

    // clear users list when address changes
    useEffect(() => {
        addUser([])
    }, [address]);

    // function to find best venue
    const findWinnerIds = useCallback((venues) => {
        let id = [];
        let maxVotes = 0;
        for (let i = 0; i < venues.length; i++) {
            const current = venues[i];
            const currentVotes = current.usersVoted.length;
            if (currentVotes !== 0) {
                if (currentVotes > maxVotes) {
                    maxVotes = currentVotes;
                    id = [current.id];
                }
                if (currentVotes === maxVotes) {
                    id.push(current.id)
                }
            }
        }
        return id;
    }, []);

    // add user to list
    const handleAddUser = (e) => {
        e.preventDefault();
        setUserInput('');
        addUser([...users, {id: uniqid(), name: userInputValue}])
    };

    if (isLoading) {
        return <ContentBlock><img src={preloader} alt=""/></ContentBlock>
    } else if (venues.length === 0) {
        return <ContentBlock>Venues not found<br/>enter address in the search field to find venues</ContentBlock>
    } else if (venues.length) {
        const winners = findWinnerIds(venues);

        return <><Table>
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
                        isWinner={!!(winners.length && winners.includes(venue.id))}
                    />) : null}
            </tr>
            </thead>
            <tbody>
            {users.map(user =>
                <UserLine
                    key={user.id}
                    user={user}
                    vote={onVote}
                    venues={venues}
                />)}
            </tbody>
        </Table>
            <UserInput onSubmit={handleAddUser}>
                <Input
                    type="text"
                    value={userInputValue} Ò
                    onChange={handleUserInputChange}
                />
                <Button type="submit">
                    Add user
                </Button>
            </UserInput></>
    }
}

VoteTable.propTypes = {
    address: PropTypes.string.isRequired,
    venues: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        categories: PropTypes.arrayOf(PropTypes.string).isRequired,
        rating: PropTypes.number.isRequired,
        url: PropTypes.string.isRequired,
        usersVoted: PropTypes.arrayOf(PropTypes.string).isRequired,
    })).isRequired,
    onVote: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
}

export default VoteTable;
