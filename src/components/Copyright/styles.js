import { styled } from 'styled-components';

export const StyledCopyright = styled.footer`
  padding: 20px;
  background-color: #1B1F1C;
  height: 200px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  @media(max-width: 768px){
    flex-direction: column;
  }
`;

export const Copy = styled.h2`
  color: #FFF;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  opacity: 0.3;
`;

export const ProjectedBy = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #FFF;
  font-family: Inter;
  font-size: 9px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

`;
