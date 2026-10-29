# AI code reviews

Guidance for setting up AI agents to review pull requests.

>[!IMPORTANT]
>AI review runs in **addition** to human review, never instead of it.

## Agents do not reliably read the PR description

Our [PR template](https://github.com/eclipse-energy/.github/blob/main/PULL_REQUEST_TEMPLATE.md) links the review guidelines and asks AI reviewers to fetch them.
Not every agent does that. Many tools only look at the diff, or at the title and a truncated description, so the links and instructions in the description are never seen.

Do not rely on the description alone. If your agent does not read it, give it the instructions yourself:

- **Prompt it directly.** Tell the agent to read the PR description and linked issue, and to fetch the [reviewer guidelines](/reviewer) and [guidelines for AI agents](/ai/for-agents).
- **Use a skill or custom command.** Put the steps in a reusable skill so every review starts the same way. See the [example skill](/ai/example-skill).
- **Use the agent's instruction file.** Repository-wide rules belong in the file your agent loads automatically, e.g. `AGENTS.md`, `CLAUDE.md` or the tool's equivalent.
- **Check what it read.** Ask the agent to list the sources it used. If the PR description is missing, rerun with explicit instructions.

## What a review instruction should cover

1. Read the PR description, linked issue and existing comments.
2. Fetch and follow the team guidelines.
3. Judge the change against the stated intent, not just the diff.
4. Report what was and was not reviewed.
5. Leave approval to a human.

## Further reading

- [Example code review skill](/ai/example-skill)
- [For AI agents](/ai/for-agents)
- [For people using AI](/ai/for-people)
