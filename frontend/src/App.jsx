import {
  SignedIn,
  SignInButton,
  SignOutButton,
  SignedOut,
  UserButton,
  useUser,
} from "@clerk/clerk-react";

import { Routes, Route, Navigate } from "react-router";

import HomePage from "./pages/HomePage";
import ProblmesPage from "./pages/ProblmesPage";
import { Toaster } from "react-hot-toast";

function App() {
  const { isSignedIn } = useUser();



 

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        
        <Route
          path="/problems"
          element={isSignedIn ? <ProblmesPage /> : <Navigate to={"/"} />}
        />
      </Routes>
      <Toaster toastOptions={{duration:3000}}/>
    </>
  );
}

export default App;
