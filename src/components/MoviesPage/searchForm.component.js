import styled from 'styled-components';

const SearchFormStyled = styled.form`
  margin: 20px 0;
  background-color: #ffffff;
  width: fit-content;
  border: 5px inset rgb(239, 222, 205);
  border-radius: 10px;
  & input {
    border: none;
    padding: 5px 10px;
    font-size: 16px;
    outline: none;
  }
  & button {
    border-radius: 10px;
    padding: 10px 20px;
    background-color: rgb(0, 0, 0);
    color: rgb(239, 222, 205);
    font-weight: 600;
    font-size: 16px;
    &:hover {
      color: rgb(211, 33, 45);
    }
  }
`;

export default SearchFormStyled;