## Why OOP?

OOP helps us organize a program in a better manner. The principles of 
* Encapsulation
* Abstraction
* Modularity

Help us achieve this goal as follows

## Encapsulation
This is the mechanism of restricting direct access to the object's properties. These properties are only accessed via methods and cannot be changed by other objects.

Encapsulation makes objects intuitive so that we can model things as self contained and ensures there is consistency because the object is in control of its data. Methods can be used to enforce rules as they are the only ways to affect the properties.

## Abstraction
This refers to hiding of unneccessary details from the user. This is important as the objects become more complex, for example, if you go to an ATM to withdraw some money, you do not care what happens as long as you get your money. The hiding of these background processes is what is called abstraction.

## Modularity
Objects should stand on their own and play well with others, allowing us to refactor an object without impacting other objects.

## Syntax
* Keyword class followed by the name, notice the use of caps.
* def keyword (short for define) used to define a function similar to a function declaration in javascript.
* \_\_init__ is similar to constructor in javascript (short for initializer).
* The argument (self) refers to the object itself like the this keyword in javascript.
* Properties are accessed using dot-notation.

## Inheritance
This enables new objects to use properties of existing objects. It is a representation of _"is a"_ relationship and allows a class to extend another class. For example, if a teacher is a persson, then the teacher has  the same qualities as a person and similarly if a student is a person then the student has similar qualities as a person, however the teacher and the student may each have some qualities that differ from the person and from each other.

```Inheritance syntax

class Child(Parent):
    def __init__(self, property1, property2):
        super().__init__(property1)
        self.property2 = property2
```

## Dunder methods (magic methods)
Dunder is shorthand for double underscore \_\_ that appears before the methods. These methods are invoked when you use the built in methods of an instance of the class.

### Important dunder methods
* \_\_getattr__
* \_\_setattr__
* \_\_len__
* \_\_add__
* \_\_getitem__

_In some instances polymorphism is counted as a principle of oop but according to Phillips (2010), is rarely mentioned in python programming, python implements a similar concept which is referred to as "duck typing"._


## References
Phillips, D. (2010). Python 3 object oriented programming.