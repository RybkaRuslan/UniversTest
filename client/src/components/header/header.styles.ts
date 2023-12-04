import styled from '@emotion/styled';
import { Box, Button } from '@mui/material';

export const StyledHeader = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100px;
  background-color: #0b3963;
  padding: 0 20px;
`;

export const Logo = styled.div`
  width: 100px;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center center;
    aspect-ratio: 3/4;
    background-color: transparent;
  }
`;

export const Title = styled.div`
  color: white;
  font-size: 24px;
`;

export const LoginButton = styled(Button)`
  
`;

