import {
  StyledContainer,
  StyledHeader,
  StyledRouterContainer,
  StyledFooter,
} from "./app.styles";
import {Router} from "@/router/router.tsx";


export const App: React.FC = () => {
  return (
    <StyledContainer>
      <StyledHeader />
      <StyledRouterContainer>
        <Router />
      </StyledRouterContainer>
      <StyledFooter />
    </StyledContainer>
  );
};

