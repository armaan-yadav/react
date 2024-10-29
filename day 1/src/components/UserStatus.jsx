import React from "react";

const UserStatus = ({ isLoggedIn, isAdmin }) => {
  if (!isLoggedIn) {
    return <h1>Not Logged in</h1>;
  }
  return isAdmin ? <h1>Hello Admin</h1> : <h1>Hello User</h1>;
};

export default UserStatus;
