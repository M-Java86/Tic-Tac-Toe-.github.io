# Domain Modeling & ERDs

## Learning Objectives

- Draw an Entity Relationship Diagram (ERD)
- Identify and diagram one-to-one, one-to-many and many-to-many relationships between data entities
- Distinguish between entities and attributes
- Discuss data normalization needs and techniques

## Framing

Have you heard the phrase,

> Measure 3 times, cut once?

When we're building a large application, it makes sense to plan as much as we can how the app will end up being structured. Once the app is built, it can be difficult to go back in and restructure the app in significant ways, as many of you maybe found during your projects. When we add user data and databases to our application, changing the structure of our app can become nearly impossible.

Similarly, if we have a really large application, it can be difficult to keep track of what has been modelled in our application and what will require saving some new data if we're adding a feature. So not only do we need to measure 3 times before starting to build out app, we also want some way of keeping track of what those measurements were as we're building.

This is where Domain Modelling and Entity Relationship Diagrams come in.

## Domain Modeling (20 minutes / 0:20)

Domain Modeling allows us to outline the data values that we need to persist.
- We only consider the specific data our application needs, but not the behavior of the application
- A domain model in problem solving and software engineering is a conceptual model of all items and topics related to a specific problem
- It describes the various entities, their attributes, roles and relationships, plus the constraints that govern the problem domain

The big takeaway here is that domain modeling **does not describe solutions to the problem**, our application code will do that. Our domain model will represent our understanding of the problem, which will translate to an understanding of how our data needs to be structured.

### ERDs

An ERD -- or **Entity Relationship Diagram** -- is a tool we use to visualize and describe the data relating to the major entities that will exist in our programs.
- Ultimately lends itself to planning out and creating our database table structure
- It allows us to outline the data in our application

### Example: An Orchard

Take a minute to look through the below diagram. Note down any observations you have.

![orchard example](images/orchard.png)

What are some of your observations?
- The squares represent our entities and are filled with the attributes associated with our entity.
- The arrows between the squares indicate how the entities relate to one another.

### Relationships

![relationships](images/sample-relationships.png)

**One-to-one:** A Country has one Capital City
- Usually denotes that one entity should be an attribute of the other
- Usually separated for physical space considerations

**One-to-many:** A Location has many Cohorts
- The most common relationship you will define in WDI.

**Many-to-many:** A Membership has many Assignments through Submissions, and an Assignment has many Memberships through Submissions.
- Requires a join table. In this example, that is Submissions.

#### ERD Symbols Guide
<details>
  <summary> Legend </summary>
  <img src="./images/erd-notation.png">
</details>

### Example: Garnet

![garnet_erd](images/Garnet_ERD.png)

ERDs grow more complex the larger an application becomes. They are a crucial tool when planning and developing, as well as iterating on or improving an application. The instructors reference the above diagram all the time!

### You Do: Library ERD (15 minutes / 0:35)

> 10 minutes exercise. 5 minutes review.

Come up with an example ERD for an application that manages a library:
* What entities does a library have?
* What attributes do those entities have?
* How do these entities relate to each other?

### We Do: ERD's for Web Pages in the Wild (15 minutes / 0:45)

> 10 minutes. 5 minutes review.

Count off in to groups. Together with your group make an ERD, but this time for a real world application. Make an ERD for the option that matches your group number below...

1. Amazon
2. Facebook
3. Reddit
4. ESPN

## Break (10 minutes / 0:55)
