import styled from 'styled-components'
import {ReactComponent as BestTag} from './../../assets/images/best-tag.svg';

export const Block = styled.th`
    text-align: center;
    width: 160px;
    height: 80px;
    padding: 15px 20px;
    background-color: ${props => props.isWinner ? '#7ff491' : 'transparent'};
    position: relative;
`;

export const Name = styled.a`
  display: inline-block;
  height: 40px;
`;

export const Category = styled.p`
height: 40px;
color: #5d5d5d;
`;

export const Rating = styled.p`
font-size: 20px;
font-weight: bold;
margin-bottom: 0;
`;

export const Best = styled(BestTag)`
  width: 50px;
  position: absolute;
  top: 0;
  right: 0px;
`;
