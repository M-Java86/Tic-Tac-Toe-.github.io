[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Ruby Lab Day: Code Retreat

## Objectives

By the end of this, students should be able to:

- Pair with other developers under a variety of constraints.
- Explain the value of team communication in their own words.
- Solve a problem in multiple ways by "spiking".
- Choose an implementation strategy for a problem using lessons learned from
    spikes.

## Instructions

This code retreat will consist of several pairing rounds. Try to pair with
someone new each time. For each round, you and your pair will work on
implementing Conway's Game of Life in ruby (see below).

<!--
Instructor note: Code should be deleted between each round. It's fun to watch
the looks on student faces when they hear this the first time.

(EVIL LAUGH)

For more ideas on challenges, check out
http://coderetreat.org/facilitating/activity-catalog
-->

After a brief introduction, we will whiteboard the rules. Then, we'll complete
the following activities. Each activity will be followed by a retro and a break.

These times are subject to, and most likely __will__ change.

1. Caveman Coder (45 minutes)
1. Navigator-Driver (30 mintues)
1. Silent Coder (15 mintues)
1. Flat Files (30 mintues)
1. Sandi's Rules (30 minutes)
1. Git Happens (30 minutes)
1. Hot Potato (30 minutes)
1. Many-to-one (30 minutes)
1. Free-for-all (60 minutes)
1. Retro of the Day (15 minutes)

Before we get started, let's review the purpose of a code retreat and understand
the problem we'll be solving.

## Code Retreat

A code retreat is a day-long intensive practice, focusing on fundamentals. Pairs
of programmers tackle the same problem multiple times under different
constraints. The constraints are chosen to emphasize the value of modern
development practices like test-driven development, pair programming, patterns,
and iterative development.

Corey Haines explains the goals of a code retreat in [Cleveland Code Retreat
Introduction on Vimeo](http://vimeo.com/18955165).

## Conway's Game of Life

The Game of Life, also known simply as Life, is a cellular automaton devised by
the British mathematician John Horton Conway in 1970.

Visualization of the Game of Life:

![Alt Conway's Game of Life Visual](https://media.git.generalassemb.ly/user/16103/files/1cc2f980-14ca-11e9-92f2-bf6ae79c8578)

[Game of Life Interactive Simulation](http://pmav.eu/stuff/javascript-game-of-life-v3.1.1/)

<!--
Image from Population Dynamics(http://www.slideshare.net/pelikan/stars2012-finalpresentation)
-->

The "game" is a zero-player game, meaning that its evolution is determined by
its initial state, requiring no further input. One interacts with the Game of
Life by creating an initial configuration and observing how it evolves.

The universe of the Game of Life is an **infinite two-dimensional orthogonal
grid** of square cells, each of which is in one of two possible states, live or
dead. Every cell interacts with its eight neighbors, which are the cells that
are directly horizontally, vertically, or diagonally adjacent.

### Rules

At each step in time, the following transitions occur:

1. Any live cell with fewer than two live neighbors dies, as if caused by
    underpopulation.
1. Any live cell with more than three live neighbors dies, as if by
    overcrowding.
1. Any live cell with two or three live neighbors lives on to the next
    generation.
1. Any dead cell with exactly three live neighbors becomes a live cell.

The initial pattern constitutes the seed of the system. The first generation is
created by applying the above rules simultaneously to every cell in the seed.
**Births and deaths happen simultaneously**, and the discrete moment at which
this happens is sometimes called a `tick` (in other words, each generation is a
pure function of the one before). The rules continue to be applied repeatedly to
create further generations.

Here is a visual representation of what is happening:

![population-dynamics-in-conways-game-of-life-and-its-variants-9-728](https://cloud.githubusercontent.com/assets/10408784/17438008/b3013c1a-5aee-11e6-888c-65946800ebcd.jpg)

### Tips & Tricks

You are **not** expected to finish the exercise in any particular round.

Even though your solution should work with an infinite grid, it can be
beneficial to start with a large, finite grid. Your solution should work for a
grid of at least 80x80 cells.

You may want to solve the problem for an infinite grid, but initialize the game
with a finite grid so it can be displayed onscreen.

Your solution should work with any arbitrary starting arrangement of dead and
alive cells. Try initializing each tile randomly with either an alive or a dead
cell.

The hardest part might be getting started. Decide what class you want to use to
represent cells or tiles. Then, start adding small features to your class one
at a time.

For pairing exercises, try using one computer, and pass it between yourself and
your pair. Work together and in sequence. You and pair should not be working in
separate files at the same time.

## Bonus

If you're looking for extra challenge or practice once you've completed the
above, try pairing with someone using the following constraints:

- Small methods. No methods longer than four lines.
- No mutation of state allowed. Once a variable is assigned, it cannot change.
- No conditionals. Do not use `if/else` and friends.
- No loops.

If you have a working solution you like, post it to GitHub. It's great for
employers to see you tackling such a classic problem. Work with a classmate to
refactor your code using
[SOLID](http://butunclebob.com/ArticleS.UncleBob.PrinciplesOfOod) and [The Rules
of Simple Design](https://ronjeffries.com/xprog/classics/expemergentdesign/).

## Additional Resources

- [Do code retreat together, remotely, or alone](https://cyber-dojo.org/)
- [A few git tips you didn't know about](http://mislav.uniqpath.com/2010/07/git-tips/)
- [Fork A Repo - User Documentation](https://help.github.com/articles/fork-a-repo/)
- [Syncing a fork - User Documentation](https://help.github.com/articles/syncing-a-fork/)
- [Visual of Rules: 1](http://abyss.uoregon.edu/~js/images/life_rules.gif)
- [Visual of Rules: 2](https://qualityswdev.files.wordpress.com/2011/07/gameofliferules11.jpg)
- [Interactive Version of Game of Life](http://pmav.eu/stuff/javascript-game-of-life-v3.1.1/)

## [License](LICENSE)

1. All content is licensed under a CC­BY­NC­SA 4.0 license.
1. All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
