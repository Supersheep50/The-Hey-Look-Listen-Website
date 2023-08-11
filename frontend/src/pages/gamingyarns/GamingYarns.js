import React from 'react';
import styles from '../../styles/GamingYarns.module.css';

const GamingYarns = () => {
  const episodes = [
    
    'https://open.spotify.com/embed/show/1qWCjKkHILrRLscI33N0v7?utm_source=generator',
    'https://open.spotify.com/embed/episode/4WdxPGqx7PHbAB3g0MGWKE?utm_source=generator',
    'https://open.spotify.com/embed/episode/4DK12lg1FpzrjiwPbQfJQY?utm_source=generator',
    'https://open.spotify.com/embed/episode/4wmY7nams3CqoGZmU7TUsp?utm_source=generator',
    'https://open.spotify.com/embed/episode/0mdrD7kE7uzC1JrLdDMhYm?utm_source=generator',
    'https://open.spotify.com/embed/episode/468uD3pFKFoLVvRQrUiaeR?utm_source=generator',
    'https://open.spotify.com/embed/episode/3Qms2OvU5cwdGwGCYPbm2Y?utm_source=generator',
    'https://open.spotify.com/embed/episode/7HyRnJsxWBj31B0gLReoPQ?utm_source=generator',
    'https://open.spotify.com/embed/episode/2xZjeCSNguCeOvfPOkrJ7w?utm_source=generator',

  ];

  return (
    <div className={styles.episodeContainer}>
      {episodes.map((episode, index) => (
        <iframe
          key={index}
          src={episode}
          className={styles.episodeFrame}
          title={`Episode ${index + 1}`}
          allowtransparency="true"
          allow="encrypted-media"
        ></iframe>
      ))}
    </div>
  );
};

export default GamingYarns;
