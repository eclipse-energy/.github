# Reviewee

Guidelines for creating PRs and to get your PR accepted as efficiently as possible.

## Size

>[!IMPORTANT]
>Our most common issue. Please follow these rules!

- keep PRs as small as possible!
- if your PR is too large split it up into multiple!
- try to keep it below **30 Files changed** and **3000 new lines**
  - if your PR is too large reviewers will not review it and will ask you to split it up
  - if it is not possible to split up, note it in the PR summary and expect slower reviews.

## General

- PR names should start with the issue number. e.g. `GH-1: Setup vitepress`.
- PR names should describe what is actually being done. You can also just use the issue name.
- use the PR template and fill it out properly.
  - add closing keywords, e.g. `closes #1` or link the issue in the development section of the PR.
  - use the description to give some extra context. e.g. `Needed to also change the frontend since API changes effected it as well.`
  - add a rough list of changes made.
  - when making UI changes: include relevant screenshots.
- you own and are responsible for your PR.

## Before requesting a review

make sure that:

- you have filled out the PR summary.
- you are under or close to the size limit.
- you had a quick look over all your changes yourself.
- all Actions pass (e.g. E2E tests or build).
  - (usually) reviewers will not review a PR that has failing pipelines.
- you have removed all unneeded comments.

## How to handle reviewer comments

adapted from [Google Code review practices](https://google.github.io/eng-practices/review/developer/handling-comments.html).

- don't take comments personally. reviewers are trying to improve the code, not judge you.
  - if a comment comes across harsh, ask yourself what the constructive point is and respond to that.
  - never reply in anger. take a break first, then answer politely.
- if a reviewer doesn't understand your code, fix the code first!
  - clarify the code or add a comment. only explain it in the PR if neither makes sense.
  - other readers will get stuck on the same thing later.
- make sure you understand the comment. if not, ask for clarification.
- if you disagree, discuss it instead of refusing.
  - explain why you chose your approach and the tradeoffs involved, then ask what the reviewer thinks. Do not just simply reply with "no".
  - e.g. `I went with X because of A and B. Y would be worse because of C. Do you think we should weigh these differently?`
  - you might know something about the code or users that the reviewer doesn't. share that context.
- if you can't reach an agreement, ask another team member to weigh in.

## After review

- merge your PR if it was accepted.
- re-request review after changes requests have been implemented.
  - make sure workflows still pass.
- update PR description & screenshots if significant changes have been implemented.
