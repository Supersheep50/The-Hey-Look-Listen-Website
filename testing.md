### Manual Testing

- Tested CRUD functionality for all resources:
  - Comments
  - Likes
  - Forum Posts
  - Profiles
  - Followers
  
  
- All nav links are functional. Links either open in a new window (if there is no navigation on the target page), or new pages provide the option to go back.
- Users must be logged in to add Posts and edit their own Comments, Likes and Profiles.


The site was tested for responsiveness on the following desktop and mobile devices: Macbook (Chrome and Safari), iPhone13 & Pixel 7 Pro (Chrome and Safari).

### Validator Testing

- HTML
  - When passing through the [W3C validator](https://validator.w3.org/) I received no errors and 11 notes, all related to trailing slashes. These have been left in place as the Prettier code formatter automatically inserts these.
    - [Link to PDF report](src/assets/readme/HTMLValidator.pdf)
- CSS
  - When passing through the [Jigsaw validator][https://jigsaw.w3.org/css-validator/] I received an error in both CommentCreateEditForm.module.css & ReviewCreateEditForm as one colour attribute was missing a `#`.
    - [Link to PDF report](src/assets/readme/CSSValidator.pdf)
  - I also received an error saying that the `scale` attribute does not exist, for resizing the checkboxes in PostCreateEditForm. Adjusting this to `transform: scale(0.5);` resolved the error with the same end result on the deployed site.
    - [Link to PDF report](src/assets/readme/CSSValidator2.pdf)
- JavaScript / React
  - When passing through ESHint in Gitpod, I received a number of errors around props not being validated, across all files with props (an example screenshot is below). I also received errors in my context files since React had not been imported. I resolved the React errors by importing React into these files. Based on some research, including [this article](https://forhjy.medium.com/react-solution-for-children-is-missing-in-props-validation-eslint-react-prop-types-2e11bc6043c7) I have decided to leave these errors unresolved for now, as the project is limited in scope and these do not affect its functionality.
    ![Screenshot of ESLint errors](src/assets/readme/ESHintValidator.png)

### Lighthouse Testing

![Screenshot of Lighthouse texting results](src/assets/readme/lighthouse.png)

The site scores highly for accessibility in Lighthouse testing. Suggestions for improving performance were:

- Reducing unused JavaScript (files included in the node_modules, which were provided by Code Institute).
- Setting images to specific sizes (which I have not done to ensure the site is responsive).
- Minifying JavaScript (outside the scope of this project).
- Eliminating render-blocking resources (which were imports for Bootstrap, FontAwesome, and Google Fonts).

### Fixed Bugs

- Had an issue where only the Profiles tab was showing in the Django admin. Turned out I hadn't registered the rest of the componements in their admin.py files.
- At one point only the front end of the project was displaying and the backend was showing a Bad Request (400). Turned out I needed to add the gitpod URL to Allowed Hosts in settings.py.
- Spotify embedded links were not working correctly. After reviewing the Spotify Dev docs I was able to pull the correct Urls from the embedded code to get them working. 

### Unfixed Bugs
- 

- 





