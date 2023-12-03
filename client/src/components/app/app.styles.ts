import styled from '@emotion/styled';
import { Box } from '@mui/material';
import { Header } from '@/components/header/header';
import { Footer } from '@/components/footer/footer';

export const StyledContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  min-height: 100vh; 
`;

export const StyledHeader = styled(Header)`
  width: 100%;
`;

export const StyledRouterContainer = styled(Box)`
  flex: 1; 
  width: 100%;
`;

export const StyledFooter = styled(Footer)`
  width: 100%;
`;
