import {
  InDevelop,
  Container,
  ContentBox,
  Content,
  H1,
  LinkHome,
} from "./in_develop.styles";

export const In_Develop: React.FC = () => {
  return (
    <InDevelop>
      <Container>
        <Content>
          <H1>
            Страница, которую вы пытаетесь открыть в разработке.
            <br />
            Приносим свои извинения за временные неудобства.
          </H1>
        </Content>
        <ContentBox>
          <LinkHome to="/">Вернуться на главную</LinkHome>
        </ContentBox>
      </Container>
    </InDevelop>
  );
};
