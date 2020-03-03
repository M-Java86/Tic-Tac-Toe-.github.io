[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Intro to Object-Oriented Programming in Python

We've covered Object-Oriented programming in JavaScript. Now we'll cover the
same principles in Python. Be on the look out for similarities and differences
between the two languages!

## Prerequisites

- Python
- Object-Oriented Programming in another language

## Objectives

By the end of this, developers should be able to:

- Review the principles of Object Oriented Programming
- Describe the relationship between a class and an instance
- Define a Python Class and instantiate it
- Distinguish between local, instance, and class variables
- Interact with objects through methods
- Explain inheritance in Python
- Look at Python's "magic methods" or dunder methods

## Review: Why OOP? (5 min / 0:05)

### Objects are Intuitive!

Objects help us build programs that model how we tend to think about the world.
Human minds tend to break down the world into objects: trees, leaves, roads,
desks, cars, tacos, Britney Spears songs, and so on (all the _things_). Since it
is our natural mental tendency to understand the world in terms of objects, this
is very useful for _modelling_ things in the real world in our programs.

Instead of a bunch of variables and functions (procedural style), we can group
relevant data and functions into objects, grouping related data and behavior
together. We think about them as individual, self-contained units. This grouping
of properties (data) and methods is a kind of **encapsulation**.

### Objects Manage Complexity

Encapsulation is especially important as our programs get more and more complex.
We can't keep all the code (and what it does) in our head at once. Instead, we
often want to only think about a portion of the code in a given moment.

Objects help us organize and think about our programs. If I'm looking at code
for a Squad object, and I see it has associated _people_, and those people can
dance when the squad dances, I don't need to think about or see all the code
related to a person dancing. I can just think at a high level "ok, when a squad
dances, all it's associated people dance". This is a form of _abstraction_: I
don't need to think about the details, just what's happening at a high-level.

### Ensuring Consistency

Another advantage of _encapsulation_ (grouping data and methods into objects) is
that these objects can be in control of their data. This usually means ensuring
consistency of their data.

Consider an example of a bank account: I might define a bank account object such
that you can't directly change it's balance. Instead, you have to use the
`withdraw` and `deposit` methods. Those methods are the **interface** to the
account, and they can enforce rules for consistency, such as "balance can't be
less than zero".

### Modularity

Objects should stand on their own and play well with others. If our objects are
well-designed, then they interact with each other in well-defined ways. This
allows us to refactor (rewrite) any object, and it should not impact (cause
bugs) in other areas of our programs.

## Code along

Create a new folder in your `sandbox` called `python-oop`.

Inside that folder create a file called `oop.py`. We'll use this file for
writing sample code in this lesson.

## OOP Syntax: JavaScript vs. Python (5 min / 0:10)

In JavaScript, we could write this class:

```js
class User {
	constructor(name) {
		this.name = name
	}

	greet() {
		console.log(`Hi! My name is ${this.name}.`)
	}
}

const me = new User("Ali")
me.greet()
```

Let's have a look at what this might look like in Python:

```py
class User:
    def __init__(self, name):
        self.name = name

    def greet(self):
        print(f'Hi! My name is {self.name}')

me = User('Jimmy')
me.greet()
// "Hi! My name is Jimmy"
```

Let's break down this syntax. On the first line, we declare and name the class,
this one is called `User`. A class declaration is always followed by a `:`.

Then, on the next line, we see a method called `__init__`. The `__init__` method
is the initializer - just like a `constructor` in JavaScript. We use it to set
the initial values of our instance's attributes. The `__init__` method takes two
parameters: `self` and `name`. By convention `self` is the first parameter to
each method in a Python class - it refers to the instance of the class, for
example, a `User` object.

> Q: What's the equivalent of python's `self` in javascript?

<details>
<summary>Answer</summary>

```
this
```

</details>

A particular `User` or instance of the `User` class will have a `name` attribute
that we will set in our `__init__` method. Finally, the `greet` method displays
a greeting formatted with the `User` instance's name. At the end, we
**instantiate** a new user with `me = User("Ali")`.

### You do: Create a `BankAccount` class (20 min / 0:30).

> 10 min exercise, 10 min review

Create a BankAccount class that meets the following criteria:

- Bank accounts should be created with the `type` of account (like "savings" or
  "checking").
- Each account should keep track of its current `balance` which should start at
  `0`.
- Each account should have access to a `deposit` and a `withdraw` method.
  - `withdraw` should return the amount withdrawn
  - `deposit` should return the new account balance after depositing

Create a checking account and a savings account. Withdraw money from the savings
account and deposit that amount into the checking account.

Bonuses:

1. Prevent withdrawing money if the balance will go negative.
2. Start each account with an additional `overdraft_fees` property that starts
   at `0`. If a call to `withdraw` ends with the `balance` below zero then
   `overdraft_fees` should be incremented by 20. You should also prevent the
   user from going below a balance of -100, including the overdraft fees.

<details>
<summary>Solution</summary>

#### Non-Bonus

```python
class BankAccount:
    def __init__(self, account_type):
        self.type = account_type
        self.balance = 0

    def withdraw(self, amount):
        self.balance -= amount
        return amount

    def deposit(self, amount):
        self.balance += amount
        return self.balance

checking = BankAccount('checking')
savings = BankAccount('savings')

savings.deposit(1000)
transfer = savings.withdraw(500)
checking.deposit(transfer)
```

#### Bonus I

```python
class BankAccount:
    def __init__(self, account_type):
        self.type = account_type
        self.balance = 0

    def withdraw(self, amount):
        if self.balance - amount < 0:
            return 'Insufficient funds.'
        self.balance -= amount
        return amount

    def deposit(self, amount):
        self.balance += amount
        return self.balance
```

#### Bonus II

```python
class BankAccount:
    def __init__(self, account_type):
        self.type = account_type
        self.balance = 0
        self.overdraft_fees = 0

    def withdraw(self, amount):
        net_balance = self.balance - amount - self.overdraft_fees
        self.balance -= amount if net_balance >= -100 else 0
        if net_balance < -100:
            return 'Insufficient Funds'
        if self.balance < 0:
            self.overdraft_fees += 20
        return amount

    def deposit(self, amount):
        self.balance += amount
        return self.balance
```

</details>

## Inheritance in Python (30 min / 1:00)

Inheritance allows us to build new classes out of old classes. It allows us to
extend functionality defined in a `parent` class and create `children` classes
that extend and compartmentalize different pieces of functionality.

Inheritance is a pattern that models natural conceptual hierarchies that we're
used to thinking about in the world. A landline is a type of phone, and so is a
smartphone. They are both in a phone category. Phones can at the very least,
call other phones and receive calls using phone numbers. A portable phone
connected to a landline has specific features, just as a smartphone does. They
are both types of phones. Roughly, this is how inheritance works.

We can define one general class to model something like a **Phone** and then
`inherit` the methods and properties of the class to make new classes out of the
first class, like **IPhone** and **AndroidPhone**.

When we say sub-classes, or child classes, `inherit` methods and properties from
a parent class we mean the child class has access to all of the functionality of
it's parent, and it can define it's own functionality on top of that.

When we define a class to represent a **Phone** we can add the basic properties
and functionality that all phones have.

- All phones have a phone number
- All phones can place phone calls
- All phones can send text messages

After we define what a **Phone** is we can create classes that `inherit` from
the Phone class and add their own properties and functionality.

Let's define two new classes that `inherit` from the **Phone** class. We'll make
an **IPhone** and an **Android** (class names are uppercase by convention, but
not required)

- iPhones have a unique `unlock` method that accepts a fingerprint
- iPhones have a unique `set_fingerprint` method that accepts a fingerprint
- Android phones have a unique `set_keyboard` method that accepts a keyboard

```python
class Phone:
    def __init__(self, phone_number):
        self.number = phone_number

    def call(self, other_number):
        print(f"Calling {other_number}.")

    def text(self, other_number, msg):
        print(f"Sending text from {self.number} to {other_number}: {msg}")
```

```python
class IPhone(Phone):
    def __init__(self, phone_number):
        super().__init__(phone_number)
        self.fingerprint = None

    def set_fingerprint(self, fingerprint):
        self.fingerprint = fingerprint

    def unlock(self, fingerprint=None):
        if (fingerprint == self.fingerprint):
            print("Phone unlocked. Fingerprint matches.")
        else:
            print("Phone locked. Fingerprint doesn't match.")

class Android(Phone):
    def __init__(self, phone_number):
        super().__init__(phone_number)
        self.keyboard = "Default"

    def set_keyboard(self, keyboard):
        self.keyboard = keyboard
```

## Inheritance Syntax

There are two new pieces of syntax used in the code above:

1. Class definitions can accept a parameter specifying what class they inherit
   from.
2. Child classes can invoke a method called `super()` to gain access to methods
   defined in the parent class and execute them.

Take another look at the Phone classes to see how these pieces of syntax are
used to define how the classes define their inheritance and how the `super()`
method is used.

Notice how the Android class doesn't repeat the code that attaches the
phone_number passed to the `__init__` method to the `self` reference. The
Android class calls the parent constructor through the `super()` method and
allows the parent class to execute that default behavior.

```python
class Phone:
    def __init__(self, phone_number):
        self.phone_number = phone_number


class Android(Phone):
    def __init__(self, phone_number):
        super().__init__(phone_number)
```

Note how we pass in the `phone_number` parameter to `super().__init__()`.

This gives `phone_number` a value, like setting a variable. Now we're able to
access `self.phone_number` in the Android class, and it's already been set!

## Break (10 min / 1:10)

## You do: Write Bank Account Classes (40 min / 2:00)

> 20 min exercise, 20 min review

Let's practice writing classes and using inheritance by modeling different types
of Bank accounts.

- Create a base **BankAccount** class
  - Bank accounts keep track of their current `balance`
  - Bank accounts have a `check_balance` method that returns the current balance
  - Bank accounts have a `deposit` method that returns the balance of the
    account after adding to it
  - Bank accounts have a `withdraw` method that returns the amount of money that
    was successfully withdrawn.
  - Bank accounts return `False` if someone tries to deposit or withdraw a
    negative amount.
  - Bank accounts are created with a default interest rate of 2%
  - Bank accounts have a `accumulate_interest` method that sets the balance
    equal to the balance plus the balance times the interest rate
  - `accumulate_interest` returns the balance of the account after calculating
    the accumulated interest
- Create a **ChildrensAccount** class
  - Inherits from **BankAccount**
  - Children's bank accounts have an interest rate of Zero.
  - Every time `accumulate_interest` is executed on a Child's account the
    account always gets \$10 added to the balance.
- Create an **OverdraftAccount** class
  - Inherits from **BankAccount**
  - An overdraft account penalizes customers for trying to draw too much money
    out of their account.
  - Overdraft accounts are created with an `overdraft_penalty` property that
    defaults to \$40.
  - Customer's aren't allowed to withdraw more money than they have in their
    account. If a customer tries to withdraw more than they have then the
    withdraw method returns `False` and their balance is deducted only by the
    amount of the `overdraft_penalty`.
  - Overdraft accounts don't accumulate interest if their balance is below zero.

Sample Input:

```python
basic_account = BankAccount()
basic_account.deposit(600)
print(f"Basic account has ${basic_account.balance}")
basic_account.withdraw(17)
print(f"Basic account has ${basic_account.balance}")
basic_account.accumulate_interest()
print(f"Basic account has ${basic_account.balance}")
print()

childs_account = ChildrensAccount()
childs_account.deposit(34)
print(f"Child's account has ${childs_account.balance}")
childs_account.withdraw(17)
print(f"Child's account has ${childs_account.balance}")
childs_account.accumulate_interest()
print(f"Child's account has ${childs_account.balance}")
print()

overdraft_account = OverdraftAccount()
overdraft_account.deposit(12)
print(f"Overdraft account has ${overdraft_account.balance}")
overdraft_account.withdraw(17)
print(f"Overdraft account has ${overdraft_account.balance}")
overdraft_account.accumulate_interest()
print(f"Overdraft account has ${overdraft_account.balance}")
```

Sample Output:

```
Basic account has $600
Basic account has $583
Basic account has $594.66

Child's account has $34
Child's account has $17
Child's account has $27

Overdraft account has $12
Overdraft account has $-28
Overdraft account has $-28
```

<details>
<summary>Solution</summary>

```python
class BankAccount():
    def __init__(self):
        self.balance = 0
        self.interest = 1.02

    def __str__(self):
        return f"Current Balance: $ {self.balance}"

    def withdraw(self, amount):
        if amount > self.balance:
            return False
        elif amount <= 0:
            return False
        else:
            return amount

    def deposit(self, amount):
        if amount <= 0:
            return False
        else:
            self.balance += amount
            return self.balance

    def check_balance(self):
        return self.balance

    def accumulate_interest(self):
        self.balance = self.balance * self.interest
        return self.balance


class ChildrensAccount(BankAccount):
    def __init__(self):
        super().__init__()
        self.interest = 0

    def accumulate_interest(self):
        self.balance += 10
        return self.balance


class OverdraftAccount(BankAccount):
    def __init__(self):
        super().__init__()
        self.overdraft_penalty = 40

    def withdraw(self, amount):
        if amount > self.balance:
            self.balance -= self.overdraft_penalty
            return False
        else:
            return super().withdraw(amount)

    def accumulate_interest(self):
        if self.balance <= 0:
            return self.balance
        else:
            return super().accumulate_interest()
```

</details>

## Break (10 min / 2:00)

### What are Dunder Methods (Magic Methods)?

> Dunder is short-hand for *d*ouble *under*score.

We've seen one dunder method before, `__init__`, which is called whenever you
create an instance of a class. These methods are invoked by Python when you use
a built-in method. For example the `__str__` dunder method is called whenever we
use the `str()` function on an instance of the class. Let's see what that looks
like:

```py
class Dog:
    def __init__(self, name):
        self.name = name
        self.good_dog = True

    def __str__(self):
        return self.name


maddie = Dog('Maddie')
print(str(maddie)) # Maddie
print(maddie) # Maddie
```

We can also think of the `__str__` method as useful to _describe_ a class
instance. What happens if we don't have one and we try to `print(maddie)`?

We'll see something like this:

```py
<__main__.Dog object at 0x7f7561eee198>
```

Other useful dunder methods include:

- `__getattr__` for when you get an attribute (i.e. `maddie.name`)
- `__setattr__` for when you set an attribute (i.e. `maddie.name = 'Madison'`)
- `__len__` for when you call `len` on the class
- `__add__` for when you add instances of the class
- `__getitem__` for using bracket notation on an instance of the class (i.e.
  `maddie['food']`)

Such dunder methods exist for **_almost every operator_**!
[More examples here](https://dbader.org/blog/python-dunder-methods).

### Exercise: Fancy Bank Accounts (feat. Magic Methods) (20 min / 2:20)

> 15 min exercise, 5 min review

- When you print the bank account, make it so that it prints a well-formatted
  blurb about the kind of account and its balance. (ex. `Savings Account: $50`)
  > [Formatted Strings in Python](https://docs.python.org/3.6/library/string.html#format-string-syntax)
- Make it so that you can add the balances of two bank accounts by adding two
  instances of the class.
  > Check out addition dunder methods! See link above.
- Make it so that you can subtract, multiply, and divide the balances of two
  bank accounts by performing those mathematical operations on two instances of
  the class.
  > Check out other arithmetical dunder methods! See link above.
- Make it so that you can compare the balances of two bank accounts by using the
  greater than, less than, and equals to operators in Python on two instances of
  the class.
  > Check out comparison dunder methods (like `__eq__` and `__lt__`)! See link above.

## Additional Resources

- [Python 3 Object Oriented Programming](https://realpython.com/python3-object-oriented-programming/)
- [Object Oriented Programming](https://python-textbok.readthedocs.io/en/1.0/Object_Oriented_Programming.html)

## Contributors

Original content from [DC at cc251b](https://git.generalassemb.ly/dc-wdi-python-django/python-oop/commit/cc251b1e27074e959ebfad17806b8def047a5b3c). Original contributors can be found in that repository's history. Recent contributors can be found in this repository's history.

## [License](LICENSE)

1. All content is licensed under a CC­BY­NC­SA 4.0 license.
1. All software code is licensed under GNU GPLv3. For commercial use or
   alternative licensing, please contact legal@ga.co.
