import { styled } from 'styled-components';

export const MainContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProductsTitleAndDescription = styled.div`
  height: 25vh;
  display: flex;
  flex-direction: column;
  font-family: Yrsa;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

export const ProductsTitle = styled.h2`
  font-size: 24px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
`;

export const ProductsDescription = styled.p`
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  width: 400px;
  text-align: center;
  @media(max-width: 768px){
    width: 250px;
  }
`;

