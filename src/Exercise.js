import React, { useState, useEffect } from "react";
import axios from "axios";

const Exercise = () => {
  const [exercises, setExercises] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: "GET",
        url: "https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises",
        params: { muscle: "biceps" },
        headers: {
          "X-RapidAPI-Key":
            "59bc7b4248msh5c8d1a6fc497d3ap13dca1jsn0658bd38bf33",
          "X-RapidAPI-Host": "exercises-by-api-ninjas.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        setExercises(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="exercise-page">
      <h2>Exercise Page</h2>
      <ul>
        {exercises.map((exercise) => (
          <li key={exercise.id}>{exercise.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Exercise;
