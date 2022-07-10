import React from "react";
import Router from "./Router";
import { AuthProvider } from "./components/auth";

function App() {
  return (
    <AuthProvider>
       <Router />
    </AuthProvider>
  );
}

export default App;
