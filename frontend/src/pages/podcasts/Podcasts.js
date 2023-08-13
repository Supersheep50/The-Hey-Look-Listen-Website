import React from 'react';
import styles from '../../styles/Podcasts.module.css';

const episodes = [
  {
    url: 'https://open.spotify.com/embed/show/1qWCjKkHILrRLscI33N0v7?utm_source=generator',
    title: 'Episode 63: Introduction to Gaming Yarns',
    bio: 'On this episode we select a number of games which we believe to have perfect endings. Our choices range from perfectly executed narrative wrap-ups, to fourth wall breaking tomfoolery.'
  },
  {
    url: 'https://open.spotify.com/embed/episode/4WdxPGqx7PHbAB3g0MGWKE?utm_source=generator',
    title: 'Episode 62: Our Favorite and Least Favorite Protagonists',
    bio: 'Were talking about main characters on this episode, namely the ones we really love and the ones we really hate. In discussing our favourite gaming protagonists, we talk about strong writing and relatability, as well as a characters design being married to gameplay. In discussing our least favourite gaming protagonists, we just sort of get a bit complainy.'
  },
  {
    url: 'https://open.spotify.com/embed/episode/4DK12lg1FpzrjiwPbQfJQY?utm_source=generator',
    title: 'Episode 61: Food in Gaming',
    bio: 'On this episode we tackle the nebulous topic of the depiction of food & drink in video games, starting off with foods classic roles as chunky pixelated health pickups. As the episode goes on, however, we are interested to discover that we nearly entirely forget to talk about games that are overtly about food or cooking, as our ideas of the best depictions of food in gaming seem to go hand-hand with vibey, atmospheric games, awash with comfy recreations of the mundane.'
  },
  {
    url: 'https://open.spotify.com/embed/episode/4WdxPGqx7PHbAB3g0MGWKE?utm_source=generator',
    title: 'Episode 60: Exploring Virtual Realities',
    bio: 'Join us as we dive into the world of virtual reality gaming, exploring its evolution, popular titles, and potential future developments.'
  },
  {
    url: 'https://open.spotify.com/embed/episode/4WdxPGqx7PHbAB3g0MGWKE?utm_source=generator',
    title: 'Episode 59: Exploring Virtual Realities',
    bio: 'Join us as we dive into the world of virtual reality gaming, exploring its evolution, popular titles, and potential future developments.'
  },
  {
    url: 'https://open.spotify.com/embed/episode/4WdxPGqx7PHbAB3g0MGWKE?utm_source=generator',
    title: 'Episode 58: Exploring Virtual Realities',
    bio: 'Join us as we dive into the world of virtual reality gaming, exploring its evolution, popular titles, and potential future developments.'
  },
  {
    url: 'https://open.spotify.com/embed/episode/4WdxPGqx7PHbAB3g0MGWKE?utm_source=generator',
    title: 'Episode 57: Exploring Virtual Realities',
    bio: 'Join us as we dive into the world of virtual reality gaming, exploring its evolution, popular titles, and potential future developments.'
  },
  {
    url: 'https://open.spotify.com/embed/episode/4WdxPGqx7PHbAB3g0MGWKE?utm_source=generator',
    title: 'Episode 56: Exploring Virtual Realities',
    bio: 'Join us as we dive into the world of virtual reality gaming, exploring its evolution, popular titles, and potential future developments.'
  },
  {
    url: 'https://open.spotify.com/embed/episode/4WdxPGqx7PHbAB3g0MGWKE?utm_source=generator',
    title: 'Episode 55: Exploring Virtual Realities',
    bio: 'Join us as we dive into the world of virtual reality gaming, exploring its evolution, popular titles, and potential future developments.'
  },
  
];

const Podcasts = () => {
  return (
    <div className={styles.episodeContainer}>
      {episodes.map((episode, index) => (
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

export default Podcasts;