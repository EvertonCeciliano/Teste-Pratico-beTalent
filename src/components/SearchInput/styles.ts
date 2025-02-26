import styled from 'styled-components';

const colors = {
  gray20: '#E9E9E9',
  black: '#1C1C1C',
  white: '#FFFFFF'
};

export const Container = styled.div`
  position: relative;
  width: 335px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 100%;
  padding: 12px 16px;
  border: 1px solid ${colors.gray20};
  border-radius: 8px;
  font-family: "Helvetica Neue", sans-serif;
  font-size: 16px;
  line-height: 24px;
  color: ${colors.black};
  background: ${colors.white};

  &::placeholder {
    color: ${colors.gray20};
  }
`;

export const IconContainer = styled.div`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: ${colors.gray20};
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  height: 24px;
`;
