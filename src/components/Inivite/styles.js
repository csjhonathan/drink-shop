import { styled } from 'styled-components';

export const StyledInvite = styled.div`
  background-color: #00EC5B;
  height: 30vh;
  margin-top: 146px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  position: relative;
  @media(max-width: 768px){
    margin-top: 100px;
    height: 370px;
  }
`;

export const CTAArea = styled.div`
  align-self: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 30%;
  gap: 15px;
  @media(max-width: 450px){
    justify-content:center;
    margin-top: 130px;
  }
`;

export const InviteText = styled.p`
  color: #0E0E0E;
  font-family: Yrsa;
  font-size: 34px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
`;

export const InviteButton = styled.button`
  width: 193px;
  min-height: 56px;
  background-color: #1B1F1C;
  color: #FFF;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  transition: box-shadow 0.3s ease-in-out;
  &:hover {
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
  }
`;

export const StyledTin = styled.img`
  position: absolute;
  transform: ${({transform})=> transform};
  flex-shrink: 0;
  left: ${({left})=> left};
  right: ${({right})=> right};
  top: ${({top})=> top};
  display: ${({viewWindow})=> viewWindow > 450 ? 'initial' : 'none'};
  @media(max-width: 450px){
    margin-top: 90px;
    height: 370px;
    transform: rotate(0deg);
    width: 149.267px;
    height: 262.174px;
    top: -200px;
    top: -10%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(0deg);
  }
`;
