import styled from 'styled-components';

const ButtonComponent = styled.button`
  border: 5px inset rgb(239, 222, 205);
  border-radius: 10px;
  padding: 10px 20px;
  background-color: rgba(0, 0, 0, 0.5);
  color: rgb(239, 222, 205);
  font-weight: 600;
  font-size: 16px;
  position: absolute;
  top: 25px;
  left: 5px;
  &:hover {
    border: 5px inset rgb(211, 33, 45);
    color: rgb(211, 33, 45);
  }
`;

export default ButtonComponent;