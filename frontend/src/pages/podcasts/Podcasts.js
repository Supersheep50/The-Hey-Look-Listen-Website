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
    url: "https://open.spotify.com/embed/episode/4wmY7nams3CqoGZmU7TUsp?utm_source=generator",
    title: 'Episode 60: Fandoms, Subscriptions and the Console Wars',
    bio: 'On this episode we set out to have a discussion on the current subscription services that have come to define modern gaming for many, such as XBox Game Pass and Playstation Plus Premium, and the conversation dovetailed off in several directions. We hit topics such as brand loyalty, toxic fanbases, and the slew of recent broken game releases, as we finally solve the Console Wars once and for all.'
  },
    {
    url: "https://open.spotify.com/embed/episode/0mdrD7kE7uzC1JrLdDMhYm?utm_source=generator" ,
    title: 'Episode 59: Resident Evil and Its Remake',
    bio: 'We dip back into the Resident Evil well to chat about the lauded Resident Evil 4, mainly because it received a phenomenal remake this year, which we also chat about obviously. We compare the two games, discussing our favourite moments, from the things they changed from the things that remained wonderfully untouched. There are some ropey impressions too.'
  },
  {
    url: "https://open.spotify.com/embed/episode/468uD3pFKFoLVvRQrUiaeR?utm_source=generator",
    title: 'Episode 58: Our Guilty Pleasure Games',
    bio: 'On this episode we bounce from old first-person-shooters to Japanese visual novels as we talk about some games that are genuinely close to our hearts, but in which we cannot deny their ropier, more awkward elements. '
  },
  {
    url: "https://open.spotify.com/embed/episode/3Qms2OvU5cwdGwGCYPbm2Y?utm_source=generator",
    title: 'Episode 57: The Gameboy',
    bio: 'We get painfully nostalgic for Nintendos first handheld device on this episode, as we share our fondest memories of the old grey brick, as well as the "Colors", "Pockets", and "Advances" it spawned. We discuss the franchises that defined the console for us, such as Pokemon, Tetris, Wario Land, and, uh, James Bond.'
  },
  {
    url: "https://open.spotify.com/embed/episode/7HyRnJsxWBj31B0gLReoPQ?utm_source=generator",
    title: 'Episode 56: Red Dead Redemption',
    bio: 'On this episode we take a look at both of Rockstar Games Western-themed epics, as we try to reconcile the quite sizable problems we have with both games with our love of their masterful storytelling and overall rootin tootin cowboy aesthetic. We also have find time to bellyache about the depiction of the Irish in these games, because obviously.'
  },
  {
    url: "https://open.spotify.com/embed/episode/2xZjeCSNguCeOvfPOkrJ7w?utm_source=generator" ,
    title: 'Episode 55: More Questions for Each Other',
    bio: 'All four of us gather for an episode in which we once again ask each other interview-like questions about the world of gaming. This time the questions have us discussing video game remakes, as well as what TV adaptations we would like to see in the wake of HBOs The Last of Us. We talk about the habits we have developed towards gaming as a hobby, both good and bad. And we recommend the games to each which we believe are big enough to represent entire genres.'
  } 
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