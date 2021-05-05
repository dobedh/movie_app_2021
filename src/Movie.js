import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({ title, year, summary, poster, genres }) {
  return (
    <div className="movies">
      <img src={poster} alt={title} title={title}></img>
      <div className="Movies__date">
        <h4>{title}</h4>
        <h6>{year}</h6>
        <ul>
          {genres.map((gerne, index) => {
            return <li key={index}>{gerne}</li>;
          })}
        </ul>
        <p>{summary}</p>
      </div>
    </div>
  );
}

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
