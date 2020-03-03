[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Where In The World Is Carmen Sandiego?

![carmen-sandiego](https://camo.githubusercontent.com/b50a6155810da803a9b420ae0bd403317afd341d/687474703a2f2f692e67697068792e636f6d2f31336e38747852386339554448472e676966)

Use SQL to find Carmen Sandiego!

We're going to use what we've learned already about searching with SQL commands
and apply it to chase down and capture an elusive and world-reknowned thief:
Carmen Sandiego. Follow the clues and use the interwebs. As you work, write down
both the SQL commands/queries you used and your answers to the clues. Your
ultimate goal is to figure out where Carmen is headed so we can catch her and
bring her in.

## Instructions

1.  Fork and clone this repository.
1.  Set up the SQL database for this exercise (instructions below).
1.  Work through the prompts in `clues.sql`.
1.  Make a pull request.

The prompts for this exercise are available in [`lib/clues.sql`](lib/clues.sql).
Work through each prompt adding your SQL queries below.

Make a pull request on this repository to turn your work in.

## Setup

Before you get started, create a new database called `carmen` and load the
provided data in `world.sql`:

```sh
# Enter psql:
psql

# Create database:
CREATE DATABASE carmen;

# Connect to carmen:
\c carmen

# Load world.sql:
\i path/to/world.sql
# (replace /path/to/world.sql with the actual path to the file)
```

Next, use the clues in [`lib/clues.sql`](lib/clues.sql) to create the
appropriate SQL queries to help you find Carmen. Finally, tell us where she's
heading!

You can write your SQL queries directly in the `clues.sql` file. Then, from within the `psql` CLI just execute the file with `\i lib/clues.sql`

## Additional Resources

- [PostgreSQL tutorial](http://www.tutorialspoint.com/postgresql/)
- [PostgreSQL official documentation](http://www.postgresql.org/docs/)

## Contributors

Original content from [DC at 10697f](https://git.generalassemb.ly/dc-wdi-python-django/sql-carmen/commit/10697fe8b6b3fb640c1b02814cad2a161a954961). Original contributors can be found in that repository's history. Recent contributors can be found in this repository's history.

## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
