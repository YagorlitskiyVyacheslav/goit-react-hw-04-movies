import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MoviesListComponent = styled.ul`
& li:not(:last-child) {
    margin-bottom: 7px;
}
`;

MoviesListComponent.Link = styled(Link)`
color: rgb(201,255,229);
`;

export default MoviesListComponent;