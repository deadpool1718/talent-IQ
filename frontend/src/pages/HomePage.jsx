import {
  SignedIn,
  SignIn,
  SignInButton,
  SignOutButton,
  UserButton,
} from "@clerk/clerk-react";
import axios from "axios";
import toast from "react-hot-toast";
import axiosInstance from "../lib/axios";

const HomePage = () => {

 
  return (
    <div>
      <button
        className="btn btn-secondary"
        onClick={() => toast.success("This is a success toast.")}
      >
        Click Me
      </button>

      <SignOutButton>
        <SignInButton>
          <button>Log In</button>
        </SignInButton>
      </SignOutButton>

      <SignedIn>
        <SignOutButton />
      </SignedIn>

      <UserButton />
    </div>
  );
};

export default HomePage;
