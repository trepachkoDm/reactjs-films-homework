import React from 'react';
import axios from 'axios';
import { reducer, initialState } from '../../modules/reducer';

import styles from './FilterTabs.scss';

const MOVIE_GANRES = 'https://api.themoviedb.org/3/genre/movie/list?api_key=52db2b41670462d7fc819f427264b22c&language=en-US';

const Categories = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const { genres } = state;

  React.useEffect(() => {
    axios.get(MOVIE_GANRES).then((jsonResponse) => {
      dispatch({
        type: 'SEARCH_MOVIES_GENRES',
        payload: jsonResponse.data.genres,
      });
    });
  }, []);

  const options = genres.map((genre, index) => (
    <option
      key={`${index.id}-${genre.name}`}
      genre={genre}
    >
      {`${genre.name}`}
    </option>
  ));

  return (
    <div className={styles.container}>
      <button type="button" className={styles.tab}>Trending</button>
      <button type="button" className={styles.tab}>Top Rated</button>
      <button type="button" className={styles.tab}>Coming soon</button>

      <select
        className={styles.tab}
        name="Genre"
      >
        <option value="Genre">Genres</option>
        {options}
      </select>

    </div>
  );
};

export default Categories;
