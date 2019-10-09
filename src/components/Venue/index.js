import React from 'react';
import PropTypes from 'prop-types';
import {Block, Category, Rating, Best} from "./style";

const Venue = ({name, url, rating, categories, isWinner}) => {
    return <Block isWinner={isWinner}>
        {isWinner && <Best/>}
        <a href={url} target="_blank" rel="noopener noreferrer">{name}</a>
        <Category>{categories.join(', ')}</Category>
        <Rating>{rating}</Rating>
    </Block>
}

Venue.propTypes = {
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    categories: PropTypes.arrayOf(PropTypes.string),
    isWinner: PropTypes.bool.isRequired,
}

export default Venue;
