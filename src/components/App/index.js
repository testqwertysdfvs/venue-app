import React, {useState, useEffect} from 'react';
import GlobalStyle from '../../commonStyles';

// Styles
import {Title} from "./style";

// Custom hooks
import useGetVenuesForLunch from './../../hooks/useGetVenuesForLunch';
import Search from "../Search";
import VoteTable from "../VoteTable";

const App = () => {
    const [address, setAddress] = useState('Amsterdam');
    const [venues, addVenues] = useState([]);

    const venuesData = useGetVenuesForLunch(address, 'lunch');

    // make json with venues data
    useEffect(() => {
        if (!venuesData.isLoading && !venuesData.error && venuesData.venues.length) {
            const venuesList = [];
            for (let i = 0; i < venuesData.venues.length; i++) {
                const current = venuesData.venues[i].response.venue;
                if(current){
                    venuesList.push({
                        id: current.id,
                        name: current.name,
                        categories: current.categories.map(category => category.pluralName),
                        rating: current.rating,
                        url: current.canonicalUrl,
                        usersVoted: [],
                    })
                }
            }
            addVenues(venuesList);
        }
    }, [venuesData.isLoading, venuesData.error, venuesData.venues.length]);

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

    return (
        <>
            <GlobalStyle/>
            <div>
                <Title>Lunchplace</Title>
                <Search onSearch={setAddress}/>
                <VoteTable venues={venues} onVote={onVote}/>
            </div>
        </>
    );
}

export default App;
