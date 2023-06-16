import React, { useEffect, useState } from "react";
import { CardMedia, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../../Global";
import "./styles.css";

const MoviesCards = () => {
  const [MoviesData, setMoviesData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`${API_URL}`)
          .then((response) => response.json())
          .then((data) => setMoviesData(data));
        // setMoviesData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);
  return (
    <div className="MoviesCard">
      <div className="SecondHeading">
        <Typography variant="h6" component="h2">
          Recommended Movies
        </Typography>
      </div>
      <div className="RecommendedMoviesCardDiv">
        {MoviesData.map((data) => (
          <MovieCard data={data} />
        ))}
      </div>
    </div>
  );
};

function MovieCard({ data }) {
  const navigate = useNavigate();
  return (
    <div className="RecommendedMoviesCard">
      <CardMedia
        className="RecommendedMoviesCardImage"
        component="img"
        height="fit"
        image={data.poster}
        alt={data.name}
        onClick={() => navigate(`/location/movies/${data.name}/${data.id}`)}
      />
      <div className="MovieCardNameAndGenres">
        <Typography sx={{ fontWeight: 500 }}>{data.name}</Typography>
        <Typography>{data.genres}</Typography>
      </div>
    </div>
  );
}

export default MoviesCards;
