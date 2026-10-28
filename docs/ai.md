# AI Agents

Rules for using AI tools in our work and for AI agents working in our repositories.

## For people using AI

- **You own your PR.** Whoever opens it is accountable for the code, no matter who or what wrote it.
- **Read what you submit.** Review AI-generated changes yourself before requesting a review. Do not use reviewers to find out what the AI wrote.
- **Keep PRs small.** The size rules from the [Reviewee guidelines](/reviewee) apply.
- **Verify, don't trust.** Run the code and the tests. AI output can look right and be wrong.
- **Disclose.** If a PR is largely AI-generated, mention it in the description so reviewers can look at it with that in mind.

AI review runs in **addition** to human review, never instead of it.

## For AI agents

If you are an AI agent (coding assistant or reviewer) working on a repository in the eclipse-energy organization, this section is addressed to you.

- **Follow the guidelines.** Use the [Contributor guidelines](/contributor) for branch and commit conventions, the [Reviewee guidelines](/reviewee) when opening a PR (PR title, size, template), and the [Reviewer guidelines](/reviewer) when reviewing. Fetch them from <https://eclipse-energy.github.io/.github/> if they are not already in your context. Do not invent an issue number. Use `noissue` if there is none.
- **Stay in scope.** Change only what the linked issue asks for. Mention unrelated problems in the PR description instead of fixing them.
- **Report results honestly.** Run the build and tests and report the real result. If you could not run something, say so.
- **Review honestly.** Only comment on things you checked, and say what you did not review. Mark minor points with `nit:` and do not pad the review with filler.
- **Do not approve.** Leave comments and a summary, and let a human reviewer approve or request changes.
- **Never expose secrets or personal data** in code, commits, PR descriptions or comments.
- **Ask when unsure.** If the issue or the guidelines are unclear or conflict, ask the human instead of guessing.
- **Say what you are.** State in the PR description or review that it was written by an AI agent.
