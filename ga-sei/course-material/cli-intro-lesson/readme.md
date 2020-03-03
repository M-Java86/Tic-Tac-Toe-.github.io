# The CLI (Command Line Interface)

## Learning Objectives

- Define and explain the strengths and weaknesses of GUIs and CLIs
- Learn how to access the terminal and break down its components
- Describe the file system and how it relates to the CLI
- Introduce common commands and list unsafe ones
- Learn how to find more information on using commands
- Introduce Bash and how to customize the command line

## Framing (10 minutes / 0:10)

The majority of our interactions with computers is through a graphical user interface, or a GUI. A GUI is a great tool, it adds a level of user experience that allowed computers to become more popular and mainstream.

While the GUI is perfect for the average computer user, there are drawbacks for power users:

Some of those hindrances include:
* GUI's can be slow
* GUI's can be resource intensive, causing the gui to freeze which means you could lose data or it can cause other applications to stop working
* GUI's lack flexibility, you can only use a gui for it’s intended purpose
* GUI's require manual effort, pointing and clicking, require that you take your hands off the keyboard


You all are on your way to becoming full-stack developers, on your journey to that point you will need to make the most of your time, effort and to avoid common issues that come with using a GUI. So today we will be learning the command line.

### What is the Command Line Interface or CLI

It is a tool to interact with your computer without a GUI, that allows you more abilities than a GUI has but with a higher learning curve. You are able to type commands/actions into a terminal and the computer will execute those commands or give you a fairly descriptive error regarding why it did not work.


