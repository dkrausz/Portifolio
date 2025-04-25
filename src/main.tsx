import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { PortifolioContextProvider } from "./providers/portifolioContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PortifolioContextProvider>
      <App />
    </PortifolioContextProvider>
  </StrictMode>
);
