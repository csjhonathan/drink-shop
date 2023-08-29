import styled from 'styled-components';

export const StyledPresentation = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 745px;
  padding: 20px 125px 0 125px;
  @media(max-width: 768px){
    padding: 20px 15px 0 15px;
    width: 100%;
    height: 100vh;
  }
`;

export const PresentationBackground = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 745px;
  object-fit: cover;
  z-index: -5;

  @media(max-width: 768px){
    width: 100%;
    height: 100vh;
  }
`;

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

export const PresentationContent = styled.div`
  display: flex;
  height: 90%;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  align-self: center;
  @media(max-width: 768px){
    flex-direction: column-reverse;
    height: 100%;
    width: 100%;
  }

`;

export const CTAArea = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media(max-width: 768px){
    align-items: center;
    width: 100%;
    height: 40%;
  }
`;

export const PresentationMessage = styled.h1`
  color: #FFF;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-family: Yrsa;
  font-size: 70px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%;
  width: 458px;
  height: 150px;
  flex-shrink: 0;
  @media(max-width: 768px){
    text-align: center;
    font-size: 38px;
    width: 330px;
    height: 88px;
  }
`;

export const CTAButton = styled.button`
  width: 188px;
  height: 56px;
  flex-shrink: 0;
  border: none;
  border-radius: 30px;
  background-color: #00EC5B;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #101213;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  transition: background-color .3s;
  margin-left: 30px;
  cursor: pointer;
  &:hover{
    background-color: green;
  }
  @media(max-width: 768px){
    flex-direction: column-reverse;
    width: 327px;
    margin-left: 0;
  }
`;

export const GuaranaTin = styled.img`
  width: 326px;
  height: 574px;
  flex-shrink: 0;
  @media(max-width: 768px){
    width: 212px;
    height: 372px;
  }
`;
