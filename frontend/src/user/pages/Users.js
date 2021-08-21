import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "id-1",
      name: "New User",
      image: "https://image.flaticon.com/icons/png/512/149/149071.png",
      places: 3,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;

