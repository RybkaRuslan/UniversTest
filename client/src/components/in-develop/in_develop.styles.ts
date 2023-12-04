import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const InDevelop = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Container = styled.div`
  text-align: center;
`;

export const Content = styled.div`
  background-color: #0b3963;
  color: #fff;
  padding: 20px;
  border-radius: 8px;
`;

export const H1 = styled.h1`
  margin: 0;
  font-size: 80px;
`;

export const ContentBox = styled.div`
  margin-top: 20px;
`;


export const LinkHome = styled(Link)`
  color: #0b3963;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;