import {
  StyledContainer,
  StyledHeader,
  StyledRouterContainer,
  StyledFooter,
} from "./app.styles";
import { Router } from "@/router/router.tsx";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <StyledContainer>
        <StyledHeader />
        <StyledRouterContainer>
          <Router />
        </StyledRouterContainer>
        <StyledFooter />
      </StyledContainer>
    </QueryClientProvider>
  );
};

