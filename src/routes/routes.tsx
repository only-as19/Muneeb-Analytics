import { RootLayout, ProjectsLayout } from "@/layouts";
import { Landing, Contact, Projects, CaseStudy, Error, Blogs, BlogDetail } from "@/pages";
import ServiceDetail from "@/pages/Landing/Service Details/page";
import type { RouteObject } from "react-router-dom";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      { path: "*", element: <Error /> },
      { path: "/", element: <Landing /> },
      { path: "/:serviceId", element: <ServiceDetail /> },
      { path: "caseStudy", element: <ProjectsLayout />,
        children:[
          {index:true, element: <Projects /> },
          {
            path: ":caseId", element: <CaseStudy /> 
          }
        ]
       },
       {
        path:"contact",
        element: <Contact/>
       },
       {
        path: "blogs",
        element: <Blogs/>
       },
       {
        path: "blogs/:slug",
        element: <BlogDetail/>
       }
    ],
  },

];

export default routes