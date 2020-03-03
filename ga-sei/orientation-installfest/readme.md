# Installfest

## Lesson Objectives

1. Signup for the following services

   - Slack
   - Google Classroom
   - Github
   - Github Enterprise

1. Install the following programs:

   - Git
   - homebrew
   - iTerm2
   - NodeJs
   - Visual Studio Code
   - Spectacle
   - MongoDB
   - Postgresql
   - Create React App
   - React Dev Tools Chrome Extension
   - Python
   - Pipenv
   - Postman
   - Heroku CLI

**IMPORTANT: THIS IS AN EXERCISE IN FOLLOWING INSTRUCTIONS**. This guide is _NOT_ a
lesson. Please do not try and understand everything that you are doing. Most of
the software that we are installing will be discussed to greater detail later
in the course.

**IF YOU RUN INTO AN ISSUE**:

1. First, verify that you've typed the given commands **letter for letter**
1. Then, check the board if any changes were made during the installfest
1. Finally, ask an instructor for help.

# How To Open The Terminal <a name="open-terminal"></a>

Open Terminal:

1. press &#8984; + &#9251; (command + space)
1. type "terminal"
1. press `Enter`

# Signup For Services

## Slack

Verify that you have access to the class' slack channel. Please see an
instructor if you don't.

Post a `hello world` message once you get access.

## Google Classroom

1. Go to https://classroom.google.com
1. Sign into your Google account _NOTE:_ If you don't have one please register
   for a new Google Account.
1. Your instructor will share the code for you to join the Google Classroom

## Github

1. Go to https://github.com
1. Signup if you don't already have an account
1. Slack your instructors your GH (GitHub) user name

## Github Enterprise

1. Go to https://git.generalassemb.ly (known as GitHub enterprise or GHE)
1. Register for a new account if you don't already have one. (_Note_: this is a
   different GitHub than the one at https://github.com).
1. Slack your instructors your GHE username.

# Install Software

## Homebrew (Mac)

1. Run the below command in your terminal

   ```bash
   /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
   ```

1. Run

   ```bash
   brew update
   brew upgrade
   ```

1. Verify the install worked by running
   ```bash
   brew --version
   ```

## Chocolatey (Windows)

1. Go to the following link and follow the steps in the "Installing Chocolatey" section:

   [Chocolatey Installer](https://chocolatey.org/install)

## iTerm2 (Mac)

1. Run the command in your terminal

   ```bash
   brew cask install iterm2
   ```

1. Close your Terminal program
1. Open iTerm2 (see the [section above](#open-terminal); use "iterm" instead
   of "terminal")

## Git

### Mac

1. Run the following command:

   ```bash
   brew install git
   ```

### Windows

1. Run the following command:

   ```bash
   choco install git -params '"/GitAndUnixToolsOnPath"'
   ```

Verify you've installed git by running:

```bash
git --version
```

## LessonClone

see [lessonClone readme].

## NodeJs

### Mac:

1. Run the following command:

   ```bash
   brew install node
   ```

### Windows:

1.  Run the following command:

    ```bash
    choco install nodejs
    ```

    To verify you've installed VSCode run:

```bash
node
```

1. To exit the nodejs shell type `.exit`

## VS-Code

### Mac

1. Run the following command

   ```bash
   brew cask install visual-studio-code
   ```

### Windows

1. Run the following command
   ```
   choco install vscode
   ```

To verify you've installed VSCode run:

```bash
code .
```

in the terminal to edit the files in the current directory using VSCode.

## Spectacle (Mac)

1. Run the following command:

   ```bash
   brew cask install spectacle
   ```

1. Open Spectacle from Spotlight (`cmd + space`)
1. Update system preferences for Spectacle:
1. Click the padlock in the bottom left corner so you can make changes and then
   check the box next to Spectacle to allow the app to control your computer.
1. (optional): Read the [Spectacle docs][spectacle] on how to use spectacle.

## MongoDB

### Mac

1. Run the following commands:

   ```bash
   brew tap mongodb/brew
   brew install mongodb-community
   brew services start mongodb-community
   mongo
   ```

1. press `ctrl+c` to quit the mongo shell.

### Windows

1. Run the following commands:

   ```bash
   choco install mongodb
   ```

## PostgreSQL

### Mac

1. Run the following commands

   ```bash
   brew install postgres
   brew services start postgres
   createdb
   ```

### Windows

1. Run the following commands

   ```bash
   choco install postgresql
   ```

Verify you've installed postgresql:

```bash
psql
```

1. Exit `psql` by typing `\q` and pressing `Enter`

## Create React App

1. Run the following command

   ```bash
   npm install --global create-react-app
   ```

1. Verify you've installed create-react-app by running

   ```bash
   create-react-app --version
   ```

## React Dev Tools

1. To install the React Dev Tools Chrome extension, go to the following link and click 'Add to Chrome':

   [React Dev Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)

## Python

### Mac

1. Run the following command:
   ```bash
   brew install python3
   ```

Verify you've installed Python by running:

```bash
which python3
```

### Windows

1. Run the following command:
   ```bash
   choco install python --version 3.7.2
   ```

Verify you've installed Python by running:

```bash
which python
```

## Pipenv

### Mac

1. Run the following command:
   ```bash
   brew install pipenv
   ```

### Windows

1. Run the following command:
   ```bash
   pip install pipenv
   ```

Verify you've installed Pipenv by checking the version:

```bash
pipenv --version
```

## Postman

1. Go to the following link and click the 'Download' button:

   [Postman download](https://www.getpostman.com/downloads/)

## Heroku CLI

1. Go to the link below and follow the download instructions for Heroku CLI.

   [Heroku CLI download](https://devcenter.heroku.com/articles/heroku-cli#download-and-install)

# Extra

- [Homebrew docs][homebrew]
- [Iterm2 docs][iterm]
- [Spectacle docs][spectacle]

[homebrew]: https://brew.sh/
[iterm]: https://iterm2.com/index.html
[brew-cask]: https://caskroom.github.io/
[spectacle]: https://github.com/eczarny/spectacle#keyboard-shortcuts
[lessonclone readme]: ../../lessonClone/
