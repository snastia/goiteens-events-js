import { EventItem } from "components/EventItem/EventItem"
// import eArray from "../events.json"
import { CiAlarmOn } from "react-icons/ci";
import { AiFillCalendar } from "react-icons/ai";
import { FaPerson } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";
import { List } from "./EventList.styled"

export function EvenList({events}){
  return(
    <List>
      {events.map((event) => {
        return <EventItem 
        iconLocation={CiLocationOn}
        iconPerson={FaPerson}
        iconCalendar={AiFillCalendar}
        iconTime={CiAlarmOn}
        name={event.name} 
        location={event.location} 
        speaker={event.speaker} 
        type={event.type} 
        time={event.time}
        />
      })}
    </List>
  )
}