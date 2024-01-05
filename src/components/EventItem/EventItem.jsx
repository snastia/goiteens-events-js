import { Item } from "./EventItem.styled"

export function EventItem({name, location, 
    iconLocation: CiLocationOn, iconTime: CiAlarmOn, 
    speaker, 
    type, time,
    iconCalendar: AiFillCalendar, iconPerson: FaPerson
   }){
    return (
        <Item>
          <h2>{name}</h2>   
          <p> <CiLocationOn/> {location}</p>
          <p> <FaPerson/> {speaker}</p>
          <p> <AiFillCalendar/> {type}</p>
          <p> <CiAlarmOn/>time</p>
        </Item>
    )
}