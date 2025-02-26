import { SmileyXEyes } from "@phosphor-icons/react";
import { Container, Icon, Message } from './styles';

export const EmptyState = () => (
  <Container>
    <Icon>
      <SmileyXEyes weight="fill" />
    </Icon>
    <Message>
      Nenhum funcionário encontrado com este termo
    </Message>
  </Container>
); 