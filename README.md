# The Hey! Look! Listen! Website - Frontend Readme

Welcome to the React Frontend for Hey! Look! Listen!

![Screenshot showing responsiveness of home page](frontend/src/assets/am-i-responsive.jpg)

Hey! Look! Listen! is a website where you can check out the latest podcasts and gaming content from HLL. Users are able to create a profile and post photos on the Forum page. They can also like and comment on other users posts. 

This is the frontend of the appliation, built with React.

- The deployed version of the full site built in React is [HERE]().
- The deployed version of the API is [HERE]().
- The backend repository is [HERE]().

## Wireframes

In the planning stage of this project, I created basic wireframes for desktop and mobile versions of the main pages of the site:

[Desktop and mobile wireframes](frontend/src/assets/wireframes.png)

## User Stories

I have divided the functionality of the site and database into epics and user stories below. These are also documented on my GitHub Project board found [here]().

This is the view at the end of my project:
![Final view of user stories](src/assets/readme/project-board.png)

All user stories marked 'Must Have' have been completed, and some 'Should Have' user stories are still to be completed. The site functions without these, but they should be implemented in future sprints to create a better user experience.

### **Epic:** Account Management

**User Stories:**

- As a **user** I can **sign up for an account** so that I can **make and like posts, and add games**
- As a **user** I can **log in and out of my account** so that I can **access the site from different devices and keep my account secure**
- As a **user** I can **add a profile photo and description** so that **I can personalise my profile**
- As a **user** I can **request to reset my password via email** so that **I can log back in to my account if I forget my login details**
- As a **user** I can **delete my profile** so that **my personal details are not saved if I don't want to use the site anymore**

### **Epic:** Managing Posts

**User Stories:**

- As a **user** I can **add a new post** so that **I can show when I start playing a game**
- As a **user** I can **edit my posts** so that **I can make updates, or mark when I have finished playing the game**
- As a **user** I can **delete my posts** so that **I can remove posts made in error, or that I don't want displayed on my profile anymore**
- As a **user** I can **like and unlike other users' posts** so that **I can engage with content that I enjoy**

### **Epic:** Managing Comments

**User Stories:**

- As a **user** I can **comment on other users' posts** so that **I can engage in conversations with other users**
- As a **user** I can **edit comments I have made** so that **I can correct mistakes in my comments**
- As a **user** I can **delete comments I have made** so that **I can remove comments posted by mistake**

### **Epic:** Managing Games

**User Stories:**

- As a **user** I can **request to add a new game to the site's database** so that **I can leave reviews and share the game on my profile**
- As a **user** I can **request edits to an existing game** so that **the information on the site is correct**
- As a **user** I can **add a review to a game** so that **I can share my thoughts on the game with other users**
- As a **user** I can **edit or delete my own reviews** so that **I can fix errors or change my review if my opinions change**
- As a **user** I can **like other users' reviews** so that **I can engage with other reviews I agree with**

### **Epic:** Admin Capabilities

**User Stories:**

- As a **site admin** I can **add, edit, and delete games from the database** so that **users have the most up-to-date list of games to choose from**
- As a **site admin** I can **remove posts or comments if they are not appropriate or relevant** so that **the site is enjoyable and accessible to all users**
- As a **site admin** I can **see lists of all user profiles, posts, games, reviews, likes, and comments** so that **I have an overview of all activity on the site**

## Features

### Existing Features

- **Navigation Bar**

  - The navigation bar appears across all pages of the application, and the icons that appear depend on whether the user is logged in or out. Below is the view for a logged in user. A logged out user will only see 'Sign In' or 'Sign Up' options.
    ![Navbar](src/assets/readme/navbar.png)

- **Splash Page**

  - The home page functions as a splash page, with a brief introduction to the site, and an image that ties into the theme (video games). Because the site's functionality requires a user to be logged in, it also includes a prompt to log in or create an account.
    ![Splash page](src/assets/readme/splashpage.png)

- **Game**

  - A user can either track or leave a review for a game. Any user can add a game to the database if it does not already exist, but only an admin can edit or delete the game - this is due to the fact that editing or deleting a game will affect all users who have tracked that game themselves. I did not want to give any user the ability to edit another user's posts via the game component. The game component includes the game's title, a photo, and a desription of the game. Users can interact with the game by liking it or adding a review.
    ![Game](src/assets/readme/game.png)

