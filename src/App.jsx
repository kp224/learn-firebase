import React from "react";
import Home from "./components/Home/home.jsx";
import Landing from "./components/Landing/landing.jsx";
import Passwordforget from "./components/PasswordForget/passwordforget.jsx";
import Signup from "./components/SignUp/signup.jsx";
import Admin from "./components/Admin/admin.jsx";
import Navigation from "./components/Navigation/navigation.jsx";
import Signout from "./components/SignOut/signout.jsx";
import Firebase from "./components/Firebase/firebase.jsx";
import Signin from "./components/SignIn/signin.jsx";
import Account from "./components/Account/account.jsx";
import Passwordchange from "./components/PasswordChange/passwordchange.jsx";
import Session from "./components/Session/session.jsx";
// import "./App.css";

function App() {
  return (
    <>
      <Home />
      <Landing />
      <Passwordforget />
      <Signup />
      <Admin />
      <Navigation />
      <Signout />
      <Firebase />
      <Signin />
      <Account />
      <Passwordchange />
      <Session />
    </>
  );
}

export default App;