> The [unix philosophy](https://en.wikipedia.org/wiki/Unix_philosophy) says "make each program do one thing well".

This concept is not unix specific, it carries itself in to other aspects of programming as well.

You can create files, you can move between directories, you can connect to remote machines, you can pull code from a repository, you can scan ports, you can send http requests.

Similar to how people make code and share it for things like Bootstrap, or Ruby on Rails, or any other open source technology, software engineers create command line tools that make completing task on the command line easier and then share them with other developers.

Then developers like ourselves can install these tools and use them. We will do that in a moment.

## CHECK FOR UNDERSTANDING/QUESTIONS (Hand 1 - 5)


#### Turn & Talk (10 minutes / 0:20)
Given the information I just gave you regarding the CLI and what you learned from completing the pre-work. I want you to discuss for 5 minutes the following with your classmates in your row.

* How is the CLI different from the GUI?
* What do you like / dislike about using it?
* Compared to a GUI, in what ways might using the CLI be better or worse for developers?

### Benefits of the CLI (10 minutes / 0:30)

**Power/Speed.**
Most tasks can be completed faster with the cli, features like tab completion, command history, piping contribute to this

**Precision.**
Each command does only one thing and we can read them and understand what they do before we run them

**Repeatability / Scriptability.**
These commands can be saved, reused by others.
What you did during Installfest was run a script that we shared with you!

**Tools.**
There are a lot of open source tools that you can use on the cli, you can install them with cli package managers like Advanced Packaging Tool (apt) or homebrew. Because each tool does one specific thing, it is possible to chain multiple tools together to automate processes.


**Debugging.**
The errors are better, the errors that you get from a GUI can be unhelpful while cli errors are generally more thought out and descriptive.

Not helpful:

![unhelpful error](./assets/unhelpful-error.png)

![error error](./assets/error-error.jpg)

Helpful:

![helpful error](./assets/helpful_error.png)

## CHECK FOR UNDERSTANDING/QUESTIONS
How do people feel about their level of understanding regarding what the CLI is, not using it, just their understanding of what it is, it’s benefits and it’s downsides.

## REAL EXAMPLE OF CLI USAGE

## CLI Basics (15 minutes / 0:45)

### The Terminal and the Shell

How do we get at this text-based interface from our GUI desktop? We run what's
called a terminal application (also often referred to as a terminal emulator).
The default on OSX is `Terminal.app`. When you open a new Terminal window, the
Terminal app will call a program called a **shell**.

A shell is a program that takes commands, passes them to the operating system
and returns any output or errors. The default shell used by terminal is called
**Bash**. There are other shells but all operate very similarly.

Let's fire up our terminals and get exploring!

### Getting Oriented

First, open Terminal by clicking the icon on your dock, finding the application
in Applications > Utilities > Terminal, or using Spotlight (**&#x2318; + SPC**)

You should see something like the following prompt:

![Command Line Prompt](./assets/cl_prompt.png)

The prompt is the shell asking for input; when you see `$ <something>` in
documentation, it generally means, input this command into a shell.

If you have a terminal open but do not see a prompt, that means that the shell
is not ready to receive input.

Typing a random string of characters and hitting enter will produce a message
`-bash: <your-random-string>: command not found` ![Command not
found](./assets/command_not_found.png)

> What is a command?

A command is a program. Some come built into the shell and provide the basics
for interacting with the operating system and some are written by programmers
(like you!) to provide further functionality.

## Break (10 minutes / 0:55)

## File System (45 minutes / 1:40)

In the next section of this lesson, we're going to work through a couple of
commands that you'll end up using almost every day as a developer. The commands
can be divided into two kinds of tasks: Navigating around the file system and
working with files and directories.

### Navigating the File System

The first set of commands we'll cover are for navigating: getting from one
directory to another.

You may have seen these commands before (maybe in the prework):

| command | definition |
| --- | --- |
| `pwd` | print working directory |
| `ls` | list files and directories |
| `cd` | change directory |

How do these relate to navigating?

If we're inside the terminal and we want to travel through our file system to a
specific directory (i.e. `traverse`), we first need to know where we are. That's
what we use `pwd` for: printing the directory we're in currently.

Once we know where we are, it makes sense to figure out where we can go from
here. We use `ls` for that: listing all the files we can work with directly and
the directories we can move to.

To move from our current directory to another directory, we use the `cd`
command. `cd` moves us from our current directory to another directory that we
supply a path to.

## Paths

### What is a 'path'?

A path is the description that tells us (or a computer) where a file or directory is on our computer.

Our terminal (shell) is always working out of a single path at a time. Commands that are run will take action in the current path (directory) unless we tell them to do otherwise.

### Relative vs Absolute Paths

All paths point to a single file or directory, but we can write paths to be either **relative** or **absolute**.

#### Absolute Paths

An absolute path will always tell us exactly where the file or directory is. An example in the real world would be a mailing address:

```
GA
2nd Floor, Ponce City Market
675 Ponce De Leon Ave NE
Atlanta, GA 30308
USA
Earth
Solar System
Milky Way
```

Absolute paths start with a `/` and go from top down (least specific to more specific):

```bash
/Milky_Way/Solar_System/Earth/USA/Atlanta/GA
# or a realistic example
/Users/joehacker/ga-sei/projects/project-2
```

The first slash essentially means "start at the root of the computer's file system".

Some absolute paths instead start with a `~`. This is a shortcut to the absolute path of our home directory. So the above absolute path could also be written as

```
~/ga-sei/projects/project-2
```

#### Relative Paths

Relative paths are interpreted starting from the directory we're in (aka the current working directory). They are similar to giving directions from a starting point, for example:

`Go to the end of the street, turn left, go to the 2nd light, turn right and it is the 3rd house on the left.`

The above directions only work from a specific starting point. It is the same with UNIX relative paths.

Relative paths start with anything but a slash `/` or a tilde `~`.

So if I were in my home directory, the path to my work directory could be written

```bash
ga-sei                     # relative
~/ga-sei                   # absolute
/users/joehacker/ga-sei/   # absolute
```

If I were in a different directory, then the relative path would point to an entirely different directory/file.

Periods or dots are special in relative paths:
* One dot means "relative to the current directory"
* Two dots means "go up to the parent directory"

So if I'm in `~/ga-sei` then the relative path `../personal_projects` means "go up one level to the code directory, then down into personal_projects".

We can use multiple `..` to go up multiple levels:

`../../documents/top_secret/lol_cats/favorites/so_many_kittenz.jpg` would go up two levels, from `~/ga-sei` to `~` (my home directory), and then down into my favorite lolcat picture.

#### Going up

If you do an `ls -all` you will notice several dots at the top of the list of file contents.

![ls all](./assets/lsall.png)

> Can you guess what these mean?

Try typing `cd ..` and seeing what happens.

> What if you want to go up more than one level, without repeating the same command again?


## CHECK FOR UNDERSTANDING/QUESTIONS (Hand 1 - 5)


#### Go Explore

Using the commands you've learned, go explore your file system for a few
minutes. When you open a new terminal window and run `ls`, where in the file
system are you? What do you see? Compare that to opening a new window in
`Finder`.

#### [You Do: Directory Tree](https://git.generalassemb.ly/pages/dc-wdi-fundamentals/directory-tree/) (15 minutes)
> 10 minute exercise, 5 minute review

### Working with Files and Directories

Now that we can navigate the file system, it's time to chart our own paths (pun
intended).

The commands we'll be covering next are:

| Command | Description |
| --- | --- |
| `mkdir` | make a new directory |
| `rmdir` | remove a directory |
| `touch` | create a new file |
| `rm` | remove a file |
| `mv` | move a file or directory |
| `cp` | copy a file or directory |

#### SEI Environment (5 minutes)

To get your hands dirty, use the commands above to build out the following
folders and files. This will be where you store all your work from WDI.

```sh
ga-sei
  ├── homework
  ├── labs
  ├── lessons
  │   └── cli_intro.md
  ├── projects
  └── sandbox
```

**Pro Tip:** Use brackets to substitute paths together. Lets say you want to
create a markdown file (extension `.md`) for a couple of lessons. One way to do
this would be to run the commands one-by-one:

```sh
touch lessons/cli_intro.md
touch lessons/git_intro.md
touch lessons/html.md
touch lessons/css.md
```

That would absolutely work, but you could make do it in one command:

```sh
touch lessons/cli_intro.md lessons/git_intro.md lessons/html.md lessons/css.md
```

That would also work, but we can make it a more succinct command by using
substitution:

```sh
touch lessons/{cli_intro,git_intro,html,css}.md
```

The above command will create the same set of files, but in one short command.
It also works with directories! The list of file or directories must be
separated by commas with *no spaces*.

### Output and Side Effects

Some commands have **output**, which is displayed on the screen for us to see.
Examples of commands that have output are...

* `pwd`
* `ls`
* `brew install tree`.

Other commands' primary purpose is to execute some **side-effect**, or in other
words, to make some change that isn't necessarily printed in the Terminal after
hitting enter.

Often times, a command whose main job is a side effect may not provide any
output if it succeeds. If there is an error, it will provide output (we would
get an error if there were a problem so no news is good news).

> What's an example of this we've already seen?

Another example would be `touch`. This command creates a file in an indicated
location. We do not, however, get a confirmation it did this immediately after
hitting enter.

> Related to touch, what do you think `mkdir` does?

Some commands may provide both an output and side effects.

### Command Syntax

Commands generally consist of three parts

1. Command
2. Options
3. Arguments

The **Command** is the first word you type into the CLI (e.g. `ls`, `cd`, or
`touch`). Think of it as the "verb" which indicates what we want to do.

Next come the **Options**, sometimes called flags or switches.
* Sometimes you won't be using any options. Other times you may use several
* By convention, options will start with a dash or two; one if the option is a
  single letter and two for the "long" name
* Sometimes an option takes an argument. In these cases, the argument comes
  right after the option

Finally come the **Arguments**. These are "targets", or what you want to do the
action to. These could be file names, URLs, etc.

### Common Patterns

The commands entered into the CLI are often in one of the following forms..

- `doSomething --how toFiles`
- `doSomething --how sourceFile destinationFile`

Where **doSomething** is, in effect, a verb, **how** an adverb (for example,
should the command be executed "verbosely" or "quietly") and **toFiles** an
object or objects (typically one or more files) on which the command should act.


###Exercise
Not all commands follow this pattern, but many do.

Let's take a look at something we did for installfest.

```
$ brew install tree
```

When we type this command and hit enter, we're saying, "Computer, we're about to
do something with homebrew. The thing were going to do is install something.
What we want to install is `tree`.

### INTERACTIVE QUESTIONGS
> Together, using the information that we just went over, let's focus on identifying the
command, the option/flag and the target/argument for the next 5 command line items.
  1. `$ touch index.html`
  2. `$ ls -al`
  3. `$ cp index.html index2.html`
  4. `$ brew install git`
  5. `$ mkdir -p lessons/sandbox`

## Getting Help

There are three general ways to get help with a command.

* Add `--help` or `-h` to the end of the command (e.g., `brew --help`).
* Use the manual - or `man` - tool (e.g., `man brew`).
* Google!

The `man` will display the man pages using a program `less`. Use the arrow keys
to navigate. Type `q` to quit. Use `/` to search and `n` and `p` to go to the
next or previous search result

## Break (10 minutes / 1:50)

## Common Command Teachbacks (25 minutes / 2:15) (Students Work together and then answer the question for the class)

> 15 minutes preparation. 10 minutes review.

Form groups of 3 and spend 10 minutes researching and preparing a short demo of
your command. Focus on...

* What it does.
* Common uses.
* Common flags or arguments.
* Any "gotchas" (i.e., things we should be aware of when using this command)?

**Tip:** use the `man` pages!

### Commands

1. `ls`
2. `cd`
3. `touch` and `mkdir`
4. `cp`
5. `mv`
6. `rm`
7. `sudo`

## Unsafe Commands (5 minutes)

### `sudo`

`sudo` -- or "super user do" -- runs the command that follows as the super user
(i.e., 'root' or 'admin'). That means your computer will not prevent you from
running the command and may not even confirm if this is what you actually want
to do. This is of particular concern when the command may have destructive
effects.

> Generally, you shouldn't need to run commands with `sudo` in this course. If
> you're not sure, ask an instructor.

### `rm`

`rm` -- or "remove" -- deletes files with no confirmation. There is no `trash`
to recover removed files from.  So use `rm` with caution.

You should especially use `rm -rf` with caution.

> Based on your knowledge of flags, what does `rm -rf` do?

## Keyboard Shortcuts (5 minutes)

The next three points are reasons not to hold down the arrow or delete keys.

### `ctrl-c`

Cancel whatever you were typing before. Abort!

### `ctrl-e`

Move cursor to the end of the line.

### `ctrl-a`

Move cursor to the beginning of the line

### The up and down arrows

Cycle through previous commands

### Tab completion

When typing a command that has a file as an argument, like `cd`, type only the
first few letters and hit the TAB key.

### Clear the screen

- ctrl-l
- command-k
- `clear`




## Closing (15 minutes / 2:30)

The commands we've covered in this lesson will probably account for 80% of your
CLI usage. On the one hand, that means that learning them well and getting
comfortable is really important; on the other hand, it's not a big universe of
commands to learn and memorize.

Regardless of how much experience with the command line you have coming in to
this class, your next step should be to get really comfortable with it - we're
going to spend a lot of time in the command line over the next 12 weeks. That
can mean practicing these commands more, almost like you would practice scales
from music or drills from sports. That can also mean learning more about what
else is capable with these commands.




### Go figure some stuff out

Getting comfortable in the command line takes practice. Once you do get
comfortable, you'll find it possible to be extremely productive by just adding a
couple of commands together.

The installfest script is a perfect example - your instructors wrote a single
shell script that you can run to totally set up your computers for WDI. Ask your
instructors about other shell scripts they wrote at previous jobs.

For the remainder of class, here are some things you can go try to figure out
how to do to get more comfortable with the command line:

- **Review the commands we've covered in more depth.** Go through each and
  review the help and/or `man` page for each command. Type `man <some_command`
  (i.e. `man ls`) to view the man page. Use your arrow keys (up and down) to
  navigate through the man pages and `q` to quit.
- **Practice each command.** Over time, these common commands will become part
  of your muscle memory. Get there sooner by practicing. Navigate to your
  `sandbox/` directory and create a `cli-practice/` directory. `cd` into your
  new directory and practice the above commands 20 times each.
- **Customize your command line.** The sky is the limit here! You can change the
  font, the theme (colors), add emojis to your prompt, use a different terminal
  (many of your instructors use iTerm) or even use a different shell (Bash is
  the default shell, some of your instructors use
  [zsh](http://code.joejag.com/2014/why-zsh.html).
- **Create Bash profile aliases.**  You can alias common commands in bash. One
  common alias you'll see a lot is an `ll` command that will perform an `ls -a`
  (list all files). See if you can figure out how to create that alias (google
  is your friend). Another possible alias you could make is `trash`, a command
  that will move a file or folder to the system Trash bin. What other aliases
  could you make?
- **Review some more advanced commands.** Look up `grep`, `less`, `cal`, and
  `vim`. View the `man` pages or google them!
- **Learn some custom, advanced commands.** [`Z`](https://github.com/rupa/z) is
  a command line tool for quickly navigating and traversing the file system. See
  if you can figure out how to install and use it. [This may be
  helpful!](https://commandlinepoweruser.com/).


## Sample Quiz Questions

* Why would a developer prefer the command line over a GUI?
* Where can we find help for shell commands?
* Describe 4 bash commands for managing folders and files.
* Describe 2 unsafe commands.
* You are currently in the "code" folder in the below file tree. How would you
  get to the folder that contains "beach.png" using the command line?

```sh
home
├── documents
│   └── code
├── photos
│   ├── headshot.jpg
│   └── summer_vacation_2014
│       └── beach.png
└── videos
```

## Additional Practice / Bonus Material

- [Command Line Fu](https://git.generalassemb.ly/dc-wdi-fundamentals/command-line-fu)
- [Kitchen Organizer](https://git.generalassemb.ly/dc-wdi-fundamentals/kitchen-organizer)
- [Command Line Power User](https://commandlinepoweruser.com/)

## Bash Profile Aliases (Bonus Content)

You may have noticed during Installfest that we messed with this file:
`~/.bash_profile`.

<details>
  <summary> <b>Q:</b> Based on the path, where is this file located?</summary>
  In the home directory (i.e., Users/your-name-here).
</details>

Essentially, we changed the `~/.bash_profile` to make your prompt into a better
one!

There will be commands you will find yourself doing frequently. It might become
a pain to type out these commands in full all the time. It would be really nice
if we could shorten some of these commands... enter aliasing. Aliasing is really
quite simple!

Let's open our  `~/.bash_profile` in atom and type in the following...

```
alias greeting="echo 'hello world'"
alias gs='git status'
alias sbx='cd ~/wdi/sandbox'
```

We can also design functions in bash to allow for arguments and options...

```sh
cdls () {
cd "$@" && ls;
}
```

> At this point you may be wondering what exactly "bash" is. Bash is a language
> we can use to interact with our computer via the shell (via Terminal or some
> other text-based interface).

### Make An Alias

Take the next five minutes to create your own alias and test it. If possible,
alias something you think you'll find yourself doing frequently!



* **BONUS:** Write a command to list only files beginning with your first name.
  Label the parts of the command.

## Hungry for More?

* `grep`
* `cat`
* `less`
* `find`
* `cal`
* `vim` and `vimtutor`

[Linux Command](http://linuxcommand.org/) is a wonderful introduction to the
command line. Macs are Unix systems and so very similar to Linux. Almost
everything (everything I've found so far)

## Own your terminal

1. [Color your
   prompt](http://www.cyberciti.biz/faq/bash-shell-change-the-color-of-my-shell-prompt-under-linux-or-unix/)
  - It will be WAY easier to read
2. [Choose a theme](http://apple.stackexchange.com/a/92769)
  - Pick something you like to look at

## [iTerm2](https://www.iterm2.com/features.html)

Some instructors use iTerm2 as a terminal replacement.

Our favorite features include:

- A better, more readable font
- Hotkey support (full screen and tabs)
- Unlimited Scroll Back history

## Feeling Adventurous?

Bash isn't the only option. Check out zsh
(http://code.joejag.com/2014/why-zsh.html) or fish (http://fishshell.com/)


<!-- ADD CHECKS FOR understanding
MAKE IT MORE RELATABLE
MOVE BONUS/HOMEWORK CONTENT -->
