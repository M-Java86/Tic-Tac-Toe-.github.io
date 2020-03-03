# Loading Test Data

## Lesson Objectives
* List 3 benefits that loading test data provides
* Create a script with functionality to remove all records from the database
* Create a script with functionality to create records in a database

## Framing
During the process of building our applications, it is often helpful to programatically load test data into our database in order to quickly get a set of data to work with.  This will save us the time of having to manually add each record using the UI or a tool such as Postman.

Having a set of sample test data can help us verify that we have our models, controllers, and views wired up correctly. For example, if we are building out an index view for a resource that will display the records in a list, it is useful to have a couple of sample records populated to verify our application is retrieving the records from the database and correctly displaying them in our view.

Our test data scripts can also be helpful when preparing for a demo. We simply need to run the script which will first get rid of all the data that resulted from angrily banging on the keyboard when debugging and then load a set of clean test data into our database.

One other benefit of having a script that loads a sample set of data is that other developers can quickly get up and running with using our application.


## Creating the test data script

With our current application structure, we can reuse the functions we created in our models in order to delete records from the database as well as create new records in the database.  We will create our `testData.js` file within our `models` directory.

### Import the APIs
First we import the necessary APIs we created in our models directory.

### Clearing the database
To get a fresh start for our data, we want to remove all records currently in the database. 

Mongoose has a `deleteMany()` method that we can use to remove all records of a particular resource. As with our other mongoose methods/queries, we want to wrap this in our own function in the resource's respective model file.

### Creating new records
Once the database has been cleared, it is time to create some new records.

Use the existing API function to create new records in the database.  You will need to pass the function an object containing the properties that your mongoose Schema expects for the particular resource you are creating.

### Exiting the process
We add `process.exit()` to our script file at the point that we are sure all of our records have finished being created in the database (within a `.then()`).  This will exit the script and return control to the user in the terminal.

## Running the test data script

To execute our test data script, we can simply run the following command:

```
node <path/to/test/script>
````
For example: 

```
node models/testData.js
````