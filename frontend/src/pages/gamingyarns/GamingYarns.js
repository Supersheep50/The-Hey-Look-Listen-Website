import React from 'react';
import styles from './GamingYarns.module.css'; // Import the CSS module

const GamingYarns = () => {
  const episodes = [
    'https://open.spotify.com/embed/episode/4WdxPGqx7PHbAB3g0MGWKE?utm_source=generator',
    'https://open.spotify.com/embed/episode/4DK12lg1FpzrjiwPbQfJQY?utm_source=generator',
    'https://open.spotify.com/embed/episode/4wmY7nams3CqoGZmU7TUsp?utm_source=generator',
  ];

  return (
    <div className={styles.episodeContainer}>
      {episodes.map((episodeSrc, index) => (
        <iframe
          key={index}
          className={styles.episodeFrame}
          src={episodeSrc}
          frameBorder="0"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      ))}
    </div>
  );
};

export default GamingYarns;