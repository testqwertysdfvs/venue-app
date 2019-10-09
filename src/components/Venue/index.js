import React from 'react';
import {Block, Category, Rating, Best} from "./style";

const Venue = ({name, url, rating, categories, isWinner}) => {
    return <Block isWinner={isWinner}>
        {isWinner ? <Best/> : null}
        <a href={url} target="_blank">{name}</a>
        <Category>{categories.join(', ')}</Category>
        <Rating>{rating}</Rating>
    </Block>
}

export default Venue;
