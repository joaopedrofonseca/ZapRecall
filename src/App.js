import GlobalStyle from "./GlobalStyle";
import styled from "styled-components";
import Logo from "./components/Logo";
import Site from "./components/Site";


export default function App() {
  return (
    <Container>
      <GlobalStyle />
      <Logo />
      <Site/>
    </Container>
  );
}

const Container = styled.div`
  background-color: #FB6B6B;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px;
  padding: 0px;
  padding-bottom: 200px;
`
