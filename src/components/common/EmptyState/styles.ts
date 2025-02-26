import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
  border-radius: 8px;
`;

export const Icon = styled.div`
  color: #808080;
  margin-bottom: 16px;

  svg {
    width: 32px;
    height: 32px;
  }
`;

export const Message = styled.p`
  font-family: "Helvetica Neue", sans-serif;
  font-size: 16px;
  font-weight: 500;
  color: #808080;
  text-align: center;
`; 