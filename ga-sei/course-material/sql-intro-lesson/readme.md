[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# SQL

It's time to learn our second database format! SQL is an older form of database
management. Despite it's age, it's still one of the most common and popular
forms of data storage in building web applications - we're going to use it when
we start learning Django!

## Prerequisites

* None!

## Objectives

By the end of this, developers should be able to:

* Contrast relational and non-relational databases
* Create, set up, and seed a PostgreSQL database.
* Execute SQL commands to perform CRUD actions.
* Describe how to represent relationships in SQL databases
* Use JOIN to combine tables in a SELECT

## Introduction

Today we are going to introduce a new (but very old) paradigm for persisting
data in our applications. Previously, we have used MongoDB as our database when
building node applications. In fact, there are many alternatives. In this lesson
we will contrast PostgreSQL, a relational database, with MongoDB, a
non-relational database.

## What is a Relational Database? (10 min / 0:10)

Here's the super dense technical definition. Not required for understanding how
it works unless you want to dive extremely deeply.

> The relational model (RM) for database management is an approach to managing
> data using a structure and language consistent with first-order predicate
> logic, first described in 1969 by Edgar F. Codd, where all data is represented
> in terms of tuples, grouped into relations. A database organized in terms of
> the relational model is a relational database.

- https://en.wikipedia.org/wiki/Relational_model
- https://en.wikipedia.org/wiki/Relation_(database)

What it doesn't mean: That the database has the ability to relate one
value/collection/document to another. All databases (should) have that ability.
In MongoDB, we can use refs or directly embed schemas into other schemas.

It does mean: data is stored using the _relational model_ in mathematics.

Key takeaway: the way data is organized is fundamentally different in a RDB than
in a non-relational DB (also called noSQL sometimes).

### Lets Talk Terminology

![SQL vs noSQL comparison](images/SQL-MongoDB-comparison.png)

**Database:** The actual set of data being stored

- We may have multiple databases for an application

**Database Language:** The language used to interact with a database

- With relational databases, we use SQL
- There isn't a standard language across noSQL databases

> What language do we use to interface with MongoDB?

**Database Management System (DBMS):** The software that lets a user interact
(query) the data in a database

- relational examples include PostgreSQL and MySQL
- **What DBMS did we use when building MERN apps?**

**Database CLI:** A tool offered by most DBMSs that allow users to query the
database from the command line

- we will use one called `psql` for PostgreSQL
- **What was the MongoDB equivalent?**

## Data Compared: Collections -> Tables (10 min / 0:20)

Within a MongoDB database, our data is organized in JSON-like objects. Here's an
example collection:

```js
[
  {
    artistName: "Prince",
    nationality: "American",
    songs: [
      {
        name: "Little Red Corvette",
        yearReleased: 1982
      },
      {
        name: "Raspberry Beret",
        yearReleased: 1985
      }
    ]
  },
  {
    artistName: "Sir Elton John",
    nationality: "British",
    songs: [
      {
        name: "Tiny Dancer",
        yearReleased: 1971
      },
      {
        name: "Your Song",
        yearReleased: 1970
      }
    ]
  }
]
```

In a relational database, this data would be stored in two tables.

**artists**

| id  | name           | nationality |
| --- | -------------- | ----------- |
| 1   | Prince         | American    |
| 2   | Sir Elton John | British     |

**songs**

| id  | name                | year_released | artist_id |
| --- | ------------------- | ------------- | --------- |
| 1   | Tiny Dancer         | 1971          | 2         |
| 2   | Little Red Corvette | 1982          | 1         |
| 3   | Raspberry Beret     | 1985          | 1         |
| 4   | Your Song           | 1970          | 2         |

See also: [Naming style guide](http://www.sqlstyle.guide/).

Note: there's no definitive naming convention for SQL databases. It's far more
important to be consistent across your db. I'm in the "plural table names and
singular column names" camp

### You Do: Database Conversion (10 min / 0:30)

Find a partner and think of a shared interest that can be used to demonstrate a
one-to-many relationship like the example above. Use a model from a previous
project if you need some inspiration. Find a space to whiteboard or draw on
paper and create sample JSON data. Then create tables to represent the same data
as it would appear in a SQL database.

## Relational vs Non-Relational | PostgreSQL vs MongoDB (15 min / 0:45)

Non-Relational or **noSQL** databases have existed in some form for decades,
however their use didn't become wide spread until recently. noSQL databases
became an important alternative to relational databases in the early 2000s as
internet tech companies' data storage needs changed and expanded. With the rise
of social media and online marketplaces like eBay, the amount of data on the
internet boomed. User were not only getting information from the internet, they
were contributing to it. This transition stressed the capabilities of relational
databases due to the volume and variability of user-generated data.

noSQL databases **generally** offer more flexibility and scalability than
traditional relational databases. However, they come with the cost of reduced
consistency.

### MongoDB is non-relational (noSQL)

MongoDB is document based. Meaning, data is organized in collections of related
documents formatted in JSON.

#### Key Advantages

##### Usability

- Documents (i.e. JSON objects) correspond to native data types in many
  programming languages (like mongo + JSON)
- Documents can contain data that varies or is incomplete, no need for
  migrations

##### High Performance

- Documents can be embedded in one another reducing the need for joins.
- Simple queries are very fast

### PostgreSQL is relational (SQL)

PostgreSQL is a relational database management system. There are many others
like MySQL, MS SQL, Oracle, and sqlite. They are all queried using SQL.

#### Key Advantages

##### Consistency

- a lot of data is tabular already, relational databases store it in a similar
  form
- Schemas mean you know exactly what attributes (columns) for each database
  entry (row)
- Schemas can check the type of data being stored to ensure data coming in is
  properly formatted and consistent with other entries.
- writes to a database follow ACID paradigm (atomicity, consistency, isolation,
  durability). More about [ACID](https://en.wikipedia.org/wiki/ACID)

##### SQL Dialect

- SQL is used in most relational databases meaning interaction across different
  relational DBMS is very similar
- SQL is well documented and extremely robust in its utility
- SQL queries are a powerful tool to quickly retrieve data in a large variety of
  ways.

#### Both offer:

##### Automatic Scaling

- Sharding distributes data across a cluster of servers
- Replica sets provide low-latency high-throughput deployments

### So which is better?

**Sorry, there's no easy answer.** While relational and non-relational databases
have some key differences on paper, popular database management systems are
evolving rapidly to meet the needs of a variety of users. You can likely
accomplish the same goals with either a SQL or noSQL database.

In general, noSQL databases are great for unstructured, inconsistent, or
frequently changing data. Think Facebook. Facebook is rapidly evolving and it
needs a flexible way to store and modify existing data. noSQL is a good fit for
medical records too! Patient data may look very different between different
doctors or hospital. To compare or compile this information would be nearly
impossible with a relational database with a strict schema.

Relational databases are great when secure transactions are important. Banking
applications may prefer the rigidity of SQL databases to monitor account data
and transactions. Relational databases are also good at managing inventories and
tracking deliveries. ACID compliance ensures that a process is finished to
completion or not at all. You'll never lose a package or find it in two places.

## Make sure Postgres.app is installed

## Exploring Postgres CLI (20 minutes / 1:05)

Start by "spotlight searching" (`command-space`) for Postgres and launching
`Postgres.app`. Once you see the elephant in your Mac menu bar, you'll know
Postgres is running. This is similar to how we had to run `mongod` before we
could connect to it.

### psql commands

We'll use the `psql` command as our primary means of interacting with our
databases. This is our CLI. Later on we'll use Python or server-side Javascript
to do so in our programs.

Type `psql` with no arguments to connect to a database with the same name as
your username.

Type `psql -d <dbname>` to connect to a specific database. There's usually a
database that already exists called `postgres` so you can type
`psql -d postgres`.

Here's a quick demo. I recommend just watching and taking notes for this part.
Don't try to code along.

```sql
help -- general help
\?   -- help with psql commands
\h   -- help with SQL commands
\l   -- Lists all databases
\q   -- exits psql
q    -- exits a psql list or dialogue

CREATE DATABASE generalassembly; -- Don't forget the semicolon!
\l -- What changed?

\c generalassembly -- Connect to generalassembly database

\d -- Lists all tables

CREATE TABLE students (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR NOT NULL,
  last_name VARCHAR NOT NULL,
  quote TEXT,
  birthday VARCHAR,
  ssn INT NOT NULL UNIQUE
); -- Here we are defining a schema. More on this in just a bit...

\d

SELECT * FROM students;

INSERT INTO students (first_name, last_name) VALUES ('Andy', 'Whitely');
-- This won't work!

INSERT INTO students (first_name, last_name, quote, birthday, ssn) VALUES ('Andy', 'Whitely', 'Two goldfish are in a tank. One says, "Know how to drive this thing?"', 'April 7', 8675309);
SELECT * FROM students;

UPDATE students SET first_name = 'Andrew' WHERE first_name = 'Andy';
SELECT * FROM students;

DELETE FROM students WHERE first_name = 'Andy';
DELETE FROM students WHERE first_name = 'Andrew';

SELECT * FROM students;

DROP TABLE students; -- "drop" means to delete an entire table or database

\d

DROP DATABASE generalassembly;

\q --quits
```

In short...

- Backslash commands (e.g. `\l` ) are commands to navigate psql. These are
  psql-specific.
- Everything else is SQL. The SQL is what actually interacts with the database.
- SQL can be verbose, so you can write multiple lines in the terminal. Make sure
  you terminate your command with `;` always.

> If you're curious as to where exactly your databases are being stored locally,
> enter `SHOW data_directory;` while in psql.

### SQL Syntax

- Whitespace doesn't matter (unless it splits up a word)
- Case sensitive for values (tables, columns, etc), but not commands (select,
  insert, drop).
- Always use single quotes when typing out string values
- Example style guide [here](http://www.sqlstyle.guide/)

## Schema (10 minutes / 1:15)

Every application's database will have one or more tables. You will recall, each
table stores information about a particular model (e.g., `artists`, `songs`).

Each table has a **schema**, which defines and enforces what columns it has. For
each column the schema defines...

- The column's name
- the column's data type
- Any constraints for that column

### Common Data Types

Here are some common data types for SQL databases. They are all, for the most
part, things you've seen before...

- boolean
- integer
- float
- text / VARCHAR
  - VARCHAR is limited length, TEXT is unlimited
- date
- time

> [And many more...](https://www.postgresql.org/docs/9.5/static/datatype.html)

### Constraints

Constraints act as limits on the data that can go in a column.

- e.g., `NOT NULL` and `UNIQUE`

> [And many more...](https://www.postgresql.org/docs/9.5/static/ddl-constraints.html)

### Defining a Schema

Next we're going to build a schema for a database in a sample application. It
can change later on if we need to add / remove tables or columns, but we'll
start with something simple.

Instead of typing this into `psql`, you can write to a `.sql` file and run it,
just like we have with `.js` and `.rb` files.

## BREAK (10 min / 1:25)

## We Do: Building Our Database (10 min / 1:35)

Clone down and follow the instructions in the
[sql library exercise]

## You Do: Basic SQL Queries (15 min / 1:50)

Complete the queries in `basic_queries.sql` in the library_sql repo.

## Relationships in SQL / SQL JOINs (20 min / 2:10)

One of the key features of relational databases is that they can represent
relationships between rows in different tables.

Going back to our library example, we have two tables: `books` and `authors`.
Our goal now is to somehow indicate the relationship between a book and an
author. In this case, that relationship indicates who wrote the book.

You can imagine that we'd like to use this information in a number of ways, such
as:

* Getting the author information for a given book
* Getting all books written by a given author
* Searching for books based on attributes of the author (e.g., all books written
  by a Chinese author)

### One-to-Many

How might we represent this information in our database? For this example, let's
assume that each book has only one author (even though that's not always the
case in the real world).

![one_to_many](images/one_to_many.png)

## Joins

To `SELECT` information on two or more tables at ones, we can use a `JOIN`
clause. This will produce rows that contain information from both tables. When
joining two or more tables, we have to tell the database how to match up the
rows. (e.g. to make sure the author information is correct for each book).

This is done using the `ON` clause, which specifies which properties to match.

### Writing SQL JOINS

```sql
SELECT id FROM authors where name = 'J.K. Rowling';
SELECT * FROM books where author_id = 2;

SELECT * FROM books JOIN authors ON books.author_id = authors.id;
SELECT * FROM books JOIN authors ON books.author_id = authors.id WHERE authors.nationality = 'United States of America';
```

## You Do: Books and Authors (15 min / 2:25)- James

See advanced_queries.sql in the
[sql library exercise]
exercise.

## Aside: Less Common Joins

There are actually a number of ways to join multiple tables with `JOIN`, if
you're really curious, check out this article:

[A visual explanation of SQL Joins](http://blog.codinghorror.com/a-visual-explanation-of-sql-joins/)

## Bonus: Many-to-Many Relationships

We're not going to go in-depth with many-to-many relationships today, but lets
go over a simple example:

Consider if we wanted to add a categories model (e.g. fiction, non-fiction,
sci-fi, romance, etc). Books can belong to many categories (i.e. a book might be
a fiction/romance, or a history/non-fiction). And a given category might have
many books.

Because of this, we can't put a book_id column on categories, nor a category_id
column on books, either way, we might have more than one value in that field (a
no-no in terms of performance).

To solution is to create an additional table, which stores just the
relationships between the two tables. Such a table is called a join table, and
contains two foreign key columns.

In our example, we might create a table called 'categorizations', and it would
have a book_id and category_id. Each row would represent a specific book's
association with a specific category.

![many_to_many](images/many_to_many.png)

## Closing/Questions (5 min / 2:30)

* What is the distinctive feature of a relational database?
* How is information stored in a relational database?
* What are the different types of relations that exist in a relational database?
* How do we indicate a one-to-many relationship in a database?

## Practice

The following resources are a great way to gain further familiarity with SQL. We
fully expect this to be a challenge.

- [Code School Try SQL](https://www.codeschool.com/courses/try-sql)
- [SQL for Beginners](https://www.codewars.com/collections/sql-for-beginners/):
  Created by WDI14 graduate.
- [The official PostgreSQL Documentation](https://www.postgresql.org/docs/9.3/static/index.html)
  is also very good, in particular:
  - [The preface](https://www.postgresql.org/docs/9.3/static/preface.html)
  - [The official tutorial](https://www.postgresql.org/docs/9.3/static/tutorial.html)
  - [The overview of SQL](https://www.postgresql.org/docs/9.3/static/sql.html)

## Additional Resources

* [Postgres Guide](http://postgresguide.com/)
* [SQL Zoo](https://sqlzoo.net/)
* [W3 Schools SQL tutorial](https://www.w3schools.com/sql/)
* [SQL Course](http://www.sqlcourse.com/)

## Contributors

Original content from [DC at 7814bf](https://git.generalassemb.ly/dc-wdi-python-django/sql-intro/commit/7814bf30407826a9884a14ed39827f8f833deec6). Original contributors can be found in that repository's history. Recent contributors can be found in this repository's history.

## [License](LICENSE)

1. All content is licensed under a CC­BY­NC­SA 4.0 license.
1. All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.

[sql library exercise]: https://git.generalassemb.ly/ga-wdi-exercises/library_sql
