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

I have divided the functionality of the site and database into epics and user stories below. These are also documented on my GitHub Project board found [here](https://github.com/users/Supersheep50/projects/5).

This is the view at the end of my project:
![Final view of user stories](frontend/src/assets/github-projects-final%20.jpg)

All user stories marked 'Must Have' have been completed, and some 'Should Have' user stories are still to be completed. The site functions without these, but they should be implemented in future sprints to create a better user experience.

### **Epic:** Account Management

**User Stories:**

- As a **user** I can **sign up for an account** so that I can **make and like forum posts**
- As a **user** I can **log in and out of my account** so that I can **access the site from different devices and keep my account secure**
- As a **user** I can **add a profile photo and description** so that **I can personalise my profile**
- As a **user** I can **edit my username, change my password and username** to keep **my personal details safe and secure**

### **Epic:** Managing Posts

**User Stories:**

- As a **user** I can **add a new post** so that **I can talk about my favorite podcast epsidoes**
- As a **user** I can **edit my posts** so that **I can make changes after listening to episodes or rading comments**
- As a **user** I can **delete my posts** so that **I can remove posts made in error, or that I don't want displayed on my profile anymore**
- As a **user** I can **like and unlike other users' posts** so that **I can engage with content that I enjoy**

### **Epic:** Managing Comments

**User Stories:**

- As a **user** I can **comment on other users' posts** so that **I can engage in conversations with other users**
- As a **user** I can **edit comments I have made** so that **I can correct mistakes in my comments**
- As a **user** I can **delete comments I have made** so that **I can remove comments posted by mistake**


### **Epic:** Admin Capabilities

**User Stories:**

- As a **site admin** I can **add, edit, and delete profiles from the database** so that **users have the most up-to-date list of games to choose from**
- As a **site admin** I can **remove posts or comments if they are not appropriate or relevant** so that **the site is enjoyable and accessible to all users**
- As a **site admin** I can **see lists of all user profiles, posts, games, reviews, likes, and comments** so that **I have an overview of all activity on the site**

## Features

### Existing Features

- **Navigation Bar**

  - The navigation bar appears across all pages of the application, and the icons that appear depend on whether the user is logged in or out. Below is the view for a logged in user. 
    ![Navbar](frontend/src/assets/nav-bar.jpg)
    ![Navbar Logged out](frontend/src/assets/nav-bar-logged-out.jpg)


- **Podcast Page**

  - The Podcast Page showcases all the episodes of the HLL podcast with updates every 2 weeks. Users can listen to epiosdes here if they like or click the player and be brought to the HLL Spotify page.
    ![Podcast page](frontend/src/assets/podcasts-page.jpg)
    

- **Add a post**

  - A user can add a post to the HLL forum here. Clicking the button gives users the ability to add an episode title, a photo and some text. A similiar approach to Reddits forum pages.
    ![Post](frontend/src/assets/add-post.jpg)
    ![Podcast page](frontend/src/assets/podcasts-page.jpg)

- **Gaming Yarns**

  - Users can check out HLL's collection of Gaming Yarns. Short stories about relatively unknown games. 
    ![Yarns](frontend/src/assets/yarns-page.jpg)

- **Forum**

  - The forum is where Users posts about the Podcast get posted. Here they can view other Users posts and comment and like.
    ![Forum](frontend/src/assets/forum-page.jpg)

- **Comment**

  - A user can leave a comment on a post. There is a form beneath each post with a free text box. Comments are displayed with the user's profile photo, a link to their profile, and a time stamp showing the date & time the comment was left.
    ![Comment](frontend/src/assets/comments-box.jpg)

- **Sign In Page**

  - The sign in page allows an existing user to sign in to the site. There is a prompt redirecting the user to the sign up page if they don't already have an account. The layout for the sign in and sign up pages are both the same for visual / stylistic consistency.
    ![Sign in page](frontend/src/assets/sign-in-page.jpg)

- **Sign Up Page**

  - As above, the sign up page allows a user to create a new account. There is a prompt redirecting the user to the sign in page if they already have an account.
    ![Sign up page](frontend/src/assets/sign-up-page.jpg)

- **Profile Page**
  - The profile page allows a user to view their own or another user's profile. Users can edit their own profile by adding an image and/or a bio. The page also displays the number of posts, followers and how many users they are following. It also shows a feed for their posts.
    ![Profile page](frontend/src/assets/profile-page.jpg)

- **Exisiting HLL Projects**
  - The Navbar showcases two links to exisiting HLL projects, The HLL Quiz and The Secret of the HLL Tomb.
    ![Exisiting projects](frontend/src/assets/exisitng-projects.jpg)

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