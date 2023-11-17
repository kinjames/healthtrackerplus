import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./Exercise.css";
import axios from "axios";
import { Await } from "react-router-dom";

const Exercise = () => {
  const API_URL = "http://exercisedb.p.rapidapi.com/exercises/exercise"; // Base URL without parameters

  const searchExercise = async (name) => {
    try {
      const response = await axios.get(API_URL, {
        params: {
          s: name, // Assuming 'name' is the search parameter
        },
        headers: {
          "x-rapidapi-key":
            "59bc7b4248msh5c8d1a6fc497d3ap13dca1jsn0658bd38bf33",
          "x-rapidapi-host": "exercisedb.p.rapidapi.com",
        },
      });
      console.log(response.data);
      // Handle the response data here
    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle error cases
    }
  };

  // const [exercises, setExercises] = useState([]);
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    searchExercise("air bike");
  }, []);

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  return (
    <div className="exercise-page">
      <div className="exercise">
        <h1>Exercise Page</h1>
      </div>
      <div className="search">
        <input
          type="text"
          placeholder="Search for Exercises"
          value="Push Up"
          onChange={() => {}}
        />

        <FontAwesomeIcon icon={faMagnifyingGlass} className="icons" />
      </div>
      {/* <ul>
        {exercises.map((exercise) => (
          <li key={exercise.id}>{exercise.name}</li>
        ))}
      </ul> */}
    </div>
  );
};

export default Exercise;
