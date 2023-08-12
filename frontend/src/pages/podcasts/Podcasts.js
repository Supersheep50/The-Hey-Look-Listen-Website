import React from 'react';
import styles from '../../styles/Podcasts.module.css';

const episodes = [
  {
    url: 'https://open.spotify.com/embed/show/1qWCjKkHILrRLscI33N0v7?utm_source=generator',
    title: 'Episode 1: Introduction to Gaming Yarns',
    bio: 'In this introductory episode, we discuss the concept behind Gaming Yarns and what to expect from future episodes.'
  },
  {
    url: 'https://open.spotify.com/embed/episode/4WdxPGqx7PHbAB3g0MGWKE?utm_source=generator',
    title: 'Episode 2: Exploring Virtual Realities',
    bio: 'Join us as we dive into the world of virtual reality gaming, exploring its evolution, popular titles, and potential future developments.'
  },
  {
    url: 'https://open.spotify.com/embed/episode/4WdxPGqx7PHbAB3g0MGWKE?utm_source=generator',
    title: 'Episode 2: Exploring Virtual Realities',
    bio: 'Join us as we dive into the world of virtual reality gaming, exploring its evolution, popular titles, and potential future developments.'
  },
  {
    url: 'https://open.spotify.com/embed/episode/4WdxPGqx7PHbAB3g0MGWKE?utm_source=generator',
    title: 'Episode 2: Exploring Virtual Realities',
    bio: 'Join us as we dive into the world of virtual reality gaming, exploring its evolution, popular titles, and potential future developments.'
  },
  {
    url: 'https://open.spotify.com/embed/episode/4WdxPGqx7PHbAB3g0MGWKE?utm_source=generator',
    title: 'Episode 2: Exploring Virtual Realities',
    bio: 'Join us as we dive into the world of virtual reality gaming, exploring its evolution, popular titles, and potential future developments.'
  },
  {
    url: 'https://open.spotify.com/embed/episode/4WdxPGqx7PHbAB3g0MGWKE?utm_source=generator',
    title: 'Episode 2: Exploring Virtual Realities',
    bio: 'Join us as we dive into the world of virtual reality gaming, exploring its evolution, popular titles, and potential future developments.'
  },
  {
    url: 'https://open.spotify.com/embed/episode/4WdxPGqx7PHbAB3g0MGWKE?utm_source=generator',
    title: 'Episode 2: Exploring Virtual Realities',
    bio: 'Join us as we dive into the world of virtual reality gaming, exploring its evolution, popular titles, and potential future developments.'
  },
  {
    url: 'https://open.spotify.com/embed/episode/4WdxPGqx7PHbAB3g0MGWKE?utm_source=generator',
    title: 'Episode 2: Exploring Virtual Realities',
    bio: 'Join us as we dive into the world of virtual reality gaming, exploring its evolution, popular titles, and potential future developments.'
  },
  {
    url: 'https://open.spotify.com/embed/episode/4WdxPGqx7PHbAB3g0MGWKE?utm_source=generator',
    title: 'Episode 2: Exploring Virtual Realities',
    bio: 'Join us as we dive into the world of virtual reality gaming, exploring its evolution, popular titles, and potential future developments.'
  },
  // Add more episodes here
];

const GamingYarns = () => {
  return (
    <div className={styles.episodeContainer}>
      {episodes.slice().reverse().map((episode, index) => (
        <div key={index} className={styles.episodeCard}>
          <h3 className={styles.episodeTitle}>{episode.title}</h3>
          <iframe
            src={episode.url}
            className={styles.episodeFrame}
            title={`Episode ${index + 1}`}
            allowtransparency="true"
            allow="encrypted-media"
          ></iframe>
          <p className={styles.episodeBio}>{episode.bio}</p>
        </div>
      ))}
    </div>
  );
};

export default GamingYarns;