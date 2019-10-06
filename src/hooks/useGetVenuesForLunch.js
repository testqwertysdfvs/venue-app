import React, {useState, useEffect} from 'react';
import {getVenuesForLunch} from "../api";

export default function (address) {
    const [venues, setVenues] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        (async function () {
            setIsLoading(true);
            try {
                const data = await getVenuesForLunch(address);
                setVenues(data.response.groups[0].items);
                setIsLoading(false);
            } catch (e) {
                setError(e);
                setIsLoading(false);
            }
        })()
    }, [address]);
    return {
        venues,
        isLoading,
        error
    }
}
