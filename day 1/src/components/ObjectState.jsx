import React, { useState } from "react";

const ObjectState = () => {
  const [movies, setMovies] = useState([
    { id: 1, title: "Spider Man", ratings: 3 },
    { id: 2, title: "Superman", ratings: 6 },
  ]);

  const handleClick = () => {
    setMovies(
      movies.map((m) => (m.id == 1 ? { ...m, title: "John Wick 5" } : m))
    );
  };


  console.log(movies);
  return (
    <>
      {movies.map((m) => (
        <>
          <h1>
            Title : {m.title} , Rating : {m.ratings}
          </h1>
        </>
      ))}

      <button type="button" onClick={handleClick}>
        click here
      </button>
    </>
  );
};

export default ObjectState;
