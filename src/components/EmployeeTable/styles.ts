import styled from 'styled-components';

const colors = {
  bluePrimary: '#0500FF',
  black: '#1C1C1C',
  white: '#FFFFFF',
  gray20: '#E9E9E9'
};

export const Container = styled.div`
  width: 960px;
  margin: 32px auto 20px;
  min-height: 100vh;

  @media (max-width: 768px) {
    width: auto;
    padding: 0 20px;
    margin-top: 24px;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }
`;

export const Title = styled.h1`
  font-family: "Helvetica Neue", sans-serif;
  font-weight: 500;
  font-size: 20px;
  line-height: 24.42px;
  color: ${colors.black};
`;

export const SearchContainer = styled.div`
  position: relative;
  width: 335px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 40px;
  padding: 0 40px 0 16px;
  border: 1px solid ${colors.gray20};
  border-radius: 8px;
  font-size: 16px;
  color: ${colors.black};
  background: ${colors.white};

  &::placeholder {
    color: ${colors.gray20};
  }
`;

export const SearchIcon = styled.div`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: ${colors.gray20};
`;

export const Table = styled.div`
  width: 100%;
  height: auto;
  background: ${colors.white};
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    background: transparent;
    box-shadow: none;
  }
`;

export const TableHeader = styled.div`
  display: grid;
  grid-template-columns: 60px 220px 160px 160px 160px;
  gap: 40px;
  padding: 0 20px;
  height: 49px;
  align-items: center;
  background: ${colors.bluePrimary};
  color: ${colors.white};
  font-family: "Helvetica Neue", sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 19.54px;
  text-transform: uppercase;

  > div:first-child {
    margin-right: 79px;
  }

  @media (max-width: 768px) {
    display: flex;
    padding: 0 14px;
    position: relative;
    gap: 16px;
    align-items: center;
    
    > div:nth-child(n+3) {
      display: none;
    }

    > div:first-child {
      margin-right: 24px;
    }

    &::after {
      content: '';
      position: absolute;
      right: 22px;
      top: 50%;
      transform: translateY(-50%);
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: ${colors.white};
    }
  }
`;

export const TableRow = styled.div`
  display: grid;
  grid-template-columns: 60px 220px 160px 160px 160px;
  gap: 40px;
  padding: 0 20px;
  height: 49px;
  align-items: center;
  border-bottom: 1px solid ${colors.gray20};
  background: ${colors.white};

  > div:first-child {
    margin-right: 79px;
  }
`;

export const MainInfo = styled.div`
  display: contents;

  @media (max-width: 768px) {
    > div:nth-child(3),
    > div:nth-child(4),
    > div:nth-child(5) {
      display: none;
    }
  }
`;

export const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;

export const EmployeeName = styled.span`
  font-weight: 500;
  color: ${colors.black};
`;

export const ExpandIcon = styled.span<{ expanded: boolean }>`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    color: ${colors.bluePrimary};
    transform: ${props => props.expanded ? 'rotate(180deg)' : 'rotate(0)'};
    transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);

    svg {
      width: 20px;
      height: 20px;
    }
  }
`;

export const DropdownContent = styled.div<{ expanded: boolean }>`
  display: none;

  @media (max-width: 768px) {
    display: block;
    max-height: ${props => props.expanded ? '500px' : '0'};
    visibility: ${props => props.expanded ? 'visible' : 'hidden'};
    opacity: ${props => props.expanded ? '1' : '0'};
    overflow: hidden;
    background: ${colors.white};
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    width: 100%;
    padding: ${props => props.expanded ? '0 20px 16px' : '0 20px'};
  }
`;

export const InfoGrid = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 0;
  gap: 15px;
`;

export const InfoItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding-bottom: 4px;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    border-bottom: 1px dotted ${colors.gray20};
  }
`;

export const Label = styled.span`
  font-family: "Helvetica Neue", sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 19.54px;
  letter-spacing: 0;
  color: ${colors.black};
`;

export const Value = styled.span`
  font-family: "Helvetica Neue", sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 19.09px;
  letter-spacing: 0;
  text-align: right;
  color: ${colors.black};
`;

export const InfoContent = styled.div`
  display: flex;
  align-items: center;
`;