import { Link, useLocation } from "react-router-dom";
import { StyledHeader, Logo, Title, LoginButton } from "./header.styles";

export const Header: React.FC = () => {
  const location = useLocation();

  if (location.pathname === "/login") {
    return (
      <StyledHeader>
        <Link to="/">
          <Logo>
            <img src="/logo.png" alt="Логотип" />
          </Logo>
        </Link>
        <Title>Выбери свой путь</Title>
      </StyledHeader>
    );
  }

  return (
    <StyledHeader>
      <Link to="/">
        <Logo>
          <img src="/logo.png" alt="Логотип" />
        </Logo>
      </Link>
      <Title>Выбери свой путь</Title>
      <Link to="/login">
        <LoginButton variant="contained" color="primary">
          Войти
        </LoginButton>
      </Link>
    </StyledHeader>
  );
};

