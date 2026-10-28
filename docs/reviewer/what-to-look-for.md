# What to look for in a code review

General tips on what to look for when reviewing a PR.

## Design

The most important thing to check. Look at the PR as a whole before the details.

- do the pieces of the change fit together?
- does it integrate well with the rest of the system?

## Functionality

- does the PR do what the issue asks, and is that good for the users? Users are end-users and the developers who will work with this code later.
- think about edge cases, error handling and bugs you can spot just by reading.
- for UI changes: check out the branch or ask the author for a quick demo. Screenshots are not always enough.
- look closely at concurrency (race conditions, deadlocks). These are hard to find by running the code, so think them through.

## Complexity

- is the change more complex than it needs to be? Check lines, functions and classes.
  - "Too complex" means it can't be understood quickly, or it is easy to break when someone changes it.
- watch out for over-engineering. Solve the problem we have now, not one we might have later.
- if a PR is to large to review properly, ask the author to split it up into multiple PRs if possible.

## Tests

- ask for unit, integration or E2E tests as appropriate. Tests belong in the same PR as the code.
  - some repositories have a workflow for SonarQube analysis, but this is not always the case.
- tests don't test themselves. Check that they would fail if the code broke, and that they don't give false positives.
- keep assertions simple and tests separated by behavior.
- tests are code too. Don't accept complexity just because it is "only tests".

## Naming

- names should be long enough to say what something is or does, but short enough to read easily.
  - applies to variables, file names etc.

## Comments

- comments should explain *why*, not *what*. If the code needs a comment to explain what it does, simplify the code.
- exceptions are things like regexes and complex algorithms.
- check old comments as well: maybe a `TODO` can be removed now.
- comments are not documentation. Documentation describes the purpose and usage of a class, module or function.
- comments cleary written by AI agents should almost always be removed before merge.

## Style and consistency

- leave style nitpicks to formatters and linters.
  - most repository should have a workflow for enforcing formatting rules.
- don't block a PR on personal preference. Prefix optional points with `nit:`.
- major style changes (e.g. reformatting a whole file) belong in their own PR.
- if nothing else applies, stay consistent with the existing code.

## Documentation

- if the PR changes how things are built, tested, used or released, the README and other docs should change too.
- if code is deleted or deprecated, check if its docs should be removed
  - e.g. updating API specs and usage of their endpoinsts

## Every line

- look at every line you were asked to review. Generated code and data files can be skimmed
  - for generated code please think twice if it even makes sense to have it in version control.
- don't skim over non-generated code and assume it is fine.
- if you can't understand the code, ask the author to clarify it. Others will have the same problem later.
- if you understand it but don't feel qualified (e.g. security, accessibility, frontend/backend), make sure someone who is qualified reviews it.
- if you only reviewed part of the PR, say which part in your review (again frontend/backend).

## Context

- if a diff is not understandable on first viewing, open the whole file to understand the full context. Four new lines in a 50 line method might mean the method needs splitting up.
- think about the system as a whole. Don't accept changes that make it more complex or less tested, even slightly. Small changes add up.

## Good things

- if you see something nice, say so. Especially when the author addressed one of your comments well.
- telling someone what they did right is often more valuable than telling them what they did wrong.

## Summary

Make sure that:

- the code is well-designed and good for the users.
- any UI changes are sensible and look good.
- concurrency is handled safely.
- the code is not more complex than needed, and nothing is built "just in case".
- there are appropriate, well-designed tests.
- names are clear and comments explain *why*.
- docs are updated.
- you reviewed every line, looked at the context and complimented good work.
