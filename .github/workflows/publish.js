const moment = require('moment')
function publish(github, context) {
	tag_name = moment().format('YYYYMMDD-HHmmss');
	releaseInfo = github.rest.repos.createRelease({
	     owner: context.repo.owner,
	     repo: context.repo.repo,
	     tag_name});
        console.log(releaseInfo);
//         github.rest.repos.uploadReleaseAsset({
// 	     owner: context.repo.owner,
// 	     repo: context.repo.repo,
// 	     release_id: tag_name,
// 	     name: "test.txt",
// 	    data: "testdata",
    // });
        release = octokit.rest.repos.getReleaseByTag({
             owner: context.repo.owner,
             repo: context.repo.repo,
             tag: tag_name,
	});
        releaseId = release.data.id;
        releaseUrl = release.data.upload_url;
        octokit.request({
          method: "POST",
          url: releaseUrl,
          headers: {
            "content-type": "text/plain",
          },
          data: "Hello, world!\n",
          name: "test-upload.txt",
          label: "test",
        });
      })
//	github.request('POST /repos/{owner}/{repo}/releases/{release_id}/assets{?name,label}', {
//	     owner: context.repo.owner,
//	     repo: context.repo.repo,
//	     release_id: releaseInfo.id,
//	     data: '@file.lst'});
    }

exports.publish=publish;
