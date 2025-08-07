import EventNavigation from "../components/EventsNavigation";
import { Outlet } from "react-router-dom";
function EventRoot() {
  return (
    <>
      <EventNavigation></EventNavigation>
      <Outlet></Outlet>
    </>
  );
}

export default EventRoot;
