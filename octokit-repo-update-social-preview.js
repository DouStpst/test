const { Octokit } = require("@octokit/rest");
const fs = require("fs");

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN
});

const owner = "DouStpst"; // Remplacez par votre nom d'utilisateur GitHub
const repo = "test"; // Remplacez par le nom de votre dépôt
const pathToImage = "assets/social-preview.png"; // Chemin vers l'image de l'aperçu social

async function updateSocialPreview() {
  const image = fs.readFileSync(pathToImage);

  await octokit.request('PATCH /repos/{owner}/{repo}/social_preview', {
    owner,
    repo,
    mediaType: {
      previews: ['scarlet-witch']
    },
    data: image
  });

  console.log("Social preview updated successfully!");
}

updateSocialPreview().catch(err => {
  console.error("Error updating social preview:", err);
});
