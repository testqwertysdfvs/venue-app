import React, {useState, useEffect} from 'react';
import GlobalStyle from '../../commonStyles';

// Styles
import {Title} from "./style";

// Custom hooks
import useGetVenuesForLunch from './../../hooks/useGetVenuesForLunch';
import Search from "../Search";
import UserLine from "../UserLine";

const App = () => {
    const [address, setAddress] = useState('');
    const [venues, addVenues] = useState([]);
    const [users, addUser] = useState([{
        id: 1,
        name: 'User 1',
    }, {
        id: 2,
        name: 'User 2',
    }, {
        id: 3,
        name: 'User 3',
    }, {
        id: 4,
        name: 'User 4',
    }]);

    const venuesData = useGetVenuesForLunch(address);

    const onVote = (venueId, userId, remove) => addVenues(venues.map(venue => {
        // ad on remove user's vote from clicked venue
        if (venue.id === venueId) {
            return {
                ...venue,
                usersVoted: remove ? venue.usersVoted.filter(id => id !== userId) : [...venue.usersVoted, userId]
            }
        }
        // if we remove vote from clicked venue, we don't do anything with other venues
        if(remove) {
            return venue
        }
        // remove user's vote from other venues
        return {
            ...venue,
            usersVoted: venue.usersVoted.filter(id => id !== userId)
        }
    }))

    useEffect(() => {
        if (!venuesData.isLoading && !venuesData.error && venuesData.venues.length) {
            const venuesList = [];
            for (let i = 0; i < venuesData.venues.length; i++) {
                const current = venuesData.venues[i].venue;
                venuesList.push({
                    id: current.id,
                    name: current.name,
                    categories: current.categories.map(category => category.pluralName),
                    usersVoted: [],
                })
            }
            addVenues(venuesList);
        }
    }, [venuesData.isLoading, venuesData.error, venuesData.venues.length])

    return (
        <>
            <GlobalStyle/>
            <div>
                <Title>Lunchplace</Title>
                <Search onSearch={setAddress}/>
                {users.map(user => <UserLine key={user.id} user={user} vote={onVote} venues={venues}/>)}
            </div>
        </>
    );
}

export default App;
