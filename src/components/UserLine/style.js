import styled from 'styled-components'
import {ReactComponent as Checkmark} from './../../assets/images/checkmark.svg';

export const Row = styled.tr`
td {
height: 40px;
border: 1px solid #a7a7a7;
padding: 10px 5px;
}
  td:first-child {
    width: 200px;
    padding: 10px 5px;
  }
`;

export const Name = styled.div`
    border: 1px solid #eee;
    border-radius: 5px;
    padding: 5px 15px;
    height: 25px;
    display: flex;
    align-items: center;
`;

export const VoteCell = styled.div`
  height: 37px;
  border-radius: 5px;
  background-color: ${props => props.isVoted ? '#58d9bf' : 'transparent'};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const Check = styled(Checkmark)`
  width: 25px;
  height: 25px;
`;

