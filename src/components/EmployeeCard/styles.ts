import styled from 'styled-components';

const colors = {
  bluePrimary: '#0500FF',
  blue10: '#F5F5FF',
  black: '#1C1C1C',
  gray20: '#E9E9E9',
  gray15: '#F1F1F1',
  white: '#FFFFFF',
  grayNeutral: '#808080',
  gray10Neutral: '#F5F5F5',
  gray20Neutral: '#E6E6E6',
  whiteNeutral: '#FFFFFF'
};

export const CardContainer = styled.div<{ expanded: boolean }>`
  width: 100%;
  overflow: hidden;
  transition: height 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  @media (max-width: 768px) {
    width: auto;
    margin-bottom: 1px;
  }
`;

export const TableRow = styled.div<{ expanded?: boolean }>`
  display: grid;
  grid-template-columns: 60px 220px 160px 160px 160px;
  gap: 40px;
  height: 49px;
  padding: 0 20px;
  background: ${colors.white};
  border-bottom: 1px solid ${colors.gray20};
  align-items: center;

  > div:first-child {
    margin-right: 79px;
  }

  @media (max-width: 768px) {
    display: flex;
    width: auto;
    height: 60px;
    padding: 0 14px;
    border: none;
    box-shadow: 0px 1px 2px 0px #00000033;

    > div:nth-child(n+3) {
      display: none;
    }

    > div:first-child {
      margin-right: 10px;
    }
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
  width: 34px;
  height: 34px;
  border-radius: 50%;
  object-fit: cover;
  display: block;
`;

export const EmployeeName = styled.span`
  font-weight: 500;
  color: ${colors.black};

  @media (max-width: 768px) {
    flex: 1;
  }
`;

export const ExpandIcon = styled.span<{ expanded: boolean }>`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    color: ${colors.bluePrimary};
    margin-left: 16px;
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
    padding: ${props => props.expanded ? '16px 14px' : '0 14px'};
  }
`;

export const InfoGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const InfoItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 4px;
  position: relative;

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
  font-weight: 700;
  font-size: 16px;
  line-height: 19.54px;
  color: ${colors.black};
`;

export const Value = styled.span`
  font-family: "Helvetica Neue", sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 19.09px;
  text-align: right;
  color: ${colors.black};
`; 