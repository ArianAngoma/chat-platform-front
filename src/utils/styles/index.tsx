import styled from 'styled-components';

export const InputField = styled.input`
  font-family: 'Roboto', sans-serif;
  outline: none;
  border: none;
  background-color: inherit;
  color: #fff;
  font-size: 18px;
  width: 100%;
  box-sizing: border-box;
  padding: 0;
  margin: 4px 0;
`;

export const InputContainer = styled.div`
  background-color: #131313;
  padding: 12px 16px;
  border-radius: 10px;
  width: 100%;
  box-sizing: border-box;
`;

export const InputLabel = styled.label`
  display: block;
  color: #8f8f8f;
  font-size: 14px;
  margin: 4px 0;
`;

export const Button = styled.button`
  width: 100%;
  outline: none;
  border: none;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  background-color: #2b09ff;
  color: #fff;
  border-radius: 10px;
  padding: 25px 0;
  font-weight: 500;
  transition:
    250ms background-color ease,
    250ms outline ease;
  box-sizing: border-box;

  &:focus {
    border-color: #3f20fd;
    outline: 1px solid #fff;
  }

  &:hover {
    background-color: #3f20fd;
    outline: 1px solid #fff;
    cursor: pointer;
  }

  &:active {
    background-color: #4e33f8;
  }
`;

export const PageContainer = styled.div`
  background-color: #1a1a1a;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
