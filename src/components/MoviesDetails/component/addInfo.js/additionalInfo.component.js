import { Link } from 'react-router-dom';
import styled from 'styled-components';


export const AdditionalInfoContainer = styled.div`
    margin-top: 20px;
`;
export const AdditionalInfoTitle = styled.h3`
  color: rgb(240, 248, 255);
`;
export const AdditionalInfoList = styled.ul`
margin-top: 20px;

& li:first-child {
    margin-bottom: 10px;
}
`;
export const AdditionalLink = styled(Link)`
  font-size: 18px;
  color: rgb(240, 248, 255);
  &:hover {
    color: rgb(211, 33, 45);
  }
`;