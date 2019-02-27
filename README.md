# [Friend Finder](https://friend-finder-sz-2.herokuapp.com/)
# U of R Coding BootCamp - Full Stack Application
**A basic survey app that takes in a users answers to 10 questions.  It then compares those answers to people already in the data base.  Finally it returns a match to the person who most similarly answered the same questions.**

### Technologies Involved: 
1. Front End: 
  - HTML and CSS rendering our splash and survey pages. 
  - Bootstrap running an automatic carousel of friend images on the splash page as well as presenting the modal when needed.
  - Javascript and jQuery:
    - Interacting with the HTML pages drawing elements and listening for button clicks.
    - Validating user input.
    - Sending post and get requests to the server.
    - Updating the DOM with information returned from the get and post requests. 
2. Back End: 
  - A node server deployed on heroku serving up all our HTML, CSS, and JS files.
  - Express listening to a port and routing get and post requests.
  - Handlebars templating to render the list of friends in our "database".  Including a drop down showing the questions and their respective answers.
