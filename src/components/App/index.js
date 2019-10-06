import React from 'react';
import GlobalStyle from './../../globalStyle';

// Styles
import {Title} from "./style";

// Custom hooks
import useGetVenuesForLunch from './../../hooks/useGetVenuesForLunch';

const App = () => {

    const venuesData = useGetVenuesForLunch('Amsterdam');
    
    console.log('venuesData', venuesData)

    return (
        <>
            <GlobalStyle/>
            <div>
                <Title>Lunchplace</Title>
            </div>
        </>
    );
}

export default App;
