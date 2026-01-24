import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BlogsProvider, CaseStudiesProvider, SeriveProvider } from "@/Context";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SeriveProvider>
      <CaseStudiesProvider>
        <BlogsProvider>
          <App />
        </BlogsProvider>
      </CaseStudiesProvider>
    </SeriveProvider>
  </StrictMode>,
);
