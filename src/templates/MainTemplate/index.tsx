import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Logo from "../../components/Logo";
import Menu from "../../components/Menu";

type MainTemplateProps = {
  children: React.ReactNode;
};

function MainTemplate({ children }: MainTemplateProps) {
  return (
    <>
      <Container>
        <Logo />
      </Container>
      <Container>
        <Menu />
      </Container>
      {children}
      <Container>
        <Footer />
      </Container>
    </>
  );
}

export default MainTemplate;
