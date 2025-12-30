import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BlogsProvider, CaseStudiesProvider } from "@/Context";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CaseStudiesProvider>
      <BlogsProvider>
        <App />
      </BlogsProvider>
    </CaseStudiesProvider>
  </StrictMode>
);
