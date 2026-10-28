# Navigating a code review

How to move through a PR so you review it efficiently.

## 1. Take a broad view

- make sure the PR or the parts you intend to review are not actively being worked on. Do not review Draft PRs.
- read the PR description and the linked issue. Does the change make sense?
- if the change shouldn't have happened at all, respond right away and explain why. Suggest what the author could do instead.
  - be polite. Thank the author for the work and point them in a better direction.
  - usually changes are related to an issue.
- don't spend time on the details of a change that is going to be rejected anyway.

## 2. Examine the main parts

- find the file(s) with the biggest logical change. Often this is the file with the most lines changed.
- review these first, since they give context for everything else.
- if you find major design problems, send those comments immediately, before reading the rest.
  - the author might be about to rewrite that part, so reviewing the rest would be wasted effort.
  - it also unblocks the author sooner.

## 3. Look through the rest

- go through the remaining files in a sensible order. Reading the tests first can help, since they show the intended behavior.
- open the whole file when the diff doesn't give enough context.
- use [What to look for](/reviewer/what-to-look-for) as a checklist.
