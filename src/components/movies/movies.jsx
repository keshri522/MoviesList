import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./movies.css";
import { useSelector } from "react-redux";
const Movies = () => {
  const [movies, Setmovies] = useState([]);

  // using useeffect
  const SearchData = useSelector((state) => state.search);

  const handleclick = () => {
    <Link to="/"></Link>;
  };
  const Getmoveis = () => {
    axios
      .get(
        "https://api.themoviedb.org/3/discover/movie?api_key=d75e0cd78e3a6733a0540dd3959c7572"
      )
      .then((res) => {
        if (res.status === 200) {
          Setmovies(res.data.results);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    if (SearchData.length === 0) {
      Getmoveis();
    }
  }, [SearchData]);

  useEffect(() => {
    if (SearchData.length > 0) {
      axios
        .get(
          `https://api.themoviedb.org/3/search/movie?api_key=d75e0cd78e3a6733a0540dd3959c7572&query=${SearchData}`
        )
        .then((res) => {
          Setmovies(res.data.results);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [SearchData]);

  return (
    <div className="parent">
      {movies?.map((movie) => (
        <div className="child" key={movie.id}>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt=""
          />
        </div>
      ))}
    </div>
  );
};

export default Movies;
