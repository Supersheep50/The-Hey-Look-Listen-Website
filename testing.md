### Manual Testing

- Tested CRUD functionality for all resources:
  - Comments
  - Likes
  - Forum Posts
  - Profiles
  
  
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

See the [closed issues tab](https://github.com/StephHjar/goodgames-react/issues?q=is%3Aissue+label%3Abug+is%3Aclosed) labelled 'bug' in my GitHub repository for bugs that arose and how I resolved them.

### Unfixed Bugs
- There is one bug left unfixed in my [GitHub issues](https://github.com/StephHjar/goodgames-react/issues/24).

- There is also an issue that appears only on very slow internet connections, that I am only able to replicate reliably using Chrome on mobile, where the site doesn't detect the current user in time. This causes the user to be redirected to the home page when trying to edit their own post or profile, even though they are the owner. Sean with Tutor Support spent about two hours investigating this with me, and we were only able to narrow the cause down to the `useEffect` hook not giving the site long enough to return the current user before redirecting the user away from the page. The other way this manifests is that occasionally the `...` menu option to edit or deelte a post or profile does not appear, even if the currently logged in user is the owner of the post or profile. Again, I am only able to reliably replicate this on my own mobile device using Chrome, and only using a slow wifi connection while travelling; I was not able to replicate this on my home internet connection, and Sean couldn't replicate the issue on his own mobile device.

Because this issue is so intermittent and difficult to reliably replicate, it has proven difficult to debug. If I had not been travelling, I likely wouldn't have even known the issue existed, using the stable internet connection at home. This issue does warrant further investigation beyond the scope of this project, but without being able to consistently replicate it on desktop for now I am leaving this as a documented bug.





