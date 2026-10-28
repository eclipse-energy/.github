# Contributor

Guidelines we as the Eclipse Team want to hold ourselves to when contributing code.

## IDE

Our IDE of choice is IntelliJ IDEA (and VS Code for frontend). Repositories and style guides are set up with these two IDEs in mind.

## Branches

Branch names should always follow this convention:

`USER_SHORTNAME/GH_ISSUE my awesome branch`

e.g. `gert/gh-1 create contributing guidelines`

This allows us to quickly identify who is responsible for the branch and why it exists.
In the rare case that there is no associated issue for the branch, please use `noissue`:

e.g. `gert/noissue testing some stuff locally`

Following these conventions will cause branches to look like this in IntelliJ IDEA:

![Branch IntelliJ example](/IntelliJ_example.png)

## Commits

- commits should start with the issue number: e.g. `GH-1:`
- commit messages should be short and descriptive.
- try to keep commits short and commit often.

## Pull requests

See the [Reviewee guidelines](/reviewee) to know how PRs should look and what to expect from a review.
