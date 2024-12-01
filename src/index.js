import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Create from "./Components/Create";
import CreateUser from "./Components/CreateUser";
import Update from "./Components/Update";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/create",
    element: <Create />,
  },
  {
    path: "/createuser",
    element: <CreateUser />,
  },
  {
    path: "/update/:id",
    element: <Update />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
