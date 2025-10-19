# 1.9 JS Functions: Do One Thing Well

## Start Your GH Workflow

Remember, before you start anything else, always follow this GH methodological workflow:

1. Create meaningful **branch** that uses the agreed upon naming scheme: `CHP/X.x--lastname`.
2. Practice the iterative process to **commit** and **push** regularly with meaningful **commit messages**.

## Overview

We've learned a lot so far about JS: data primitives and types, operators, conditionals, loops and parsers, and other types of transformers. Now, one of the last fundamentals to learn about JS is the ability to wrap up some code that performs one functional action well.

<img src="./../assets/images/1-js/penguin-windup.jpg" style="width:200px;float:left;border-radius: 10px;margin-right:1rem">

A ***function*** is way of bundling up code to perform specific tasks. It's kind of like making a little JS wind-up toy that runs on command.

Functions are useful because they can help make your code more organized and save you from repetition. If you have to do some task over and over again, you don't want to write out the same code over and over again from scratch.  In other words, if you find yourself ... repeating yourself, it may makes sense to define *one function* that can take in the data as a parameter, then return the changed data to another spot in your program.

Functions in JS can get complex and nuanced, but let's focus on some fundamentals.

## 1.9.1 *Define* a Function

In the current standard of JS, a function is composed of a sequence of statements called the *function body*. Values can be passed to a function as *parameters*, and a function can, and normally should *return* a value.

Below is the basic structure of a basic function body using the arrow notation approach. Note how it:

1. Starts with instantiating a name as a constant: `const meaningfulFunctionName =`.
2. Parantheses provide a place for parameters scoped to use only inside the function body: `(param1, param2)`.
3. Arrow notation tells JS that the body of the function is coming next: ` => `.
4. Curly braces scope the opening and closing of the function body: `{ ... }`.
5. The last line of any function before it closes with the curly brace is its `return` statement: `return newData`.

<!-- Example JS function structure -->
```javascript
const meaningfulFunctionName = (param1, param2) => {
  // A silly example of doing something with the parameters
  let newData = param1 + param2

  // return the desired data
  return newData
}
```

## 1.9.2 *Use* a Function

So, how do you use this awesome new, custom windup function? Easy, you can ***call*** it once it has been defined.

Let's pretend I've defined `meaningfulFunctionName()` in my code already. Now, I can ***call*** and use the function as follows:

```javascript
let q = "Q: Having fun yet?"
let a = "\nA: Of course, Dr. Lindgren! This is all amazing!"
let data = meaningfulFunctionName(q, a)
// data == "Q: Having fun yet?\nA: Of course, Dr. Lindgren! This is all amazing!"
```

## 1.9.3 About Parameters

Each function parameter is a simple identifier that you can access in the local scope of the function body.

```javascript
const myFunc = (a, b, c) => {
  // You can access the values of a, b, and c here
}
// You cannot access a, b, or c here oustide of myFunc
```

## 1.9.4 About Return Statements

The `return` statement allows you to return an arbitrary value from a function. ***One function call can only return one value***. But, you can simulate the effect of returning multiple values by returning an object or array and destructuring the result.

<p class="warning">
  By default, if a function's execution doesn't end at a return statement, or if the return keyword doesn't have an expression after it, then the return value is undefined.
</p>

## 1.9.5 Best Practices for Functions

Functions in all programming languages typically are best written to perform one complete action well. This is also why functions only return one value. In other words, don't write functions that are Jacks of All Trades.

For example, it doesn't make sense to write a function that converts dates in your data AND convert all strings to lowercase characters. Those are distinct functions that should be written separately of each other.

Overall keep that rule-of-thumb in mind as you practice writing functions.

## Exercises

<p class="note--data">
  For our exercises, we will again use the randomly generated sample of 20000 <strong>absentee</strong> NC voter data from the 2024 election cycle. The original set has over 468000 rows, so I reduced it to a smaller number to balance computational performance without forsaking much of the distribution of the full dataset. The data has been anonymized.
</p>

## E1. Attach the dataset

Use D3.js `FileAttachment()` method below in VS Code. Remember that you'll need to write a relative path as a String parameter that helps the computer find where the CSV file is in relation to this particular page's file in the project tree.

<!-- Attach sampled NC voter data -->
```js
const nc2024AbsenteeVoterData = FileAttachment("./../data/nc-voters/nc_absentee_mail_2024_n20000.csv").csv({typed: true})
```

```js
nc2024AbsenteeVoterData
```

## E2. Convert String dates to Date() objects

**Goal**: Write a function that accepts any array of objects that can convert any of its String date fields to Date() objects as a new property in the object.

First outline your procedure with steps below.

1. Import any necessary date methods from D3.js library.
2. Declare new function constant, enter parameter(s) (first one should be `data`).
3. After arrow notation (i.e., in function body) and within curly braces, declare and assign new variable (representing updated data) to new map of `data`. 
4. Enter function conditions. Then, add return statement(s).
5. Open a new codeblock. Inside, declare a constant for the updated data and assign to function from previous codeblock. Enter parameter(s).
6. Open a new codeblock. Inside, enter updated data constant to output to page.

Now, code!

```js
// Your function code goes here
import {utcParse,utcFormat} from "d3-time-format";

const myFunc = (data, dateKeys, dateParser) => {
  let updatedData = data.map(
    (ballot) => {
      for (let date of dateKeys) {
        let dateObjKey = date+"_obj"
        ballot[dateObjKey] = dateParser(ballot[date])
      }

      return ballot
    }
  )
  return updatedData
}
```

```js
const parseMDYSlash = utcParse("%m/%d/%y")
// Add array of date keys here
let dateKeys = ["ballot_req_dt", "ballot_send_dt", "ballot_rtn_dt"]
const updatedData = myFunc(nc2024AbsenteeVoterData, dateKeys, parseMDYSlash)
```

<p class="codeblock-caption">
  E1 Interactive Output
</p>

```js
// Convert and output variable here
updatedData
```

## E3. Create Your Own Function (with Conditions)!

**Goal**: Write your own function using the 2024 absentee NC voter data. The only condition is to include conditions. `:-)`

First outline your procedure with steps below.

1. Declare new function constant, enter parameter(s) (first one should be `data`).
2. After arrow notation (i.e., in function body) and within curly braces, enter function conditions (i.e., new map of `data`). Then, add return statement(s).
3. Open a new codeblock. Inside, declare a constant for the updated data and assign to function from previous codeblock. Enter parameter(s).
4. Open a new codeblock. Inside, enter updated data constant to output to page.

Now, code!

```js
// Your function code goes here
const newFunc = (data) => {
  return data.map(
    (ballot) => {
      if (ballot.ballot_rtn_status === "ACCEPTED") {
      ballot.ballot_rtn_status = "signed, sealed, delivered"
      }
      else {
      ballot.ballot_rtn_status = "straight up in the trash"
      }
      return ballot
    }
  )
}
```

```js
// Your use of the function code goes here
const nc2024AbstVoterDataWNewRtrnStatus = newFunc(nc2024AbsenteeVoterData)
```

<p class="codeblock-caption">
  E2 Interactive Output
</p>

```js
// Your output variable here
nc2024AbstVoterDataWNewRtrnStatus
```

## Submission

1. Create a **PR** (**pull request**) and use the provided content in the template to start it.
2. Respond to your peers and comment on their work on at least one chapter..
3. Submit the PR link in Moodle, when you're ready.
