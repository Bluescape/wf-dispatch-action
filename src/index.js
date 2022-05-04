const core = require('@actions/core')
const github = require('@actions/github')

async function main() {
  const token = core.getInput('github-token')
  const ref = core.getInput('ref')
  const workflow = core.getInput('workflow')
  const inputs = JSON.parse(core.getInput('inputs') || '{}')
  const owner = core.getInput('owner') || github.context.repo.owner
  const repo = core.getInput('repo') || github.context.payload.repository.name

  console.log(`Workflow: ${workflow}\nReference: ${ref}\nInputs: ${JSON.stringify(inputs)}`)

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