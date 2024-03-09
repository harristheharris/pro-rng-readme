// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

//I just put the badge and link in one function. I have no idea why you would have them seperate tbh
function renderLicenseBadge(license) {

  //I have no idea why this isn't working now. Intially it rendered the svg image but now it does not?????
  const objLicense = { 
    badge: `[![License: ${license}](https://img.shields.io/badge/License-${license}-yellow.svg)]`,
    liceName: `${license}`,
    link:`https://opensource.org/licenses/${license}`
  }

  if (license) {
    return `
    ${objLicense.badge}  
    This application is covered under the ${objLicense.liceName} license.
    `
  }

  return ""

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license == "No License") { return "" }
  return `## License ${renderLicenseBadge(license)}`
}

function renderProjectDescription(description){
  return `## Description \n ${description}`
}

function renderGitUserName(usernameGithub){
  return `[${usernameGithub}.com](https://github.com/${usernameGithub})`
}

function renderEmail(usernameEmail){
  return `email: ${usernameEmail}`
}

function renderProjectInstallation(installation){
  return `## Installation \n ${installation}`
}

function renderProjectUsage(usage){
  return `## Usage \n ${usage}`
}

function renderProjectCredits(credits){
  return `## Credits \n ${credits}`
}

function renderProjectContact(contact){
  return `## Contact Me \n ${contact}`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## **Table of Contents:**

- [Description](#desc)
- [How to Install](#install)
- [Project Usage](#use)
- [Credits](#cred)
- [License](#lice)
- [Questions](#quest)

<a id="desc"></a>
${renderProjectDescription(data.description)}

<a id="install"></a>
${renderProjectInstallation(data.installation)}

<a id="use"></a>
${renderProjectUsage(data.usage)}

<a id="cred"></a>
${renderProjectCredits(data.credits)}

<a id="lice"></a>
${renderLicenseSection(data.license)}

<a id="quest"></a>
## Questions \n
${renderGitUserName(data.usernameGithub)} \n
${renderEmail(data.usernameEmail)}

`;
}

export default generateMarkdown;
