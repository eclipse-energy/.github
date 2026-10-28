# Giving feedback

Some guidelines on how to give better review comments.

## General

- be kind and courtous
- we are all professionals and we expect team member to open PRs and make changes in good faith.
- encourage simplifications
- balance giving explicit directions with just pointing out problems and letting the developer decide.

## Courtesy

- we comment on the code not the developer.
  - bad: `why did you do x when it is obviously not a good idea?`
  - better:`from what i can see, x does not seem to bring any benefit. Would it not be better to do y?`
- this is a guideline not a rule. If appropriate you can of course mention the author themself in comments.

## Explain Yourself

- always explain your reasoning / thoughts in comments. PR authors can not read your mind.
- properly explained reasoning can turn comments into learning experiences for everyone involved.

## Guidance

- it is not the reviewers reponsibility to fix issues inside a PR.
- you **do not have to** come up with a full solution or write code yourself to fix something
  - this does not mean you should be unhelpful. Strike a balance between hard suggestions and letting the author decide what is best.
  - sometimes direct suggestions can be very helpfull. Make use of Github`s suggestion feature for that.
- comment and highlight things you liked in a PR. Reinforcement is not just for LLM training. Positive comments encourage authors to also keep using best practices in the future.

## Proper Labeling

- properly label comments with their serverity.
- for example: `nit:` for non blocking comments or `optional:`
- important here is to clearly state your intent in the comment. What do you want the author to do with it? Is this mandatory to fix?

## Discussions with the author

- when discussing with authors in code reviews be ready to accept explanations
- if code seems to complex consider the following
  - are you confident in your knowledge of the specific codebase and field?
  - if yes:
    - ask the author to explain the code. This should usually result in them rewriting the code more clearly.
    - occasionally, adding a comment in the code is also an appropriate response, as long as it is not just explaining overly complex code.
    - explanations written only in the code review tool are not helpful to future code readers.
  - if no:
    - when you are reviewing an area you are not very familiar with, an explanation in the review tool is acceptable if it covers something that normal readers of the code would already know.

### Handling pushback

- when an author disagrees, first consider whether they are right. They are often closer to the code than you are.
  - if their argument makes sense from a code health perspective, tell them they are right and drop the issue.
  - if not, explain further why you think your suggestion is correct. Show that you understood their reply and add new information about why the change is needed.
- if you believe a change improves code health and the improvement justifies the additional work, keep advocating for it. Code health improves in small steps.
- sometimes it takes a few rounds of explanation. Stay polite and let the author know you hear them, you just do not agree.
- authors rarely get upset when comments are polite. Upset is usually about how comments are written, not about the insistence on quality.
- "i will clean it up later" usually means it never happens. Insist on the cleanup before merging.
  - if the PR introduces new complexity, it must be cleaned up before merging unless it is an emergency.
  - if the PR exposes surrounding problems that cannot be fixed right now, the author should file an issue for the cleanup and assign it to themselves. A `TODO` comment referencing the issue is optional.
- complaints about strict reviews usually fade as review speed improves and authors see the value of the feedback.
- if a conflict cannot be resolved, keep it mine the main directive: if a PR improves code health/quality and has no major issue => approve it.
