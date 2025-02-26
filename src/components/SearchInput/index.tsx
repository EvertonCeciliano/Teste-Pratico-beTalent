import { MagnifyingGlass } from "@phosphor-icons/react";
import { Container, Input, IconContainer } from './styles';

interface SearchInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}

export const SearchInput = ({ value, onChange, disabled }: SearchInputProps) => {
  return (
    <Container>
      <Input 
        type="text"
        placeholder="Pesquisar"
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
      <IconContainer>
        <MagnifyingGlass size={20} weight="regular" />
      </IconContainer>
    </Container>
  );
};
