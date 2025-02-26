import { WarningCircle } from "@phosphor-icons/react";
import { Container, Icon, Title, Message, RetryButton } from './styles';

interface ErrorStateProps {
  error: string;
  onRetry: () => void;
}

export const ErrorState = ({ error, onRetry }: ErrorStateProps) => (
  <Container>
    <Icon>
      <WarningCircle weight="fill" />
    </Icon>
    <Title>Ops! Algo deu errado</Title>
    <Message>{error}</Message>
    <RetryButton onClick={onRetry}>
      Tentar novamente
    </RetryButton>
  </Container>
); 