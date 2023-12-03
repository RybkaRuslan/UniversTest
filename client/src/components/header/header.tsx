import { StyledHeader, Logo, Title, LoginButton } from "./header.styles";

export const Header: React.FC = () => {
  return (
    <StyledHeader>
      <Logo></Logo>
      <Title>Выбери свой путь</Title>
      <LoginButton variant="contained" color="primary">
        Войти
      </LoginButton>
    </StyledHeader>
  );
};
