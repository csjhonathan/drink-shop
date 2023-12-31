import { styled } from 'styled-components';
import InputMask from 'react-input-mask';

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding-top: 5%;
  @media(max-width: 768px){
    width: 100%;
    padding-top: 15px;
  }
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  height: 70%;
  gap: 15px;

  @media(max-width: 768px){
    width: 100%;
    height: 100%;
    align-items: center;
    input{
      width: 100%
    }
  }
`;

const FormInput = styled(InputMask)`
  height: 46px;
  padding: 5px;
  transition: all .4s;
  background-color: #1B1F1C;
  color: #FFF;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  border-bottom: none;
  border-left: none;
  border-right: 1px solid #FFF;
  border-top: 1px solid #FFF;
  &:focus{
    outline: none;
    background: rgba(255, 255, 255, 0.20);
    border-color: #00EC5B;
  }
  &:hover{
    background: rgba(255, 255, 255, 0.20);
  }

  @media(max-width: 768px){
    width: 100%;
    height: 46px;
    flex-shrink: 0;
  }
`;

export const FormCell = styled.div`
  display: flex;
  justify-content: center;
  width: 90%;
  flex-direction: column;
  @media(max-width: 768px){
    align-items: center;
  }
`;

export const InputName = styled(FormInput)`
  width: 555px;
`;

export const ContactInfo = styled.div`
  display: flex;
  justify-content: space-between;
  @media(max-width: 768px){
    flex-direction: column;
    gap: 15px;
    width: 100%;
    align-items: center;
  }
`;

export const InputCellphone = styled(FormInput)`
  width: 160px;
`;

export const InputEmail = styled(FormInput)`
  width: 360px;
`;

export const InputSubject= styled.select`
  width: 553px;
  height: 46px;
  transition: all .4s;
  background-color: #1B1F1C;
  color: #FFF;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  border-bottom: none;
  border-left: none;
  border-right: 1px solid #FFF;
  border-top: 1px solid #FFF;
  &:focus{
    outline: none;
    background: rgba(255, 255, 255, 0.20);
    border-color: #00EC5B;
  }
  &:hover{
    background: rgba(255, 255, 255, 0.20);
  }
  @media(max-width: 768px){
    width: 100%;
  }
`;

export const SubjectOption = styled.option`
  background-color: #1B1F1C;
  color: #FFF;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  border-bottom: none;
  border-left: none;
  border-right: 1px solid #FFF;
  border-top: 1px solid #FFF;
`;

export const InputMessage= styled.textarea`
  padding: 10px;
  width: 553px;
  height: 131px;
  resize: none;
  background-color: #1B1F1C;
  border-bottom: none;
  border-left: none;
  border-right: 1px solid #FFF;
  border-top: 1px solid #FFF;
  transition: all .4s;
  color: #FFF;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  &:focus{
    background: rgba(255, 255, 255, 0.20);
    outline: none;
    border-color: #00EC5B;
  }

  &:hover{
    background: rgba(255, 255, 255, 0.20);
  }
  @media(max-width: 768px){
    width: 100%;
  }
`;

export const InputLabel = styled.label`
    align-self: self-start;
    color: ${({focused})=> focused ? '#00EC5B': '#FFF'};
    font-family: Roboto;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    height: 20px;
    transition: color 0.3s;
    opacity:${({focused})=> focused ? 1 : 0.296};
`;
export const SubmitButton = styled.button`
  color: #101213;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  min-height: 56px;
  border: none;
  border-radius: 30px;
  background-color: #00EC5B;
  align-self: flex-end;
  cursor: pointer;
  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: 0px 4px 10px rgba(0, 236, 91, 0.5);
  }

  @media(max-width: 768px){
    width: 90%;
    align-self: center;
  }
`;
