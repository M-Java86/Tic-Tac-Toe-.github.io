# Whiteboarding

Whiteboarding is a common practice in technical interviews. The goal is to
convey how you think through a challenging problem and what steps you'd take to
get started. You do not need to arrive at a solution or write perfect code. In
fact, think of it as writing detailed pseudocode.

## Instructions

Each group member will take turns being the candidate (the one whiteboarding)
and the interviewers (the ones reading and assessing the prompt).

If you are the candidate, stand up at the white board without looking at your
prompt. One of the interviewers should read out the prompt to you and set a
timer for 10 minutes. The candidate should work through the prompt until the
timer goes off. If you feel like you've solved the problem before the timer goes
off, start to talk and think through ways to make your code faster or more
efficient.

### Candidate Instructions

The prompt will be read off to you. **Ask clarifying questions** if something
seems unclear, then start whiteboarding. It's a good idea to take notes about
the prompt on the white board as the prompt is being read to you. Sometimes the
questions are intentionally vague, and the interviewers want to see how you deal
with that - so ask questions!

As you work on the solution, talk it out. The goal is not to arrive at the
correct answer, but rather to convey how you would approach solving the problem.
If you get stuck, ask if you can google something quickly. Don't google the
answer to the problem, but a small piece of information that you need. Note that
your interviewers have every right to say "No" to your request!

When the timer goes off, take a seat in front of your interviewers so you can
debrief.

#### How to use the white board

When you get up in front of the white board, one of the things you'll notice is
that they're often really big. Additionally, your first instinct is probably
going to be to start writing code as soon as you hear the prompt.

Think of the board as having 3 parts:

![3 Parts of the White Board](https://media.git.generalassemb.ly/user/8618/files/9c3e6832-918c-11e8-8f14-7f2f9dcaf640)

The first part, on the far left, is for your notes. The notes section is
intentionally smaller than the others. Fill in this section as the interviewer
is reading off their question. Ask follow up questions and record the answers
here.

The second part is for your pseudocode. Write out bullet points for how you'd
solve this problem, step-by-step. If you realize you missed something, write it
in between the other lines of psedocode. Cross reference your pseudocode with
your notes on the prompt. Talk through what you're doing and why as you write
your pseudocode.

The third part is for actual code. Give yourself the entire space to fill in
your code! So if you need to write a function, put `function(parameter) {` at
the very top and the closing `}` at the very bottom. Your code does not have to
be 100% correct (no one is going to execute it). Work through your pseudocode as
you write your actual code.

### Interview Instructions

When the candidate is ready, read their prompt out loud to them. If they have
questions, come up with what you think would be a good answer. Your goal is to
only provide information that they ask for!

Watch the candidate as they white board and take notes. You're looking for them
to talk through their thinking and explain not only what they're doing but why
they're doing it a certain way. Stop them and ask them why they're approaching
the problem they way that they are. If they pause or appear to be stuck, let
them work through it on their own.

When the timer goes off, have the candidate take a seat. First, ask them what
they thought went well. Then discuss the prompt and their process with them.

Try to debrief each question as a group for at least 10 minutes. That can be
discussing the problem, researching the prompt (only after the "interview" is
complete!), and talking through solving the problem as a group.

## Prompts

<details>
  <summary>Prompt</summary>

Given an array of integers, write a function that returns a sorted list of all
the duplicates in the array.

e.g.:

```js
dups([1, 2, 3]) // = []
dups([1, 2, 2]) // = [2]
dups([3, 3, 3]) // = [3]
dups([2, 1, 2, 1]) // = [1, 2]
```

How would you make your solution more efficient?

[Source](https://www.byte-by-byte.com/findduplicates/)

</details>

<details>
  <summary>Prompt</summary>

A linked list is a list structure made up of nodes where each node contains a
value and a reference to the next node in the list:

![Linked
  List](https://www.cs.cmu.edu/~adamchik/15-121/lectures/Linked%20Lists/pix/linkedlist.bmp)

Given an unsorted linked list, write a function that removes all duplicates
(i.e. returns a new linked list containing only the unique values).

[Source](https://www.byte-by-byte.com/deduplinkedlist/)

</details>

<details>
  <summary>Prompt</summary>

Given two strings, write a function to determine whether they are anagrams.

e.g.:

```js
isAnagram("", "") = true
isAnagram("A", "A") = true
isAnagram("A", "B") = false
isAnagram("ab", "ba") = true
isAnagram("AB", "ab") = true
```

[Source](https://www.byte-by-byte.com/anagrams/)

</details>

<details>
  <summary>Prompt</summary>

New York City has the highest population of any city in the U.S., with 8,550,405
people. Bonanza, Utah has the smallest population with only 1 person living in
it.

How could you roughly calculate the population of the United States.

> Note to Interviewers: the population of the US is 325.7 million

</details>

<details>
  <summary>Prompt</summary>

Given an array of numbers, write a function that returns the largest difference
between two consecutive numbers in the array.

e.g.:

```js
largestDifference([1, 3]) // => 2
largestDifference([1, 3, 8]) // => 5
largestDifference([1, 3, 8, 0, 9]) // => 9
```

</details>

<details>
  <summary>Prompt</summary>

Given two integers, write a function that swaps them without using any temporary
variables.

[Source](https://www.byte-by-byte.com/swapvariables/)

</details>

<details>
  <summary>Prompt</summary>

Given two unsorted strings, write a function that will return the number of
common characters.

e.g.:

```js
commonChars("abc", "abc") // => 3
commonChars("aef", "hqa") // => 1
commonChars("ferlv", "evlrf") // => 5
```

</details>
