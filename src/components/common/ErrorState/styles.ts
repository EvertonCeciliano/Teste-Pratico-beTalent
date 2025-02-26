import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 48px 20px;
  border-radius: 8px;
  text-align: center;
`;

export const Icon = styled.div`
  color: #808080;
  margin-bottom: 24px;

  svg {
    width: 48px;
    height: 48px;
  }
`;

export const Title = styled.h2`
  font-family: "Helvetica Neue", sans-serif;
  font-size: 20px;
  font-weight: 500;
  color: #1C1C1C;
  margin-bottom: 8px;
`;

export const Message = styled.p`
  font-family: "Helvetica Neue", sans-serif;
  font-size: 16px;
  line-height: 1.5;
  color: #808080;
  max-width: 400px;
  margin-bottom: 24px;
`;

export const RetryButton = styled.button`
  background: #0500FF;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 12px 24px;
  font-family: "Helvetica Neue", sans-serif;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #0400D1;
  }

  &:active {
    transform: scale(0.98);
  }
`; 