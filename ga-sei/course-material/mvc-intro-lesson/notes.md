## Objectives

By the end of this lesson, developers should be able to:

- Give a reason why we neeed single responsibility
- Draw a diagram showing an MVC pattern in express

# Single Responsibility

* Define responsibility: "response" and "able"
* Can you say you are a responsibly pet owner if you do not able to respond to
  the pet's needs? No! What causes you to not be able to respond? One is your
  other responsibilities!

https://blog.cleancoder.com/uncle-bob/2014/05/08/SingleReponsibilityPrinciple.html

* Each piece of your code must be responsible for one thing and one thing only

# MVC

* Model - the model AND the logic we're working with
* View - how the data is to be displayed
* Controller -the glue between the other two layers

## Model 

* The API we've been working with! (pull up code)
* It defines what data we're working with and how it's supposed to interact
  with the rest of the world


## View 

* Manages how the data is displayed to the user

For now we haven't been sending anything fancy, just JSON strings

## Controller

* Manages the interaction between the view and the Model (show code of HTTP
  handler)
