### Frontend Manual Testing

- Tested CRUD functionality for all resources:
  - Comments
  - Likes
  - Forum Posts
  - Profiles
  - Followers
  
  
- All nav links are functional. Links either open in a new window (if there is no navigation on the target page), or new pages provide the option to go back.
- Users must be logged in to add Posts and edit their own Comments, Likes and Profiles. They must also be logged in to follow and unfollow other users.
- Only the admin can delete other users posts or comments. 
- I have added posts, comments, likes for every user to test the functionality of the website. 
- I have also asked my partner to add posts, like and comments under her own created user profile.

The site was tested for responsiveness on the following desktop and mobile devices: Macbook (Chrome and Safari), iPhone13 & Pixel 7 Pro (Chrome and Safari).

### Validator Testing

- HTML
  - When passing through the [W3C validator](https://validator.w3.org/) I received no errors and 9 notes, all related to trailing slashes. These have been left in place as the Prettier code formatter automatically inserts these.
    - ![HTML](/frontend/src/assets/html-validator.png)
- CSS
  - When passing through the [Jigsaw validator][https://jigsaw.w3.org/css-validator/] I received no errors.
    - ![CSS](/frontend/src/assets/css-validator.png)
- JavaScript / React
  - I passed through every JS file through the editor. No errors found but many warnings around certain lines of code being present in differing version of Javascript. Seeing as I am using the CI recommended version of JS, I have left these warnings present. Double checked this with my mentor to ensure I did the right thing.
    - ![Screenshot of ESLint warnings](frontend/src/assets/jshint-warnings.png)

### Lighthouse Testing

The site scores highly across the board but lower in performance. The reason being due to the many extensions I have on Chrome. Sadly these are for work and can not be removed. 
    - ![Lighthouse](/frontend/src/assets/lighthouse-testing.png)

### Fixed Bugs

- Had an issue where only the Profiles tab was showing in the Django admin. Turned out I hadn't registered the rest of the componements in their admin.py files.
- At one point only the front end of the project was displaying and the backend was showing a Bad Request (400). Turned out I needed to add the gitpod URL to Allowed Hosts in settings.py.
- Spotify embedded links were not working correctly. After reviewing the Spotify Dev docs I was able to pull the correct Urls from the embedded code to get them working. 
- Alerts were only showing up on the local version and not my deployed final site. Turned out I hadn't rebuilt the production.

### Unfixed Bugs
- I have not found any unfixed bugs. I have spent countless hours looking for some!

### Backend Manual Testing

### Validator Testing - Python
No errors were found when passing through the [CI Python Linter](https://pep8ci.herokuapp.com/#). All files below were passed through the linter: 
- comments app:
    - apps.py
    - models.py
    - serializers.py
    - urls.py
    - views.py 
- followers app:
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
- hll_drf_api app:
    - asgi.py
    - permissions.py
    - serializers.py
    - settings.py (some lines too long but cant fix this. For example, Allowed Hosts needs to be that long)
    - urls.py
    - views.py
    - wsgi.py

### Manual Testing

And by going through all CRUD screens and forms on the local application to ensure all the below functionality is present:
- comments:
    - logged in user can create a comment:
        - associated with a post
        - free text content field
    - owner of a comment can edit and delete their own comment:
        - post field cannot be edited
        - free text content field can be edited
        - comment can be deleted
- likes:
    - logged in user can create a like
        - each like is associated with:
            - a post
            - owner of a like can delete their own like
- posts:
    - logged in user can create a post:
        - add a photo and title
        - free text notes field
    - owner of a post can edit and delete their own post:
        - notes field can be edited
        - post can be deleted
- profiles:
    - profile is automatically created when a new user signs up
    - owner of a profile can edit or delete their own profile:
        - name free text field can be added
        - bio can be added
        - image can be added
        - profile, username and password can be edited.







