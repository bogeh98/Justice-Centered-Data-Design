# Processing Book Publication Data

- **Name**: Beatrice Ogeh
- **Dataset**: BooksDataset.csv

## Purpose

I chose to work with this dataset because (1) I love books, (2) I want to take this opportunity to practice converting strings into more standard and/or numerical values, and (3) I'm likely to work with this type of data (as opposed to quantitative/numerical data) in my own career.

```js
import {utcParse,utcFormat} from "d3-time-format";
```

## Overview of Data Set

Data: Publication information on a random selection of published books

Size: 103,082 objects

Headings (column names): Title, Authors, Description, Category, Publisher, Publish Date, Price

```js
const booksData = FileAttachment("./../data/midterm-options/books/BooksDataset.csv").csv({typed: true})
```

```js
booksData
```

## Convert Dates

Below, I converted the "Publish Date" date strings into Date() objects. Then, I converted those Date() objects back into date strings, but in a more standard format: mm/dd/YYYY.

```js
// LINDGREN: Add all of your parsers and formatters in 1 place for findability
const formalDateParser = d3.utcParse("%A, %B %_d, %Y")
const yearFormatter = d3.utcFormat("%Y")

## Grouping #1 - Books/Publication Information Sorted by Category (Topic)

1. Open new `js` codeblock.
2. Using the `d3.group()` method, declare and assign a new variable to the new grouping.
3. Enter the parameters: the data set (`booksData`) and the function specifying which field(s) (`Category`) to group the data by.
4. Add the new group to a new `js` codeblock to render an interactive output.

```js
const booksByCategoryInternMap = d3.group(
  booksData,
  (d) => d.Category
)
```

```js
booksByCategoryInternMap
```

## Grouping #2 - Authors and Titles Sorted by Book Category (Topic)

1. Open new `js` codeblock.
2. Using the `d3.rollup()` method, declare and assign a new variable to the new grouping.
3. Enter the parameters: the data set (`booksData`) and the function specifying which field(s) (`length`, `Category`, `Authors`, `Title`) to reduce the data to.
4. Add the new group to a new `js` codeblock to render an interactive output.

```js
const booksDataRollUpCategoryAuthorsAndTitle = d3.rollup(
  booksData,
  (D) => D.length,
  (d) => d.Category,
    (d) => d.Authors,
    (d) => d.Title
)
```

```js
booksDataRollUpCategoryAuthorsAndTitle
```

## Reflection

**What 2-3 insights and 2-3 questions did you glean from your initial work
with the dataset?**

### Insights

1. After reducing my data set using the d3.rollup() method, I was able to easily figure out how many books any author had published in a given category/topic. This illustrated to me how useful d3.rollup can be for narrowing down a data set to a more digestible format.

2. I also realized that the two grouping methods could be especially helpful for identifying patterns within a data set that represents a arbitrary selection of data.

### Questions

1. The values in the `Publish Date` property all returned as `null` after I converted the date strings in my data set to Date() objects (even though, as far as I know, the format string in my date parser is correct). What is the reason for this?

2. Does `.length` have to be one of the fields in a `d3.rollup`? When I left it out, it returned `undefined`.