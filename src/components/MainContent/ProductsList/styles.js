import { styled } from 'styled-components';


export const StyledProductsList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 80px;
  @media(max-width: 735px){
    flex-direction: column;
    align-items: center;
  }
`;

export const ProductItem = styled.li`
  width: 360px;
  height: 484px;
  flex-shrink: 0;
  border-radius: 16px;
  background: #FFF;
  box-shadow: 0px 8px 24px -4px rgba(0, 0, 0, 0.25);
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: background-color .3s;
  &:hover{
    background-color: lightgray;
  }
`;

export const ProductTitle = styled.p`
  font-family: Yrsa;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const ProductTextDescription = styled.p`
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const ProductImg = styled.img`
  width: 209px;
  height: 290px;
  flex-shrink: 0;
`;

export const ProductButton = styled.button`
  width: 193px;
  height: 56px;
  flex-shrink: 0;
  background-color: #00EC5B;
  position: absolute;
  border: none;
  border-radius: 30px;
  bottom: -28px;
  left: 50%;
  transform: translateX(-50%);
  transition: background-color .3s;
  cursor: pointer;
  &:hover{
    background-color: green;
  }
`;
