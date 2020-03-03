### SQL intro and intro exercise


-noSQL databases generally offer more flexibility and scalability than traditional relational databases. However, they come with the cost of reduced consistency.

# Objectives
-what is a database - all collection of any related information
-phonebook, facebook's user base, list of of your best Friends
-collection of information that can be stored in different ways
-what SQL is
-how it is used
	
#  WHY SQL:
--when would you need to structure your data:



Example:  Let's say you have an object:
-to query for the first and last names using mongoDB:
```js
 const inventors = [
      { first: 'Albert', year: 1879, passed: 1955 },
      { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
      { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 }]

```
db.inventors.find()....

Let's say we query for the inventors's first and last names, our code would return an error because the first object does not contain 'last' as a key pair value.

-With SQL we could query for the data have get what we need regardless of missing data, it would just return NULL
-Data is generated to have the same schema

# SQL
(Terminology and Usage)
    Inside of TABLE:
	KEYS: when we are creating a table, we need a special column called the primary key, which unique defines the row in the database, for example student id, use to identify a special row.  
	*Primary keys can come in handy - use to differentiate
	*Always going to be unique for each row in the table
	*Can be a number of a string of text, for example, an email address can also be the PK, so can 	the date
	- Store data: define a table, insert specific pieces of information into that table
	- Example of a surrogate key - no real value for example: employee ID
	- Natural key - like an SSN - key that has a mapping value, has a purpose in the real word, not just in the database
    -Foreign key- an attribute on the DB table that you can store on the DB table that link us to another DB table

	More on Primary Keys and Foreign Keys:
    -stores the PK of a row on another DB table
	- A FK is a PK of another table's
	- Two columns with PK's is the called composite key
e 	ROWS: individual entries
	COLUMNS: define a single attribute


## Exploring PostgreSQL

Let's walk through together, make sure psql had been downloaded, for reference refer to the getting_postgres.md doc.

Some terminology we should discuss:
-PRIMARY KEY: these are KEY columns used to uniquely identify a row.
-UNIQUE columns have a different value for every row.  This is similar to PRIMARY KEY except a table can have many different UNIQUE columns
-NOT NULL columns must have a value. Attempts to insert a row without a value for a NOT NULL column will result in a constraint violation and the new row will not be inserted.
-DEFAULT columns take an additional argument that will be the assumed value for an inserted row if the new row does not specify a value for that column

##  In class examples of:
-Creating a table

-CRUD

-joins
```
SELECT * column_name
FROM table_name

CREATE table_name(
id INTEGER,
name TEXT,
email TEXT
);

deleting an entire row:
DELETE FROM table_name
WHERE id = 1

INTO INTO table_name(id, name, email)
VALUES('1', 'Destin', 'destin@gmail.com')

ALTER TABLE instructors
ADD COLUMN interests TEXT

UPDATE TABLE instructors
SET name = 'Destin Flyod'
WHERE id = 1;
```
### JOINS:


table name: instructors


| id   | name    | interests |
| ---- |:-------:| ---------:|
| 1 |    Destin  |  Cooking  |
| 2 |    Noah    |  Biking   |
| 3 |    Stanley |  Reading  |


table name: associates


| id   | name    | interests |
| ---- |:-------:| ---------:|
| 1 |    Denise  | 	Biking   |
| 2 |    Supriya |  Running  |
| 3 |    Gabby   |  Yoga     |


Exampe of an inner join statement
```
SELECT * FROM instructors
INNER JOIN associates
ON instructors.interests = associates.interests
```