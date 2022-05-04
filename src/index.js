const core = require('@actions/core')
const github = require('@actions/github')

async function main() {
  const token = core.getInput('github-token')
  const ref = core.getInput('ref')
  const workflow = core.getInput('workflow')
  const inputs = JSON.parse(core.getInput('payload') || {})
  const owner = core.getInput('owner') || github.context.repo.owner
  const repo = core.getInput('repo') || github.context.payload.repository.name

  console.log(`Workflow: ${workflow}\nRenference: ${ref}\nInputs: ${inputs}`)

  const octo = github.getOctokit(token)
  octo.rest.actions.createWorkflowDispatch({
    owner,
    repo,
    workflow_id: workflow,
    ref,
    inputs
  })
}

main().catch((error) => {
  core.setFailed(error.message)
})