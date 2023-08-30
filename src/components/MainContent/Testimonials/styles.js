import styled, { keyframes, css } from 'styled-components';

export const StyledTestimonials = styled.div`
  margin-top: 150px;
  width: 90%;
  height: 90vh;
  align-self: center;
  display: flex;
  @media(max-width: 768px){
    height: 1096px;
    flex-direction: column;
  }
`;

export const LeftSideContainer = styled.div`
  width: 50%;
  position: relative;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -5;
  }
  @media(max-width: 768px){
    height: 50%;
    width: 100%;
  }
`;

export const RightSideContainer = styled.div`
  width: 50%;
  @media(max-width: 768px){
    height: 50%;
    width: 100%;
  }
`;

export const TestimonialsCarousel = styled.div`
  height: 50%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border: 1px solid #000;
  background: #1B1F1C;
  gap: 20px;
  @media(max-width: 768px){
    gap: 10px;
  }
`;

export const BtnCarouselList = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  height: 30px;
`;

export const ChangeTestimonialBtn = styled.button`
  height: 10px;
  width: 10px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  opacity: ${({selected})=> selected ? 1 : 0.3};
`;

export const InviteContainer = styled.div`
  height: 50%;
  text-align: center;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -5;
    filter: brightness(0.5);
  }

  p{
    color: #FFF;
    font-family: Yrsa;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    transition: opacity .3s;
    z-index: 2;
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeInAnimation = css`
  animation: ${fadeIn} 1s ease-in-out forwards;
`;

export const TestimonialText = styled.p`
  color: #FFF;
  text-align: center;
  font-family: Yrsa;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  width: 250px;
  height: 75px;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  ${({ fadeInEffect }) => fadeInEffect && fadeInAnimation};
  opacity: ${({ fadeInEffect }) => (fadeInEffect ? 0 : 1)};
  transition: opacity 1s ease-in-out;
  @media(max-width: 768px){
    height: 30px;
  }
`;

export const TestimonialAuthor = styled.p`
  color: #FFF;
  font-family: Lexend Deca;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  opacity: 0;
  margin-top: 10px;
  ${({ fadeInEffect }) => fadeInEffect && fadeInAnimation};
  opacity: ${({ fadeInEffect }) => (fadeInEffect ? 0 : 1)};
  transition: opacity 1s ease-in-out;
`;
