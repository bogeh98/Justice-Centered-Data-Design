# Midterm - JavaScript Demonstration

In this midterm for graduate students only, you will create a new page in this Midterm folder, so you can demonstrate the synthesis of all of the skills that we have learned up to this point in the semester.

## Purpose

This purpose of the midterm praxis is two-fold. 

<p class="drop_case_first_letter">
  1 Firstly, the midterm is meant to prepare all of you to understand how to create your own pages from scratch, since the final team project asks you to create your own distinct data app from scratch. To begin the process of making sure that you are ready and able to do so, this midterm asks you to create your own page in this folder, wherein you work through a series of data transformative tasks with one new dataset.
</p>

<p class="drop_case_first_letter">
  2 Secondly, the midterm is meant to demonstrate to yourself and to me what level of knowledge and skill you have acquired up to this point. In so doing, we can evaluate what knowledge and skills the class as a whole may need to be reviewed and discussed further, as we begin to apply these programmatic data skills to descriptive statistical techniques during the next unit.
</p>

I know exams can be scary, and learning these skills can compound these feelings. So, I want to reassure you that I am here not to punish you with this exam, but *reward you with full credit for the act and process of learning*! I am here to educate and support you. That's my aim for you.

For these reasons above, everyone has 1 week to complete a full ***first draft*** of the midterm. Yet, you can revise the midterm for full credit, based on any feedback provided to you. And, you have until the end of the course to retry and revise it for full credit.

## Learning Objectives

Demonstrate the following knowledge and skills:

- Attaching a dataset to a project page
- Appropriate use of Markdown throughout your page:
    - Level headings for sections with meaningful heading copy
    - Bulletted lists
    - Use of executable and non-executable codeblocks and inline code markup
    - Other stylistic markup used only as needed

## Logistics

- **First Draft Due**: Friday, 09/19/2025
- **Revisions Due**: End of semester
- **File**: Use the `midterm.md` file in this folder.
- **Points**: 100 points weighted at 10% of your overall grade.
- **Process**: Use the typical GH workflow.
    1. Create meaningful **branch** that uses this name: `CHP/lastname--MIDTERM`.
    2. Practice the iterative process to **commit** and **push** regularly with meaningful **commit messages**.

### Choosing a dataset

You will need to use one of the 3 available datasets provided in `/src/data/midterm-options/`:

1. `/books/`: A dataset with scraped publication information about published books.
2. `/meta-ads/`: A dataset created and used by the folks at The Markup, which looked at how much money Meta made from ads in relationship to political violence.
3. `/pollution/`: A dataset created and used by scientists to help develop more robust predictive models about large city pollution.

## Required Sections

In the preformatted text block below, I provide you with a template by which to use and modify in your midterm.md file.

```md
# Title for the page

- Unordered list of the following information:
- **Name**: Your first and last name
- **Dataset**: Filename of the chosen dataset

## Overview

Paragraph 1: Briefly explain your reasons for choosing the specific dataset,
which can include any discussion about the topic and particular variables.

The following given executable js codeblock that imports the one set of D3.js
modules that you will need to use for Date() object work. You will need to
remove the forward-slashes preceeding the backticks, since I needed to
eascape these characters within this block.

\`\`\`js
import {utcParse,utcFormat} from "d3-time-format";
\`\`\`

Then, divide the notebook into meaningfully sections and subsections.
Use the following general scheme to revise as needed.

## Attach the data

In this section, be sure to make some small notes about the data and output it
in an executable js codeblock, so you can review it on the page interactively.
You can note its size, for instance, as well as any other notable insights
gleaned during your first glance.

Remember that this is a notebook, so you can treat it like one. `:-)`

## Convert Dates

Convert the dates, which are strings, into Date() objects with your own custom
D3.js parser and any formatters. Discuss any particular choices to format the
date data in any new ways.

Again, be sure to output your newly transformed data in executable codeblocks
for easier verification and reviewing.

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

```
