import { NavLink } from 'react-router-dom';
import styled from 'styled-components';


const Header = styled.header`
  padding: 20px;
  background-color: rgb(114, 160, 193);
  border-bottom: 3px solid #1c6ea4;
`;

Header.NavList = styled.ul`
display: flex;
justify-content: center;
& li:first-child {
    margin-right: 20px;
}
`;
Header.NavLink = styled(NavLink)`
  text-decoration: none;
  font-size: 20px;
  font-weight: 800;
  color: rgb(239, 222, 205);
  &.active {
    color: rgb(211, 33, 45);
    text-decoration: underline;
    transition: all 200ms linear;
  }
`;

export default Header;