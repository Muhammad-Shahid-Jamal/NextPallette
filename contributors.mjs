import fetch from 'node-fetch';
import fs from 'fs/promises';


const repositoryOwner = 'Muhammad-Shahid-Jamal';
const repositoryName = 'NextPallette';

const githubApiUrl = `https://api.github.com/repos/${repositoryOwner}/${repositoryName}/contributors`;


// Fetch the list of contributors from the GitHub API.
fetch(githubApiUrl)
  .then(async (response) => {

    const contributors = await response.json();

    const contributorsList = contributors.map((contributor) => {
    //   console.log(contributor.html_url);
      return `- [${contributor.login}](${contributor.html_url})`;

    }).join('\n');

    // Update the README.md file with the contributors' list.
    const readmeFile = 'README.md';
    
    try {

      let data = await fs.readFile(readmeFile, 'utf-8');
    //   console.log(contributorsList);
      data = data.replace('<!-- CONTRIBUTORS-LIST:START -->', `<!-- CONTRIBUTORS-LIST:START -->\n${contributorsList}`);
    //   console.log(data);

      await fs.writeFile(readmeFile, data, 'utf-8');


    } catch (err) {
      console.error('Error reading/writing README.md:', err);
    }
  })
  .catch((error) => {
    console.error('Error fetching contributors from GitHub API:', error);
  });
