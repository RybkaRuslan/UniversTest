import { Container404, ContentBox404, FourZeroFourBg, H1, H3, LinkHome, Page404 } from "./page_404.styles";

export const Page_404: React.FC = () => {
  return (
    <Page404>
      <Container404>
        <FourZeroFourBg>
          <H1>404</H1>
        </FourZeroFourBg>
        <ContentBox404>
          <H3>
            Похоже, вы потерялись...
            <br />
            Страница, которую вы пытаетесь открыть недоступна или удалена.
          </H3>
          <LinkHome to="/">Вернуться на главную</LinkHome>
        </ContentBox404>
      </Container404>
    </Page404>
  );
};


