import { EvenList } from "./EventList/EventList";
import { Container } from "./Container/Container";
import { Title } from "./Title/Title";
import eventsData from "../events.json";
import { GlobalStyle } from "./GlobalStyle.styled";

export const App = () => {
  return (
    <Container>
      <Title/>
      <EvenList events={eventsData}/>
       <GlobalStyle/>
    </Container>
  );
};
