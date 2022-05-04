# wf-dispatch-action

## Description

Trigger a Workflow dispatch from a workflow without having to make a request or curl.

## Pre-requisites
Create a workflow `.yml` file in your `.github/workflows` directory. An example workflow is available below. For more information, reference the GitHub Help Documentation for [Creating a workflow file](https://help.github.com/en/articles/configuring-a-workflow#creating-a-workflow-file)..

## Arguments
See `action.yml` for a list of the arguments.

## Usage

Trigger a test run with payload arguments on the develop branch.
```yml
- uses: bluescape/wf-dispatch-action@main
  with:
    github-token: ${{ env.GITHUBPAT }}
    workflow: e2e-webc.yml
    ref: develop
    inputs: |
      { 
        "environment": "uat.alpha.dev.bluescape.io",
        "run_type": "precommit",
        "docker-tag": "latest"
      }
```