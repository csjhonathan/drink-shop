import { styled } from 'styled-components';


export const ProductsListContainer = styled.ul`
  display: flex;
  justify-content: center;
  gap: 80px;
  @media(max-width: 768px){
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
  transition: all .4s;
  border: 2px solid white;
  &:hover{
    border: 2px solid rgba(0, 236, 91, 0.5);
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
  color: #101213;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  cursor: zoom-in;
  transition: all .3s;
  &:hover{
    box-shadow: 0px 4px 10px rgba(0, 236, 91, 0.5);
  }
`;


export const ModalContent = styled.div`
  height: 50%;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ModalProductTitle = styled.h2`
  color: #FFF;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const ModalProductImg = styled.img`
`;

export const CloseModalButton = styled.button`
  width: 193px;
  height: 56px;
  flex-shrink: 0;
  border-radius: 30px;
  border: none;
  color: #101213;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  transition: all .4s;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 4px 10px rgba(255, 0, 0, 0.5);
  }
`;
