# Course Material

All material for the course and its planning are kept in a mono-repo located
at: 

  https://git.generalassemb.ly/atl-wdi/sei-curriculum. 
Please read [CONTRIBUTING] for how this repository is to be maintained.

The `course-material/` directory contains all of the course material including
(but not limited to) lessons, solutions, template projects, and exercises -
this list hereafter noted as "material directories". The following guidelines
are necessary for maintaining a clean repository to provide the best material
for our students.

## Progressive Updates

This `course-material` is always updating (as it should be). The curriculum
management system that is now inplace and thus there are still touches of old
material still out there. _If you find documents that do not follow the
guidelines set forth in this document please update them._

## Material Directories

Each sub-directory in `course-material/` is known as a "material-directory".
Each material-directory acts as contents to be "prepared" and then delivered
to students. All directories have the following requirements:

  * A `readme.md` must exist and contain the details for that material
    directory. __NOTE:__ The file name must be all lowercase.
  * only files are direct dependencies of the `readme.md` should be in
    the material-directory
  * template code / code snippets should go in their language respective files.
    This prevents us from giving students code that doesn't work or is out of
    context. __Note it is better to use a template directory that has a fully
    functioning program than a set of scattered code snippets_.
    __DO NOT PUT CODE SNIPPETS IN TEXT FILES!__

### readme.md 

The `readme.md` file is the main content for a material-directory. The
`readme.md` file is not:

  * a text book (we have the internet for that)
  * lecture slides
  * immutable
The `readme.md` file should contain:

  * learning objectives 
  * only content that directory explains/details the information necessary to
    fulfill the learning objectives.

Please keep the content of the readme files to a minimum. Consider placing
"good to know" information in your lecture notes instead of the `readme.md`.
Think of the `readme.md` as the content that is cohort independent, student
agnostic and (most importantly) instructor agnostic. The purpose of the
`readme.md` is to provide the content to teach not how to teach the content.

## Code Snippets and Template Code

Source code snippets (as mentioned above) should go into their own
material-directory (not the `readme.md`).  This keeps code that we give to
students testable, and within the context that the snippets should be used. 

For example, the following is a code snippet of instructions in a `readme.md`
file for writing a React component:

    copy and paste the following into `foo.js`

    ```
    class Foo {
      ...
      render() {
      ...
      }
    }
    ```
The problem with putting this in a `readme.md` file is that we have no way of
testing this code - therefore have no concrete way of proving that we are
delivering working code to students - and we don't have any context for which
this code should be written - the filestructure, the required imports, and what
the `...` are supposed to be.

The following snippet is better:

    copy and paste the sample-component.js file and follow steps 1-3 for
    creating a new react class component.
where `sample-component.js` is a separate file:

    /* Step 1. 
     *
     * Create a class
     *
     */
    class Foo {

      /* Step 2
       *
       * Create a function called render
       *
       */
      render() {
        /* Step 3
         *
         * return the JSX to be rendered (don't forget the "()"!)
         *
         */
        return (<h1>Hello world<h1>);
      }

    }
We note: _it is much more valuable to students to write fully working template
code with commented steps rather than code snippets._ It is recommended to
add independent templates to an already existing template material-directory
(for example, have a template file for creating a webform that uses
`method-override` in express is not part of the main template but is included)

Part of lesson preparation should be to update the template code to match
updated industry standards, libraries, etc.

Naturally solution code for assignments should be built using a copy of the
template code. Part of the lesson prep should be to verify that the solution
code is updated in the respective branch.

[CONTRIBUTING]: ../CONTRIBUTING
[course-schedule]: ../schedule/readme.md
[lesson-prep]: ../docs/lesson-prep.md
