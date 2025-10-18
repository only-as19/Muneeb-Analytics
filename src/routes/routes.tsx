import { RootLayout, ProjectsLayout } from "@/layouts";
import { Landing, Contact, Projects, CaseStudy, Error } from "@/pages";
import ServiceDetail from "@/pages/Landing/Service Details/page";
import type { RouteObject } from "react-router-dom";

const contactRoute: RouteObject[] = [
  {
    path: "contact",
    element: <RootLayout />,
    children: [
      { index: true, element: <Contact /> },
    ],
  },
];

// ✅ Minimal change: wrap caseStudy with a parent that has only errorElement
const ProjectsRoute: RouteObject[] = [
  {
    path: "caseStudy",
    errorElement: <Error />,              // catches errors and shows full-screen
    children: [
      {
        element: <ProjectsLayout />,      // layout renders only when no error
        children: [
          { index: true, element: <Projects /> }// ✅ FIX: was "caseStudy:caseId"
        ],
      },
    ],
  },
];

const routes: RouteObject[] = [
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      { path: "*", element: <Error /> },
      { path: "/", element: <Landing /> },
      { path: "/:serviceId", element: <ServiceDetail /> },
    ],
  },
  ...contactRoute,
  ...ProjectsRoute,
];

export default routes;
