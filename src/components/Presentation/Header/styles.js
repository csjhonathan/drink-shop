import styled from 'styled-components';
import {AiFillFacebook,AiOutlineInstagram} from 'react-icons/ai';

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;


export const SocialArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80px;
  gap: 20px;
`;

export const StyledConectaLogo = styled.a`
  color: #FFF;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-family: Roboto;
  text-decoration: none;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
  transition: all .4s;
  cursor: pointer;
  &:hover{
    color: #E81319;
  }
`;

export const StyledFacebookIcon = styled(AiFillFacebook)`
  font-size: 30px;
  color: #FFF;

`;

export const FacebookLink = styled.a`
  cursor: pointer;
  :hover{
    color: blue;
  }
`;

export const StyledinstagramIcon = styled(AiOutlineInstagram)`
  font-size: 30px;
  color: #FFF;
  transition: color .4s;
`;

export const InstagramLink = styled.a`
  cursor: pointer;
  :hover{
    color: pink;
  }
`;
