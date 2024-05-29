import React from "react";
// Import the auth hook
import { useAuth } from "../../../Context/AuthContext";
// Import the Login component
import LoginForm from "../../components/LoginForm/LoginForm";
import UnAuthorized from "../../pages/Unauthorized";

function Employees() {
  // Destructure the auth hook
  const { isLogged, isAdmin } = useAuth();

  if (isLogged) {
    if (isAdmin) {
      return (
        <div>
          <h1>Employees Page</h1>
        </div>
      );
    } else {
      return (
        <div>
          <UnAuthorized />
        </div>
      );
    }
  } else {
    return (
      <div>
        <LoginForm />
      </div>
    );
  }
}

export default Employees;
