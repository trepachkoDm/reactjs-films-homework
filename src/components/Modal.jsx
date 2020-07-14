/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React from 'react';

export default ({ isModal, closeModal, movieData }) => {
  const renderData = () => {
    const banned = [
      'poster_path',
      'title',
      'vote_average',
      'overview',
      'release_date',
    ];
    return Object.keys(movieData)
      .map((data) => (
        !banned.includes(data)
            && movieData[data] !== 'N/A' && (
              <div
                className={`movieData__item movieData__${data.toLowerCase()}`}
                variant="body1"
                component="p"
                key={`${movieData.title} ${data}`}
              >
                <span>{`${data}: `}</span>
                {`${movieData[data]}`}
              </div>
        )
      ))
      .filter((data) => data !== false);
  };

  return (
    <div open={isModal} onClose={closeModal}>
      <div>
        <div>
          <div>
            {movieData ? movieData.title : 'No title'}
          </div>
          <div>
            <span>{movieData ? `${movieData.vote_average} (${movieData.overview})` : 'N/A'}</span>
          </div>
        </div>
        <div>
          {movieData.poster_path === 'N/A' ? (
            <img src={poster} alt="" />
          ) : (
            <img src={movieData.poster_path} alt="" />
          )}
          <div>{movieData ? renderData() : ''}</div>
        </div>
      </div>
    </div>
  );
};
