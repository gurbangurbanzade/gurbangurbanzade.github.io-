import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import Projects from "./Pages/Projects/index.jsx";
import Contact from "./Pages/Contact/index.jsx";
import Blog from "./Pages/Blog/index.jsx";
import About from "./Pages/About/index.jsx";
import Admin from "./Pages/Admin/index.jsx";
import Nopage from "./Pages/Nopage/index.jsx";
import Manager from "./components/Manager/index.jsx";
import ProjectsPage from "./components/ProjectsPage/index.jsx";
import Riddle from "./Pages/Riddle/index.jsx";
import Career from "./Pages/Career/index.jsx";
import "./index.css";
import SendReview from "./Pages/sendReview/index.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/career",
    element: <Career />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "/projects-page",
    element: <ProjectsPage />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/riddle",
    element: <Riddle />,
  },
  {
    path: "/review",
    element: <SendReview />,
  },
  {
    path: "/admin",
    element: <Admin />,
    children: [
      {
        path: "/admin/manager",
        element: <Manager />,
      },
    ],
  },
  {
    path: "*",
    element: <Nopage />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
);
