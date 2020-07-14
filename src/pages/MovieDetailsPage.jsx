import React from 'react';
import axios from 'axios';
import {
  Header, Movies, Categories, Footer,
} from '../components';
import { reducer, initialState } from '../modules/reducer';
import styles from './Main.scss';

const MOVIE_TOP = 'https://api.themoviedb.org/3/movie/top_rated?api_key=52db2b41670462d7fc819f427264b22c&language=en-US&page=1';

const MovieDetailsPage = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const { movies, errorMessage, loading } = state;

  React.useEffect(() => {
    axios.get(MOVIE_TOP).then((jsonResponse) => {
      dispatch({
        type: 'SEARCH_MOVIES_SUCCESS',
        payload: jsonResponse.data.results,
      });
    });
  }, []);

  return (
    <div className={styles.app}>
      <Header />
      <Categories />
      <Movies movies={movies} loading={loading} errorMessage={errorMessage} />
      <Footer />
    </div>
  );
};
export default MovieDetailsPage;
