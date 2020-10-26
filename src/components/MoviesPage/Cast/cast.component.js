import styled from 'styled-components';


const CastList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
`;
CastList.Item = styled.li`
  margin: 5px;
  color: rgb(240, 248, 255);
`;
CastList.Name = styled.h3`
 margin: 10px 0;
 font-size: 20px;
 text-align: center;
`;
CastList.Character = styled.p`
  font-size: 18px;
  text-align: center;
`;


export default CastList;