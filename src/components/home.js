import React from "react";

const Home = ({ user }) => {
  return (
    <div>
      <h2>Welcome, {user.username}!</h2>
    </div>
  );
};

export default Home;
