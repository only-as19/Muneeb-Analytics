import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BlogsProvider } from "@/Context";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BlogsProvider>
      <App />
    </BlogsProvider>
  </StrictMode>
);
