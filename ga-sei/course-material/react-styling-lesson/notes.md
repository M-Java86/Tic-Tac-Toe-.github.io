## Learning Objectives
We started learning the fundamentals yesterday(components, props)
How to style in react - I will show you two ways.
 
## Separation of Concerns:
-Defined in React: building small components that house a single elements structure, styling, and logic within one file.


In-line styles - let’s create a Button.js in our component’s folder
Copy the code from the read me, I adjusted a couple of things.  Make sure you export the button at the button of Button.js and import into the App.js file.


## Why do we used styled-components:
 
Styled components allows you to write plain CSS in your components without worrying about collisions with class names
 
Let's install styled-components:
On your command line inside of your project folder, run the following commands: npm install styled-components
Now, within the component you built, underneath your import React from 'React', you want to add the following line:
 
import 'styled-components' from styled-components
 
-you will get an error if you do not include this line.
 
Example: you can copy and paste the style below when you do it on your own or follow my template.
 
## From your read me: 
 
In your components file:
Create a component called Button.js
 
Copy and paste the code below for your readme where it says styled-components
 
Button is a component - we created the style for button using a function of the styled object, called button and we passed some CSS properties into a template literal.  What is a template literal?  I will let you dive more into that and do some googling.  But in short a template literal are used to define multi line strings, and they provide and easy way to interpolate variables and expressions in strings.  For styled components, a template tags are used to define CSS string.
 
 
## Extending a component's style:
 
You may want to use a component but change it slightly.  Let's look at the delete button.
 
Const Delete = styled(Button)` The (Button)'s styled are being carried over from the const Button and we added additional styles to it for what we want to change.
