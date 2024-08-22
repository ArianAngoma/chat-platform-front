import styled from 'styled-components';

import { PageContainerProps } from './styleTypes.ts';

export const SIDEBAR_WIDTH = 400;

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

export const PageContainer = styled.div<PageContainerProps>`
  background-color: #1a1a1a;
  height: 100%;
  display: ${({ $display }) => $display};
  justify-content: ${({ $justifyContent }) => $justifyContent};
  align-items: ${({ $alignItems }) => $alignItems};
`;

export const ConversationSidebarStyle = styled.aside`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: ${SIDEBAR_WIDTH}px;
  background-color: #1a1a1a;
  border-right: 1px solid rgba(84, 84, 84, 0.5);
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ConversationSidebarHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 32px;
  box-sizing: border-box;
  background-color: #151515;
  height: 100px;
  border-bottom: 1px solid rgba(84, 84, 84, 0.5);
  position: sticky;
  top: 0;

  & h1 {
    font-weight: 400;
  }
`;

export const ConversationChannelPageStyle = styled.div`
  height: 100%;
  margin-left: ${SIDEBAR_WIDTH}px;
`;

export const ConversationSidebarContainer = styled.div``;

export const ConversationSidebarItem = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 18px 32px;
  border-bottom: 1px solid rgba(84, 84, 84, 0.5);
  background-color: #131313;
`;
