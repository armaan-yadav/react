import React, { useState } from "react";
import { CiEdit } from "react-icons/ci";

const ArrayCounter = () => {
  const [friends, setFriends] = useState(["raj", "armaan", "akshat"]);
  const [name, setName] = useState("");

  const [selectedName, setSelectedName] = useState("");

  const addFriend = (name) => {
    if (name.trim() && !friends.includes(name)) {
      setFriends([...friends, name]);
      setName("");
    }
  };

  const removeFriend = (name) => {
    setFriends(friends.filter((f) => f !== name));
    setName("");
  };

  const editFriend = (oldName, newName) => {
    setFriends(friends.map((f) => (f === oldName ? newName : f)));
  };

  return (
    <>
      {friends.map((name) => (
        <>
          <h1
            key={name}
            style={selectedName == name ? { color: "red" } : { color: "black" }}
          >
            {name}
          </h1>
          <CiEdit
            onClick={() =>
              selectedName == name ? setSelectedName("") : setSelectedName(name)
            }
          />
        </>
      ))}

      <form
        onSubmit={(e) => {
          e.preventDefault();
          addFriend(name);
        }}
      >
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Add</button>
        <button type="button" onClick={() => removeFriend(name)}>
          Remove
        </button>

        {selectedName !== "" && (
          <button
            type="button"
            onClick={() => {
              editFriend(selectedName, name);
              setName("");
            }}
          >
            edit
          </button>
        )}
      </form>
    </>
  );
};

export default ArrayCounter;