- **Review**

  - Users can leave a review for a game. There is a form beneath each game, prompting the user to choose a star rating and leave their comments. Reviews are displayed with the user's profile photo, a link to their profile, and a time stamp showing the date & time the review was left.
    ![Review](src/assets/readme/review.png)

- **Post**

  - A user creates a post in order to track a specific game. They can share whether they are currently playing it, or whether they have finished it. A time stamp is automatically added to reflect when the user last updated the status. Users can also add notes to their posts, and other users can interact with likes or by adding comments.
    ![Post](src/assets/readme/post.png)

- **Comment**

  - A user can leave a comment on a post. There is a form beneath each post with a free text box. Comments are displayed with the user's profile photo, a link to their profile, and a time stamp showing the date & time the comment was left.
    ![Comment](src/assets/readme/comment.png)

- **Add Game Form**

  - If a game does not already exist in the site's database, a user can add it. They will be prompted to select a photo, and add the title and game's descriptions. These games will then be accessible by all users of the site, and will be able to be tracked and reviewed by any user.
    ![Add game form](src/assets/readme/addgame.png)

- **Track Game Form**

  - When a user tracks a game, it creates a post on the main feed, and in their 'My Games' section. This form prompts the user to select a game from a dropdown menu, listing all the games in the database. If the game doesn't exist, the user is prompted to add it themselves via the Add Game form. If the game does exist, they can select whether they are currently playing the game or have completed it, and add any notes / thoughts in the free text field.
    ![Track game form](src/assets/readme/addpost.png)

- **Feed**

  - The 'feed' section of the site shows all posts made by all users. The layout is the same across all three main pages of the application (feed, my games, and all games) to ensure visual and stylistic consistency, and ease of navigation. The feed is searchable by game title.
    ![Feed](src/assets/readme/feed.png)

- **My Games**

  - The 'My Games' section of the site shows all the games that the logged in user has tracked. This will display all the user's own posts, including any notes, and whether they have completed or are currently playing the game. The posts are searchable by game title.
    ![My games](src/assets/readme/mygames.png)

- **All Games**

  - The 'All Games' section of the site displays a list of all the games in the database. The list is searchable by game title via a search bar at the top of the page, and users also have the option to add a game if it's not there.
    ![All games](src/assets/readme/allgames.png)

- **Sign In Page**

  - The sign in page allows an existing user to sign in to the site. There is a prompt redirecting the user to the sign up page if they don't already have an account. The layout for the sign in and sign up pages are both the same for visual / stylistic consistency.
    ![Sign in page](src/assets/readme/signin.png)

- **Sign Up Page**

  - As above, the sign up page allows a user to create a new account. There is a prompt redirecting the user to the sign in page if they already have an account.
    ![Sign up page](src/assets/readme/signup.png)

- **Profile Page**
  - The profile page allows a user to view their own or another user's profile. Users can edit their own profile by adding an image and/or a bio. The page also displays the number posts and reviews that a user has created, and shows a feed of their posts below this data.
    ![Profile page](src/assets/readme/profile.png)

### Features To Be Implemented

Features that were outside the scope of this project, but that will be added in future sprints:

- The ability to follow and unfollow users, to curate a custom feed.
- The ability to follow and unfollow games, to notify you when a new review is added or a user starts tracking it.
- The ability for a user to request an edit to game. Right now, only an admin can edit or delete a game, so that users cannot affect other users' posts, but if any changes need to be made there is no easy way to communicate this to the admin user.

## Testing

Please see my [testing file](TESTING.md) for all manual and validator testing.

## Deployment

### Local Deployment

_Gitpod_ IDE was used to write the code for this project.

To preview the project in the development environment, run the following command in the terminal:
`npm start`. This will open port 3000. Click _Open Browser_ when the popup window appears to open the preview in a new window, or _Open Preview_ to open it within the IDE.

To make a local copy of this repository, you can clone the project by typing the follow into your IDE terminal:

- `git clone https://github.com/StephHjar/goodgames-react.git`

Alternatively, if using Gitpod, you can click below to create your own workspace using this repository.

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/StephHjar/goodgames-react)

