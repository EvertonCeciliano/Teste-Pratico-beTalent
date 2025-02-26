import { HeaderContainer, Nav, Logo } from './styles';

const Header = () => {
  return (
    <HeaderContainer>
      <Nav>
        <a href="https://betalent.tech/" target="_blank" rel="noopener noreferrer">
          <Logo src="/BeTalent.svg" alt="BeTalent" />
        </a>
      </Nav>
    </HeaderContainer>
  );
};

export default Header; 