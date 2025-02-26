import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;
  height: 60px;
  background: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
`;

export const Nav = styled.nav`
  width: 960px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 0 20px;
  }
`;

export const Logo = styled.img`
  height: auto;
  width: auto;
`;

export const MenuItems = styled.ul`
  display: flex;
  gap: 32px;
  list-style: none;
  margin-left: auto;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const MenuItem = styled.li`
  a {
    color: #333;
    text-decoration: none;
    font-size: 14px;
    font-weight: 500;
    transition: color 0.2s;

    &:hover {
      color: ${props => props.theme.colors.primary};
    }
  }
`;

export const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: #333;
  font-size: 24px;
  cursor: pointer;
  margin-left: auto;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const MobileMenu = styled.div<{ isOpen: boolean }>`
  display: none;

  @media (max-width: 768px) {
    display: ${props => props.isOpen ? 'block' : 'none'};
    position: fixed;
    top: 60px;
    left: 0;
    right: 0;
    background: white;
    padding: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    ${MenuItems} {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;
    }
  }
`; 