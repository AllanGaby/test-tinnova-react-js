import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #FFFFFF;
  border-radius: 10px;
  padding: 16px;
  width: 100%;
  display: flex;
  align-items: center;
  border: 2px solid #efeeed;
  color: #efeeed;

  ${props =>
    props.isErrored &&
    css`
      border-color: #eb4a46;
      color: #eb4a46;
    `}

  ${props =>
    props.isFocused &&
    css`
      color: #333333;
    `}

  ${props =>
    props.isFilled &&
    css`
      color: #333333;
    `}

  & + div {
    margin-top: 8px;
  }

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #f4ede8;

    &::placeholder {
      color: #666360;
    }
  }

  svg {
    margin-right: 16px;
  }
`;