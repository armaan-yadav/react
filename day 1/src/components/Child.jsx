import React from "react";

const Child = ({
  name = "Raj",
  age = 18,
  profile = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmCy16nhIbV3pI1qLYHMJKwbH2458oiC9EmA&s",
  gender = "male",
  children,
}) => {
  return (
    <div>
      <img src={profile} alt="profile" />
      <h1>{name}</h1>
      <h2>{age}</h2>
      <p>{gender}</p>
      {children}
    </div>
  );
};

export default Child;
