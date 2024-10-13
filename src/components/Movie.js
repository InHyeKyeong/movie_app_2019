import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Movie.css";

// state를 사용하지 않을 때는 class component가 될 필요가 없다.
function Movie({ year, title, summary, poster, genres }) {
  return (
    <Link
      to={{
        pathname: "/movie-detail",
        state: {
          year,
          title,
          summary,
          poster,
          genres,
        },
      }}
    >
      <div class="movie">
        <div class="movie__img">
          <img src={poster} alt={title} title={title} />
        </div>
        <div class="movie__data">
          <h3 class="movie__title">{title}</h3>
          <h5 class="movie__year">{year}</h5>
          <p class="movie_summary">
            {summary.length > 310 ? summary.slice(0, 310) + "..." : summary}
          </p>

          <hr />
          <div class="movie__review">
            <div class="circle">
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div class="movie__comment">
              이 영화 정말 재미있어요 앞으로도 좋은 영화 부탁드려요.
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

Movie.prototype = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
