import { RootLayout, ProjectsLayout } from "@/layouts";
import { Landing, Contact, Projects, CaseStudy, Error } from "@/pages";
import ServiceDetail from "@/pages/Landing/Service Details/page";
import type { RouteObject } from "react-router-dom";

const contactRoute: RouteObject[] = [
  {
    path: "contact",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Contact/>
      },
    ],
  },
];

const ProjectsRoute: RouteObject[] = [
  {
    path: "caseStudy",
    element: <ProjectsLayout />,
    children: [
      {
        index: true,
        element: <Projects />,
      },
      {
        path: ":caseId",
        element: <CaseStudy />,
      },
    ],
  },
];

const routes: RouteObject[] = [
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error/>,
    children: [
      {
        path: "/",
        element: <Landing />,
      },
      {
        path: "/:serviceId",
        element: <ServiceDetail />,
      },
    ],
  },
  ...contactRoute,
  ...ProjectsRoute,
];

export default routes;
