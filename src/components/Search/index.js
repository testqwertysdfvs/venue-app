import React, {useState} from 'react';
import {Button, InputBig} from "../../commonStyles";
import {SearchBlock} from "./style";
import PropTypes from 'prop-types';

const Search = ({onSearch}) => {

    const [value, setValue] = useState('');

    const handleSearchChange = (e) => setValue(e.target.value);

    return <SearchBlock>
        <InputBig type="text" onChange={handleSearchChange} value={value} placeholder="Address"/>
        <Button onClick={() => onSearch(value)}>Search</Button>
    </SearchBlock>
}

Search.propTypes = {
    onSearch: PropTypes.func.isRequired,
};

export default Search;
