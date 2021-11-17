# Get version from tag

## Intro

Get version number from a GitHub tag

Behaviour:
- read version out of a tag matching `v-` prefix
- read version out of a tag matching `*v-` prefix
- throw error for tags not matching any pattern

| Tag value        | Version output  |
| ---------------- | --------------- |
| v-1.0.5          | 1.0.5           |
| v-1.0.5-pre      | 1.0.5-pre       |
| sa-v-1.0.5       | 1.0.5           |
| sa-v-1.0.5-pre   | 1.0.5-pre       |

## Example

```yaml
name: test-workflow

on:
  push:
    tags:
      - sample-v-*

jobs:
  sample-job:
    runs-on: ubuntu-latest
    steps:
    - id: get_version
      name: Get version
      uses: hfngg/hfngg-actions-get-version-from-tag@v-1.0.0

    - name: Display version
      run: |
        VERSION=$(echo "${{ steps.get_version.outputs.version }}")
        echo $VERSION
```

## Build process

To create a new version it is required to package 
code locally and commit dist resources into the repository 
to make it available to the runner.

```
npm i
npm run package
```

## Based on

- `https://docs.github.com/en/actions/creating-actions/creating-a-javascript-action`
- `https://github.com/vercel/ncc`
- `https://github.com/JanneMattila/get-version-from-tag`