import React from 'react';
import {Block, Category, Rating} from "./style";

const Venue = ({name, url, rating, categories, isWinner}) => {
    return <Block isWinner={isWinner}>
        <a href={url}>{name}</a>
        <Category>{categories.join(', ')}</Category>
        <Rating>{rating}</Rating>
    </Block>
}

export default Venue;
