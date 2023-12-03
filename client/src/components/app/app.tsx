import "./App.css";
import { Container } from "@mui/material";
import Router from "@/router/router.tsx";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";


const App: React.FC = () => {
  return (
    <Container>
      <Header />
      <Container className="layout__content--custom">
        <Router />
      </Container>
      <Footer />
    </Container>
  );
};

export default App;
