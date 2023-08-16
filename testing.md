### Frontend Manual Testing

- Tested CRUD functionality for all resources:
  - Comments
  - Likes
  - Forum Posts
  - Profiles
  - Followers
  
  
- All nav links are functional. Links either open in a new window (if there is no navigation on the target page), or new pages provide the option to go back.
- Users must be logged in to add Posts and edit their own Comments, Likes and Profiles. They must also be logged in to follow and unfollow other users.


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

### Backend Manual Testing

### Validator Testing - Python
No errors were found whne passing through the [CI Python Linter](https://pep8ci.herokuapp.com/#). All files below were passed through the linter: 
- comments app:
    - apps.py
    - models.py
    - serializers.py
    - urls.py
    - views.py 
- games app:
    - apps.py
    - models.py
    - serializers.py
    - urls.py
    - views.py
- likes app:
    - apps.py
    - models.py
    - serializers.py
    - urls.py
    - views.py 
- posts app:
    - apps.py
    - models.py
    - serializers.py
    - urls.py
    - views.py
- profiles app:
    - apps.py
    - models.py
    - serializers.py
    - urls.py
    - views.py 
- reviews app:
    - apps.py
    - models.py
    - serializers.py
    - urls.py
    - views.py 
- goodgames_drf_api app:
    - asgi.py
    - permissions.py
    - serializers.py
    - settings.py
    - urls.py
    - views.py
    - wsgi.py

### Manual Testing

The API was tested manually by ensuring all pages loaded without error on the deployed site:
- [comments](https://goodgames-drf-api.herokuapp.com/comments/)
- [games](https://goodgames-drf-api.herokuapp.com/games/)
- [likes](https://goodgames-drf-api.herokuapp.com/likes/)
- [posts](https://goodgames-drf-api.herokuapp.com/posts/)
- [profiles](https://goodgames-drf-api.herokuapp.com/profiles/)
- [reviews](https://goodgames-drf-api.herokuapp.com/reviews/)

And by going through all CRUD screens and forms on the local application to ensure all the below functionality is present:
- comments:
    - logged in user can create a comment:
        - associated with a post
        - free text content field
    - owner of a comment can edit and delete their own comment:
        - post field cannot be edited
        - free text content field can be edited
        - comment can be deleted
- games:
    - logged in user can create a game:
        - free text title field
        - image field
        - free text description field
    - admin can edit and delete a game:
        - title can be edited
        - image can be changed
        - description can be edited
        - game can be deleted
- likes:
    - logged in user can create a like
        - each like is associated with:
            - game
            - comment
            - post, or
            - review
    - owner of a like can delete their own like
- posts:
    - logged in user can create a post:
        - associated with a game (from dropdown)
        - currently playing checkbox / boolean field
        - completed checkbox / boolean field
        - free text notes field
    - owner of a post can edit and delete their own post:
        - game field can be edited (new game chosen from dropdown)
        - currently playing boolean field can be edited
        - completed boolean field can be edited
        - notes field can be edited
        - post can be deleted
- profiles:
    - profile is automatically created when a new user signs up
    - owner of a profile can edit or delete their own profile:
        - name free text field can be added
        - description free text fiele can be added
        - image can be added
        - profile can be deleted (this functionality is not present on the deployed frontend application)
- reviews: 
    - logged in user can add a review:
        - associated with a post (from dropdown)
        - rating field (must be an integer between 1-5, error will appear if anything else is entered)
        - free text content field
    - owner of a review can edit or delete their review:
        - post field cannot be edited
        - rating field can be edited (with same requirements as creating a review)
        - free text content field can be edited
        - review can be deleted

### Unfixed Bugs

There is one error message in the console:
![Favicon not loading](static/readme/favicon-error.png)
This is because I have not created a favicon for the deployed version of this site. Because this is a backend API that is only intended to be accessed by my frontend application, and not by users of the site, I will not be adding a favicon.

The 'likes' model also allows for a like to be associated with more than one object (i.e. a game and a post), but the design of the frontend application makes this impossible for the user to implement in practice, as a new like is created every time a user adds a like to a post, comment, review, or game and likes cannot be edited.




