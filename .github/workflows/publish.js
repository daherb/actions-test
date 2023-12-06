const moment = require('moment')
function publish(github, context) {
	tag_name = moment().format('YYYYMMDD-HHmmss');
	releaseInfo = github.rest.repos.createRelease({
	     owner: context.repo.owner,
	     repo: context.repo.repo,
	     tag_name});
        console.log(releaseInfo);
        github.rest.repos.uploadReleaseAsset({
	     owner: context.repo.owner,
	     repo: context.repo.repo,
	     release_id: tag_name,
	     name: "test.txt",
	    data: "testdata",
});
//	github.request('POST /repos/{owner}/{repo}/releases/{release_id}/assets{?name,label}', {
//	     owner: context.repo.owner,
//	     repo: context.repo.repo,
//	     release_id: releaseInfo.id,
//	     data: '@file.lst'});
    }

exports.publish=publish;
