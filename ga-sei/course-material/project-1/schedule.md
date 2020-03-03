# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Geting started and scheduling your time

Most importantly, remember to **go slowly and be methodical**. That means you should be testing your changes in-browser as you write each line or so of code. Don't spend too much time trying to work out one particular problem - seek help! Time management is key. 
Always be commiting. Deploy early and often.

Here's a rough sketch of what you should do and in what order:

### Planning
* __MVP__. First design your _MVP_ (Minimum Viable Product). Have a plan for completing an MVP before getting too involved with _advanced_ features. Start writing your README file with some basic ideas. _Timebox_ any experimental or optional ideas, features, or technologies. Remember that good _time management_ is key!
* __User Stories__. Use _Trello_ to prioritize your User Stories / features. Focus on what is most important / critical to success.
* __Wire Frames__. Draft up a set of sketches to start from as you begin to design your app's front end. These sketches should be lightweight and rough so that you can easily iterate on them if you decide to add or remove features.

### Set Up
* __Create your environments__. Make an empty folder in your project folder, and start to add your HTML, CSS and JavaScript environments. Set up a basic HTML boilerplate.
* __Initialize Git__. Create a new repisitory on _GitHub_ and link it to your new project. Remember to make it "public" and de-select the "Initialize this repository with a README" option. Then follow the steps.
* __Basic styling__. Start to put together the HTML for the layout of your page, in accordance to your wireframes. Add some simple CSS if that helps you visualize how your page is going to look.
* __Commitment__. Commit your code early and often to _GitHub_ with good commit messages.
* __Branch__. Use _Git Branching_ for experimenting with different ideas and technologies.
 
### Game Engine
* __Plan your scripting__. What game you choose to build will affect what type of scripting is best for your needs. Sometimes, there will be several options available (ie. "if/else" vs. "switch" statements). Do some research online and decide which you think would be most suitable. Try to find some good, usuable examples to reference... but do not copy and paste!
* __Pseudocode__. By now you should all know what it means to "pseudocode". Plan out the functional aspects of your program from beginning to end, using simple but effective comments to help you get from A to B. Make sure to reference your User Stories in order to know what you are trying to acomplish with each step.
* __Basic coding__. Work on reaching your MVP first. Decide what are the most basic elements to create for a simple, functioning game. Consider using [repl.it](https://repl.it/) to write and test your code.

### Game UI
* __Design your game board__. In addition to your _wireframes_, you need to think about the usuability of your layout. Look at this from the standpoint of the player / user, so referencing your User Stories is important. Test out your game design on your fellow developers, to see if they can navigate around without getting stuck.
* __Click handlers__. Start writing your click handlers and connect them to the functions (events) they will be triggering. This requires DOM manipulation, and can be accomplished using JavaScript or jQuery.
* __Live updating__. Update the game engine when the game board is updated.
* __Interaction__. Work on communication with the player regarding turns, lives lost, status, etc. Again, check with your User Stories.
* __Overall game play__. Once you have the basic game functions running, it's time to think about the bigger picture. Work out how to create a new game, start the game, and finish the game. What does the player expect to experience at each level of the game?

### Styling
* __Third party libraries__. Time to add some pizzazz! There are styling libraries available to you ([Bootstrap](https://getbootstrap.com/), [Materialize](https://materializecss.com/)), so decide if they will be of use to you. Make sure that you read the docs thoroughly before diving in!
* __CSS__. In addition to using libraries (or instead of), you can style your page using CSS. Make sure you use good naming conventions for your divs (ID's, classes), so that you know EXACTLY what you are styling. Try and make your website _responsive_ by using _CSS Grid_ or _Flexbox_.

### Final Touches
* Finish README.
* Troubleshoot/Debug.
* If there is time, try and accomplish some of the stretch goals (listed on the README page).
* Deploy to [Netlify Drop](https://app.netlify.com/drop).
