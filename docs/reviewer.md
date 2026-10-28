# Reviewer

Guidelines to follow when reviewing a PR.
Loosely adapted from [Google Standard of Code Review](https://google.github.io/eng-practices/review/reviewer/standard.html) to fit our team.

We also recommend to use the [Refined Github Extension](https://github.com/refined-github/refined-github) for a better Review experience.

## General

>[!IMPORTANT]
>Reviewers should favor approving a PR once it improves the overall code quality/health of the system, even if there are still some issues.
>You can always create follow up issues. Velocity is king.

- keep code reviews professional. Keep personal opinions and preferences to a minimum.
- do not demand changes, but clarify why you think a change is needed.
- sometimes there are multiple ways to achieve the same thing. Please weigh pros and cons and if a change is worth the increased workload.
- prefix non-blocking / less important comments with `nit:` to let authors know they can ignore the comment.
- **always** feel free to add comments even if they are not about changes or clarifying questions.
- code reviews also function as a teaching tool for developers learning a new language or framework.
Sharing knowledge inside code reviews will also improve code quality in the long term (`nit:` comments).
- reviewers should consider the circumstances of a PR.
  - e.g. if there is an urgent bug that needs fixing it is okay to approve a PR if it fixes the problem even if it might worsen the code in the short term.
  - but out the fire first then start repairing the damage.

## Further reading

- [What to look for](/reviewer/what-to-look-for)
- [Navigating code reviews](/reviewer/navigating-code-reviews)
- [Giving feedback](/reviewer/giving-feedback)
