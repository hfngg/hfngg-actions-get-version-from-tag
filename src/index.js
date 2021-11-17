const core = require('@actions/core');
const github = require('@actions/github');

try {
  let tag = github.context.payload.ref.replace("refs/tags/",'');
  if (tag.indexOf("v-") === -1) {
      core.setFailed(`Invalid tag. Expected a tag containing 'v-' prefix but got '${tag}'.`);
      return;
  }
  tag = tag.substring(tag.indexOf("v-") + 2);
  core.info(`Version: ${tag}`);
  core.setOutput("version", tag);
} catch (error) {
  core.setFailed(error.message);
}
