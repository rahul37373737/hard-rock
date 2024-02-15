// import React, { useState } from "react";
// import Header from "./components/layout/header.js";
// import Registration from "./components/Auth/registration.js";
// import Login from "./components/Auth/login.js";
// import Registration from "./components/Auth/registration.js";
// import UserDashboard from "./components/Pages/userdashboard.js";
import AdminDashboard from "./components/Pages/Admindashboard.js";
import Cart from "./components/Cart.js";
// import Cart from "./components/Cart";
// import UserHeader from "./components/Pages/UserHeader";
function App() {
  // const [isRegistered, setIsRegistered] = useState(false);
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [isAdmin, setIsAdmin] = useState(false);

  // const handleRegistrationSuccess = () => {
  //   setIsRegistered(true);
  // };

  // const handleLogin = (role) => {
  //   setIsLoggedIn(true);
  //   setIsAdmin(role);
  // };

  return (
    <div className="App">
      {/* <Header isLoggedIn={isLoggedIn} />
      {!isRegistered ? (
        <Registration onRegistrationSuccess={handleRegistrationSuccess} />
      ) : !isLoggedIn ? (
        <Login onLogin={handleLogin} />
      ) : isAdmin ? (
        <AdminDashboard />
      ) : (
        <UserDashboard />
      )} */}
      {/* <AdminDashboard /> */}
      <Cart />
    </div>
  );
}

export default App;
