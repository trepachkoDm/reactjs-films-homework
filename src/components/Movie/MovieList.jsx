/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/prop-types */
import React from 'react';
import styles from './Movie.scss';
import Poster from '../../assets/images/poster.jpg';

const DEFAULT_PLACEHOLDER_IMAGE = Poster;

const MovieList = ({ movie }) => {
  const poster = movie.poster_path === 'N/A' ? DEFAULT_PLACEHOLDER_IMAGE : `https://image.tmdb.org/t/p/w342${movie.poster_path}`;
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <img
          className={styles.poster}
          src={poster}
        />

        <div className={styles.info}>
          <h3 className={styles.info_title}>{movie.title}</h3>
          <p className={styles.info_rating}>{movie.vote_average}</p>
          <p className={styles.info_genres}>{movie.release_date}</p>

        </div>
      </div>
    </div>
  );
};

export default MovieList;
