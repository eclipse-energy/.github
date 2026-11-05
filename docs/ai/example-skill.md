# Example code review skill

A reference for building your own code review skill. It uses the common `SKILL.md` format (a `name` and `description` in frontmatter, instructions in the body), which most agents support in some form.

## Adapting it

- **Placement differs per tool.** Claude Code reads `.claude/skills/<name>/SKILL.md` (repo) or `~/.claude/skills/<name>/SKILL.md` (personal). Other agents use their own location or a custom command or prompt file. Check your tool's docs and paste the body if it has no skill support.
- **Keep the `description` about when to use it**, not what it does, so the agent picks it up for review requests.
- **Swap the commands.** The example uses the `gh` CLI. Use whatever your agent can run.
- **Keep it short.** Link to the guidelines instead of copying them, so the skill does not go stale.

[Raw SKILL.md on GitHub](https://github.com/eclipse-energy/.github/blob/main/docs/public/skills/code-review/SKILL.md)

<<< @/public/skills/code-review/SKILL.md{md}
