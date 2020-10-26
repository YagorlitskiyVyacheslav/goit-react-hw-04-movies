import styled from 'styled-components';

export const NoReviews = styled.p`
  color: rgb(240, 248, 255);
`;
export const ReviewsContainer = styled.div`
margin-top: 20px;
`;
export const ReviewsListComponent = styled.ul`

`;
ReviewsListComponent.Item = styled.li`
    margin: 30px 0;
  & h3,
  & p {
    color: rgb(240, 248, 255);
  }
  & h3 {
      margin: 10px 0;
  }
`;