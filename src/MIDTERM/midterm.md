# To Be Determined

- **Name**: Beatrice Ogeh
- **Dataset**: BooksDataset.csv

## Purpose

Paragraph 1: Briefly explain your reasons for choosing the specific dataset,
which can include any discussion about the topic and particular variables.

The following given executable js codeblock that imports the one set of D3.js
modules that you will need to use for Date() object work. You will need to
remove the forward-slashes preceeding the backticks, since I needed to
eascape these characters within this block.

I chose to work with this dataset because 1) I love books, 2) I want to take this opportunity to practice converting strings into more standard and/or numerical values, and 3) I'm likely to work with this type of data (as opposed to quantitative/numerical data) in my own career.

```js
import {utcParse,utcFormat} from "d3-time-format";
```

Then, divide the notebook into meaningfully sections and subsections.
Use the following general scheme to revise as needed.

## Overview of data set

In this section, be sure to make some small notes about the data and output it
in an executable js codeblock, so you can review it on the page interactively.
You can note its size, for instance, as well as any other notable insights
gleaned during your first glance.

Remember that this is a notebook, so you can treat it like one. `:-)`

Data: Publication information on a random selection of published books
Size: 103,082 objects
Categories (column names): Title, Authors, Description, Category, Publisher, Publish Date, Price

```js
const booksData = FileAttachment("./../data/midterm-options/books/BooksDataset.csv").csv({typed: true})
```

```js
booksData
```

## Convert Dates

Convert the dates, which are strings, into Date() objects with your own custom
D3.js parser and any formatters. Discuss any particular choices to format the
date data in any new ways.

Again, be sure to output your newly transformed data in executable codeblocks
for easier verification and reviewing.

```js
const formalDateParser = utcParse("%A, %B %e, %Y")

const booksDataNew = formalDateParser(booksData[0]["Publish Date"])

console.log(booksDataNew)
```

```js
booksDataNew
```

## Grouping #1 - Name of grouping here

Explain your plan to group the data in a particular way here, before you do so.
At least one of the groupings should use some variation of D3's `.rollup()`, so
you can count particular grouped properties.

Provide a procedure of your grouping plan in an ordered list before the codeblock:

1. Coding_Action_1
2. Coding_Action_2
3. ...

Again, be sure to output your newly transformed data in executable codeblocks
for easier verification and reviewing.

## Grouping #2 - Name of grouping here

Explain your plan to group the data in a particular way here, before you do so.
At least one of the groupings should use some variation of D3's `.rollup()`, so
you can count particular grouped properties.

Provide a procedure of your grouping plan in an ordered list before the codeblock:

1. Coding_Action_1
2. Coding_Action_2
3. ...

Again, be sure to output your newly transformed data in executable codeblocks
for easier verification and reviewing.

## Reflection

Use the following prompt to guide your reflection about your data work:
"What 2-3 insights and 2-3 questions did you glean from your initial work
with the dataset?"

Use the PR-TEMPLATE prompts to reflect on the midterm experience.