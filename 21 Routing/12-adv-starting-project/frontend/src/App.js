import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HoomePage from "./Pages/Home";
import Event, { loader as loadPage } from "./Pages/Events";
import EditEvent from "./Pages/EditEvent";
import EventDetail, {
  loader as eventDetailLoader,
  action as deleteEventAction,
} from "./Pages/EventDetail";
import NewEvent from "./Pages/NewEventPage";
import RootLayout from "./Pages/Root";
import EventRoot from "./Pages/eventsRoot";
import ErrorPage from "./Pages/Error";
import { action as manipulateEventAction } from "./components/EventForm";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HoomePage /> },
      {
        path: "events",
        element: <EventRoot />,
        children: [
          {
            index: true,
            element: <Event />,
            loader: loadPage,
          },
          {
            path: ":eventId",
            id: "event-detail",
            loader: eventDetailLoader,

            children: [
              {
                index: true,
                element: <EventDetail />,
                action: deleteEventAction,
              },
              {
                path: "edit",
                element: <EditEvent />,
                action: manipulateEventAction,
              },
            ],
          },

          { path: "new", element: <NewEvent />, action: manipulateEventAction },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
