import {useState, useEffect} from 'react';
import {api} from "../api";

export default function (address, query) {
    const [venues, setVenues] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        if (address) {
            (async function () {
                setIsLoading(true);
                setError(false);
                try {
                    const data = await api.venues.search(address, query);
                    const venuesDetails = await Promise.all(data.response.groups[0].items.map(item => api.venues.venueDetails(item.venue.id)));
                    setVenues(venuesDetails);
                    setIsLoading(false);
                } catch (e) {
                    setError(e);
                    setIsLoading(false);
                }
            })()
        }
    }, [address]);
    return {
        venues,
        isLoading,
        error
    }
}
