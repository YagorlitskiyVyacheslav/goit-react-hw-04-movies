import styled from 'styled-components';


export const MovieContainer = styled.div`
display: flex;
`;
export const ImgContainer = styled.div`
  margin-top: 20px;
  min-width: 500px;
`;
export const MovieInfoContainer = styled.div`
  margin-top: 20px;
  margin-left: 30px;
  color: rgb(240, 248, 255);
  & p,
  & li {
    margin: 20px;
  }
`;
MovieInfoContainer.GenresList = styled.ul`
display: flex;
& li:not(:last-child) {
    margin-right: 10px;
}
`;
