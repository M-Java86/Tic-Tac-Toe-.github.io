# SQL Cheat sheet

This cheat sheet will guide you through the syntax and commands for many common actions in SQL. Refer to it as a guide while you're getting comfortable with the syntax.

## Getting Started

To open Postgres, type `psql` in the terminal.

To get help on Postgres, open it in your terminal, then type one of the following:

| Command | Use |
| --- | --- |
| `help ` | general help |
| `\?` | help with psql commands |
| `\? [command]` | help with a specific psql commands |
| `\? options` | help with a psql command line option |
| `\? variables` | help on special variable |
| `\h` | help with sql commands |
| `\h <COMMAND>` | help with a specific sql command |
| `\l` | lists all databases |

To exit or quit Postgres, type `\q` in the psql prompt.

## Tables and Databases

Postgres uses databases to group tables. Here are some common commands for working with databases and tables:

| Command | Use / Description |
| --- | --- |
| `\l` | list all databases |
| `\c <DB_NAME>` | connect to a database by `<DB_NAME>` |
| `\d` | list all tables |

To create a new **database** we can do one of the following two things:

1. Use the `CREATE DATABASE` command from inside of Postgres:

```
CREATE DATABASE <database_name>;
```

2. Use the `createdb` command from within the terminal:

```bash
createdb <database_name>
```

In order to create a new **table**, we have to define it's schema. We can do this inside of Postgres or by importing a sql file with our schema definition:

1. From inside of Postgres:

```sql
CREAT TABLE <table_name> (
  id SERIAL PRIMARY KEY,
  <fields_and_constraints>
);
```

2. By importing a sql file:

Define your schema file with the file extension `.sql`:

```sql
DROP TABLE IF EXISTS <table_name>;

CREATE TABLE <table_name> (
  id SERIAL PRIMARY KEY,
  <fields_and_constraints>
);
```

Then, import your schema from the command line with:

```bash
psql -d <database_name> < schema.sql
```

Where `schema.sql` is your schema definition above.

The schema should define the fields you want in your table (i.e. the attributes of your entity from your ERD). Fields are defined as [data types](https://www.postgresql.org/docs/9.3/static/datatype.html) and [constraints](https://www.postgresql.org/docs/8.1/static/ddl-constraints.html).

To delete a table or database, we use the `DROP` command:

```sql
DROP TABLE <table_name>;
DROP DATABASE <database_name>;
```

## CRUD

CRUD stands for Create, Read, Update, and Destroy. These represent the 4 actions we can take on any piece of data in an application or database.

| Command | Description |
| --- | --- |
| INSERT | Create a row |
| SELECT | Read / get information for rows |
| UPDATE | Update a row |
| DELETE | Destroy a row |

## Create
To create a row in a table, we use the [`INSERT`](https://www.postgresql.org/docs/9.3/static/dml-insert.html) command.

```sql
INSERT INTO <database_name> (<field_one>, <field_two>) VALUES (<value_one>, <value_two>);
```

* We most provide the necessary fields and values
* Everything must be spelled correctly

## Read
To read data from a table, we query for it using the [`SELECT`](https://www.postgresql.org/docs/9.3/static/queries-overview.html) command, followed by 

To read everything:
```sql
SELECT * FROM <database_name>;
```

To select all fields for a specific value:

```sql
SELECT * FROM <database_name> WHERE <field> = <value>;
```

To select only certain fields:

```sql
SELECT <field_one>, <field_two> FROM <database_name>;
SELECT <field_one>, <field_two> FROM <database_name> WHERE <field> = <value>;
```

## Update

To update existing data, we use the [`UPDATE`](https://www.postgresql.org/docs/9.3/static/dml-update.html) command.

```sql
UPDATE <database_name> SET <field_name> = <new_value> WHERE <field_name> = <current_value>;
```

## Delete
To delete data, we use the [`DELETE`](https://www.postgresql.org/docs/9.3/static/dml-delete.html) command.

```sql
DELETE FROM <database_name> WHERE <field> = <value>;
```


