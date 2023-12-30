import { EvenList } from "./EventList/EventList";
import { Container } from "./Container/Container";
import { Title } from "./Title/Title";
import eventsData from "../events.json";

export const App = () => {
  return (
    <Container>
      <Title/>
      <EvenList events={eventsData}/>
    </Container>
  );
};
