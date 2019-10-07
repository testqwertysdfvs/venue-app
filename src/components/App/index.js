import React, {useState} from 'react';
import GlobalStyle from '../../commonStyles';

// Styles
import {Title} from "./style";

// Custom hooks
import useGetVenuesForLunch from './../../hooks/useGetVenuesForLunch';
import Search from "../Search";

const App = () => {
    const [address, setAddress] = useState('');

    const venuesData = useGetVenuesForLunch(address);
    
    console.log('venuesData', venuesData)

    return (
        <>
            <GlobalStyle/>
            <div>
                <Title>Lunchplace</Title>
                <Search onSearch={setAddress}/>
            </div>
        </>
    );
}

export default App;
