import { styled } from "styled-components";
import Hero from "./components/Hero";
import Who from "./components/Who";
import Works from "./components/Works";
import Contacts from "./components/Contacts";

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

function App() {
  return (
    <Container>
      <Hero />
      <Who />
      <Works />
      <Contacts />
    </Container>
  );
}

export default App;
