import React from "react";
// import Header from "./components/layout/header.js";
// import Registration from "./components/Auth/registration.js";
// import Login from "./components/Auth/login.js";
// import UserDashboard from "./components/Pages/userdashboard.js";
import Admindashboard from "./components/Pages/Admindashboard.js";
function App() {
  //   const [isRegistered, setIsRegistered] = useState(false);
  //   const [isLoggedIn, setIsLoggedIn] = useState(false);
  //   const [userRole, setUserRole] = useState("user");

  //   const handleRegistrationSuccess = () => {
  //     setIsRegistered(true);
  //   };

  //   const handleLogin = (role) => {
  //     setIsLoggedIn(true);
  //     setUserRole(role);
  //   };

  return (
    <div className="App">
      {/* <Header isLoggedIn={isLoggedIn} />
      {!isRegistered ? (
        <Registration onRegistrationSuccess={handleRegistrationSuccess} />
      ) : isLoggedIn ? (
        userRole === "admin" ? (
          <Admindashboard />
        ) : (
          <UserDashboard />
        )
      ) : (
        <Login onLogin={handleLogin} />
      )} */}
      <Admindashboard />
    </div>
  );
}

export default App;
