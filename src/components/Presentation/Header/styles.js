import styled from 'styled-components';


export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;


export const SocialArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 60px;
`;

export const StyledConectaLogo = styled.svg`
  cursor: pointer;
  :hover{
    fill: red;
  }
`;

export const StyledFacebookIcon = styled.svg`
  cursor: pointer;
  :hover{
    fill: blue;
  }
`;

export const StyledinstagramIcon = styled.svg`
  cursor: pointer;
  :hover{
    fill: pink;
  }
`;
