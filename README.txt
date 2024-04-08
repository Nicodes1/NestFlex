NestFlex README

CPSC 481 Tutorial 05 Group 6

Matthew Martin (matthew.martin1@ucalgary.ca)
Luke Nodwell (luke.nodwell@ucalgary.ca)
Nicholas Varela Benitez (nicholas.varelabenit@ucalgary.ca)


Instructions for use of the system:

If the the system is not locally compiled, then you can access our system by the link below:

https://nicodes1.github.io/home/home.html

Once you have entered the system, you can begin to interact with the system.
At the top of the screen we have a NavBar which is a directory for the site, the directory
is split into 5 actions, clicking the NESTFLEX logo bring the user to the home page,
the BUY button brings you to the buy page, where the buy task can be completed.
The SELL button brings you to the sell section allowing a home to be put up on our website
The HELP button brings the user to our help page, where they can find answers to questions
The profile button in the top right can bring the user to their profile page, sign in or create an account


Which cases / functions are implemented:

The BUY function has been implemented, clicking BUY from the NavBar brings the user to a page with listings or searching from the home page
In our implementation the Search and BUY will always bring up locations from Calgary, so to mimic the real experience a user would search for "Calgary"

From here we've also implemented filtering which can be accessed by clicking the filters button,
functionality for resetting the filters, applying saved filters work. However when applying any filters
the results for the Apply saved filters will always appear

Whether the user chooses to search or not, the only functional listing Page is teh "Altadore NW Calgary" listing

From the listing page the user can "like" the listing, View more photos of the listing bringing up the gallery or contact

For the gallery there are buttons on either end of the pictures to go through the gallery photos, we didn't implement a back button so the browser back button must be used

By clicking contact, the user can reach out the the realtor who has put up the listing.

After filling out the form the user will be prompted with a confirmation screen, then a confirmation that the message has been sent.

The SELL function has been implemented, by clicking the SELL button from the NavBar
This page gives the user an outline for what needs to be filed out to create a listing.
The upload photo and photo preview function do not work, however the add photos can be clicked and prompts a file upload

Once the user fill out the information they have the option to preview their listing, this listing is hard coded and does not dynamically reflect user input
This preview page will look similar to the listing page, just with a back button to return to the sell page, and without a contact button.

Once the user clicks back, they can Post their listing and will be prompted with a confirmation popup, where they can go Home or View Ad, which will bring them back to the preview

The HELP functionality has been implemented and can be accessed through the NavBar

The Help page lists questions for HOME BUYERS, HOME SELLERS and REALTORS all the questions are clickable links however only the first HOME BUYERS question has a filled out answer
The rest of the pages are working but are marked with "TODO"

After visiting a question page the related questions are just links to the other questions that we're seen from the original HELP page

SEE MORE wasn't implemented it just leads to an existing answer page. There is no back button features on these pages, the NavBar, related questions or brower back buttons must be used

The profile functionality has been implemented. There is no global signed in state so from Home and Help you will always be prompted to sign in, from all other pages the profile page is accessible without a sign in

Through the Home or Help page you will be prompted to sign in with an email and password.

To sign in the email "person@nestflex.ca" must be entered and password "pass", this brings you to the profile page

Forgot password messages the user that a password reset email has been sent, however it doesn't do anything, the thought behind this is that the user enters their email into the EMAIL
field and then the system sends a forgot password email to that address.

By clicking the create account button the popup prompts for EMAIL, PASSWORD AND CONFIRM PASSWORD as input. The system needs the password and confirm password fields to match for the success message
Otherwise a failure message will appear, This functionality doesn't actually create an account, it just shows the process that would be in place to create an account

After accessesing the profile page the users profile picture appears in the top left, however an option to change their profile picture was not implemented,
then their is a field for the users Full Name, and their preferences which matches the apply saved filters from the buy page.

then there are the saved listings, which are the "liked" listings from the buy page. The only functioning listing in SAVED is the Altadore one.
Then there are the Active lisitings which is the list of properties the user has on the website, we have a delete posting feature that removes the listing,
And the "Wildwood SW Calgary" listing is clickable however it displays the incorrect listing information.