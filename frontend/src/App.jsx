import {
  SignedIn,
  SignInButton,
  SignOutButton,
  SignedOut,
  UserButton,
} from "@clerk/clerk-react";
import "./App.css";

function App() {
  return (
    <>
      <h1>Welcome to the app</h1>

      <SignedOut>
        <SignInButton mode="modal" >
          <button>Log In</button>
        </SignInButton>
      </SignedOut>
    
      <SignedIn>
        <SignOutButton />
      </SignedIn>

      <UserButton />
    </>
  );
}

export default App;
