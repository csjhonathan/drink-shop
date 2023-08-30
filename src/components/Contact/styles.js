import { styled } from 'styled-components';

export const ContactContainer = styled.div`
  width: 100%;
  background-color: #1B1F1C;
  height: 80vh;
  z-index: 2;
  display: flex;
  @media(max-width: 768px){
    flex-direction: column;
    height: 100vh;
  }
`;

export const SocialArea = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  padding-left: 10%;
  @media(max-width: 768px){
    width: 100%;
    height: 30%;
    align-items: center;
    padding-left: 0px;
  }
`;

export const ContactUs = styled.h2`
  color: #FFF;
  font-family: Yrsa;
  font-size: 50px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const MediaArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const MediaTitle = styled.p`
  color: #FFF;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  width: 104px;
  height: 16px;
  border-left: 1px solid #FFF;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover{
    color: #00EC5B;
  }
`;