### Heroku Deployment

This project uses [Heroku](https://www.heroku.com), a platform as a service (PaaS) that enables developers to build, run, and operate applications entirely in the cloud.

- Select _New_ in the top-right corner of your Heroku Dashboard, and select _Create new app_ from the dropdown menu.
- Enter a name for your app. The app name must be unique, so you need to adjust the name until you find a name that hasn't been used.
- From the dropdown, choose the region closest to you (EU or USA), and finally, select _Create App_.
- When the app is created, from the _Deploy_ tab, click on _Github_, enter the name of your GitHub repository, and click _Connect_.
- Optionally, turn on automatic deployments, which will deploy to Heroku every time an update has been pushed to GitHub.
- To deploy to Heroku the first time, click _Deploy_ near the bottom of the page.
- _Note:_ unlike the backend application, there is no need to set any Config Vars for the frontend.

### Preparing the File for Deployment

Before your final deployment, complete the following steps:

- In your `index.js` file, remove the `React.StrictMode` component (be sure to delete both opening and closing tags). This is not necessary outside of production.
- In the `package.json file`, in the “scripts” section, add the following prebuild command:
  `"heroku-prebuild": "npm install -g serve",`. This will install a package needed to serve our single page application on heroku
- Create a file called `Procfile` at the root of the project, and in the file, paste in the following web command:
  `web: serve -s build`.

### Final Deployment

- From Gitpod, run a final `git add .`, `git commit -m` with commit message, and `git push`.
- If automatic deploys are enabled in Heroku, the app is now deployed!
- If not, navigate to the _Deploy_ tab on Heroku. Scroll to the bottom of the page, and click _Deploy Branch_.
- Your app is now deployed! 🥳

## Credits

### Content

- Code throughout this project was adapted from Code Institute's Moments walkthrough.
- In order to get all game titles from my DRF API database to populate in the "Add Post" form, I used the following resources:
  - [This YouTube video](https://www.youtube.com/watch?v=x48RYuXKs7c) from Haritha Computers and Technology (thank you to my mentor, Martina, for sharing this with me!)
  - [This page](https://dev.to/haalto/recursively-fetch-data-from-paginated-api-34ig) on Dev.to about pulling data from a paginated API.
  - [This page](https://dev.to/hariseldon27/localecompare-and-sorting-in-javascript-1god) again on Dev.to to learn how to sort the game titles alphabetically.
  - I also borrowed code / syntax from GameDataContext provider.
- I used [this thread](https://stackoverflow.com/questions/46820682/how-do-i-reload-a-page-with-react-router) and [this thread](https://stackoverflow.com/questions/65707107/react-routing-to-specific-page-not-working) on StackOverflow to have the handleDelete functions for Post and Game refresh the existing page if they are on the List page, rather than redirect the user back to the previous page. If they are on any page other than the List page, deleting a Post or Game will redirect them back to the List.
- I used [this thread](https://stackoverflow.com/questions/68776130/react-router-how-to-check-if-url-id-exists-in-functional-component) on StackOverflow to solve a bug where a blank game or post component was loading, instead of a 404 page, if a user entered an ID that did not exist. Using the `component` tag now renders the 404 page.
- Deployment steps are adapted from Code Institute's Momments walkthrough.

### Media

- I used [Canva](https://www.canva.com/) to create the GoodGames Logo.
- I used [CloudConvert] to convert images to WEBP format.
- I used [Favicon Generator](https://favicon.io/) to create my favicon.
- The sign up form photo is by by [Javier Martinez](https://unsplash.com/@cjdante?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/photos/hUD0PUczwJQ?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText).
- I used [Color Picker](https://imagecolorpicker.com/en) to generated hex codes for colours from images.
- The 'no results' icon is from [Flaticon](https://www.flaticon.com/free-icon/not-found_1178479).
- The image on the main page is by [JESHOOTS.COM<](https://unsplash.com/@jeshoots?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/photos/eCktzGjC-iU?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText).

Thank you to my mentor, Martina, for the helpful tips and guidance.
And special thank you to my fiancé Jonathan for supporting me through this course, being by my side through all the wobbles, and generally being the pest parter I could have asked for as I dedicated so much time to this project. ❤️