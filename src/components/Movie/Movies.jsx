/* eslint-disable max-len */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React from 'react';
import MovieList from './MovieList';
import styles from './Movie.scss';

const Movies = ({ movies, errorMessage, loading }) => {
  if (loading) {
    return <div><span>loading... </span></div>;
  }
  const renderMovies = () => movies.map((movie, index) => (
    <MovieList key={`${index}-${movie.title}`} movie={movie} />));

  return (
    <div className={styles.wrapper}>{movies.length ? renderMovies() : <span>{errorMessage}</span>}</div>
  );
};

export default Movies;
