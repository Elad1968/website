import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import App from "@/components/App.tsx";
import "@/index.css";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <App />
    </StrictMode>
);
