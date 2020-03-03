# Lead Instructor Documentation

## Table Of Contents

* Onboarding
  * GA Gmail 
  * Slack
  * GitHub Enterprise 
* ATL GA Leadership Structure
  * Regional Director
  * Instructor Manager
  * Student Experience Director
  * Outcomes Instructor
* Student GA Journey
* Course Prep
* Lesson Prep
* Grading
  * Submission
  * Daily Grading
  * Resubmissions
* Student Behavior

## Onboarding

1. GA Gmail
1. Slack
1. GitHub Enterprise

### GA Gmail 

See your instructor manager for initial access.

### Slack

See your instructor manager for initial access. Currently the 

  ga-students.slack.com
URL is being used.

### GitHub Enterprise 

1. Sign up for an account at the [GHE website][]
1. Join the `atl-wdi` organization
1. Get access to `sei-curriculum` repository.

## ATL GA Leadership Structure

__NOTE: The following section is subject to change. Please consult with your
instructor manager for an updated heirarchy overview__

```
Regional Director 
  |-- Instructor Manager
  | |-- Lead Instructor (you are here)
  |   |-- Instructional Assistant
  |-- Outcomes Instructor
  |-- Student Experience Manager
```
### Regional Director

This role is in charge of all campus operations.

### Instructor Manager

This role is in charge of (you guessed it!) managing instructors. This
includes:

  * 1:1 meetings to discuss instructor growth and leadership development
  * scheduling student instructor support (IA and TA positions)
  * providing the lead instructor with the tools and guidance they need to give
    the students their best.
NOTE: the instructor manager position is not to interface with students but to
"have the instructor's back"

### Student Experience Director

This role is in charge of providing the students with the best GA campus
experience. This role includes

### Outcomes Instructor

This role is in charge of preparing the students for finding jobs once they
graduate. They have an 1'30" session with the students once a week to teach
topics such as resume building and interview questions.

## Student GA Journey

Students go through the following process here at GA:

  1. Admissions Interview
  1. Course Pre-work
  1. SEI Course (This is where you come in)
  1. Outcomes support
The role of the Instructor is to prepare the student for the workforce. Keep
the above process in mind as this helps with interacting with students.

## Course Prep

The following should be the process used for preparing for a new course:

  1. Create Google Classroom for class
  1. Create Course Schedule
  1. Prepare for Week 1 lessons

## Instructor Toolbox 

The following are tools that you should use (and, honestly, contribute to) in
order to manage the course:

  * schedule/
  * view
  * lessonClone/

### Schedule/

This is a handwritten tool for managing the course schedule. It has the ability
to generate `.ics` files as well as markdown files that show the course
schedule. See the [schedule][] for details.

### LessonClone

This is a utility for downloading directories in the `course-materials`
directory from particular branches of the `atl-wdi/sei-curriculum` repo. This
is intended to be given to students so that they can easily download materials
without the need of cloning the entire repo or having compressed archives (i.e.
zip files) sent to them via slack. See [lessonClone][] for details.

### View

This is a script for viewing the course schedule as well as rendering the
readme.md/notes.md files as man pages in the terminal. See `./view -h` in the
root of the repo for more details.

## Lesson Prep


### Principles

The process you choose to use for lessson prep will depend on various variables
within the class. Use the following principles as you prepare for a class
session:

  * Teach one thing at a time. For example it is better to have two smaller
    sessions regarding MVC and REST architectures with a break in between
    rather than 1 large session and discussing both.
  * Plan for at least 30% of your time for clarification, checking for
    understanding and review.
  * Teach to the needs of the students and their learning styles. Treat this as
    a mini research project as you are teaching the course. You should be an
    expert in their learning styles by the end.
  * Create periodic breaks. The adult mind typically can go for about 1 hour
    before it starts to lose interest in the subject.
  * Consider the order in which lessons were taught and have plenty of review
    sessions

### Concepts vs Technology

When teaching software engineering it is easy to focus on how to use the
technology versus how to use the concepts behind that technology. It is
important that you do the latter.  For example: do not "teach ReactJS"; instead
teach single page applications and the concept of component based architecture.
This has the following affects:

  * Students may not be using the same technology after graduation. To only
    focus on the technology is giving them a grave disadvantage because they
    cannot easily transfer one technology to another without first
    understanding the underlaying concept.
  * 

We have found that students become great programmers if the fundamentals are
emphasized over the technologies we use.  This helps remove some of the
confusing business language that they tend to recieve and break through to
clearer understand of what is going on behind the scenes of the tools they are
using/creating. For example

## Grading

Currently we use [Google classroom][] for grading. See their official
documentation for how to get setup (_Note you will need to use a personal gmail
account when creating a new classroom. Otherwise students will not  be able to
join a classroom created under the @generalassemb.ly domain_)

### Submission

* Completed student work should be uploaded/pushed to a public git repo
  (through the General Assembly's git enterprise or Github).
* A link to that github repository should then be submitted. 

### Daily Grading

* Grading is done under a pass/fail policy.
* Scores between 1 - 99 should not be given. 
* 0 is a failing grade
* 100 is a passing grade

### Resubmissions

Resubmission qualifications for a student's work should be left to an
instructor. There is no official policy on when a student can resubmit
work.

[Google classroom]: https://support.google.com/edu/classroom/?hl=en&authuser=0#topic=6020277
[GHE website]: https://git.generalassemb.ly
[lessonClone]: ../lessonClone/readme.md
[schedule]: ../schedule/readme.md
