import { firebaseConfig } from "@/config/firebase.ts";
import React from "react";
import ReactDOM from "react-dom/client";
import { FirebaseAppProvider } from "reactfire";
import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <App />
    </FirebaseAppProvider>
  </React.StrictMode>
);
