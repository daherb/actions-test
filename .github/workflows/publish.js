const moment = require('moment')
const tag_name = moment().format('YYYYMMDD-HHmmss')
const releaseInfo = github.rest.repos.createRelease({
    owner: context.repo.owner,
    repo: context.repo.repo,
    tag_name})
#            github.rest.repos.uploadReleaseAsset( {
await github.request('POST /repos/{owner}/{repo}/releases/{release_id}/assets{?name,label}', {
    owner: context.repo.owner,
    repo: context.repo.repo,
    release_id: releaseInfo.id,
    data: '@file.lst'})
