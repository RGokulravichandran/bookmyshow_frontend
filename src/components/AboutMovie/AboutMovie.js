import React, { useEffect, useState } from "react";
import "./styles.css";
import { API_URL } from "../../Global";
import { Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import { useNavigate } from "react-router-dom";

const AboutMovie = ({ id }) => {
  const [movie, setmovie] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`${API_URL}/${id}`)
          .then((res) => res.json())
          .then((data) => setmovie(data));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  if (movie == null) {
    return <h1>Loading....</h1>;
  } else {
    const bgPosterDiv = {
      backgroundImage: `linear-gradient(90deg, rgb(26, 26, 26) 24.97%, rgb(26, 26, 26) 38.3%,rgba(26, 26, 26, 0.04) 97.47%,rgb(26, 26, 26) 100%), url(${movie.bgposter})`,
    };
    return (
      <div className="AboutMovie">
        <div className="bg">
          <div className="bgPosterDiv" style={bgPosterDiv}>
            <div className="BannerContainer">
              <div className="PosterDiv">
                <div className="Poster2">
                  <img src={movie.poster2} />
                </div>
                <div className="PosterContant">
                  <Typography>In cinemas</Typography>
                </div>
              </div>
              <div className="movieContant">
                <Typography>{movie.name}</Typography>
                <Typography>
                  <StarIcon sx={{ color: "red" }} />
                  {movie.rating}/10 {movie.votes} votes
                </Typography>
                <div className="addRating">
                  <div className="ratingcomp">
                    <div className="ratingTitle">
                      <Typography>Add your rating & review</Typography>
                    </div>
                    <div className="ratingSubTitle">
                      <Typography>your ratings matters</Typography>
                    </div>
                  </div>
                  <div className="ratingButton">
                    <Typography>Rate Now</Typography>
                  </div>
                </div>
                <div className="screenAndLanguage">
                  <div className="screens">{movie.screen}</div>
                  <div className="language">{movie.languages}</div>
                </div>
                <div className="durationGenresCertificateDate">
                  <Typography>
                    {movie.duration}
                    <span className="Dot"> • </span>
                  </Typography>
                  <Typography>{movie.genres}</Typography>
                  <span className="Dot"> • </span>
                  <Typography>{movie.certificate}</Typography>
                  <span className="Dot"> • </span>
                  <Typography>
                    {movie.releaseDate},{movie.releaseYear}
                  </Typography>
                </div>
                <div className="BookTicketButtonDiv">
                  <div
                    className="BookTicketButton"
                    onClick={() =>
                      navigate(`/buytickets/${movie.name}/location/${movie.id}`)
                    }
                  >
                    <span className="BookTicketSpan">Book tickets</span>
                  </div>
                </div>
              </div>
              <div className="share">
                <div className="shareDiv">
                  <div className="shareDiv2">
                    <div className="shareLogo">
                      <ShareOutlinedIcon />
                    </div>
                    <div className="shareLetter">Share</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="aboutMovie">
          <Typography>About The Movie</Typography>
          <Typography>{movie.about}</Typography>
        </div>
      </div>
    );
  }
};

export default AboutMovie;
