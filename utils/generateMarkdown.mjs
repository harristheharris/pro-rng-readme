// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

//I just put the badge and link in one function. I have no idea why you would have them seperate tbh
function renderLicenseBadge(license) {
  if (license == "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  }

  if (license == "ISC") {
    return "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)"
  }

  return ""

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license == "No License") { return "" }
  return `## License \n${renderLicenseBadge(license)}`
}

function renderProjectDescription(description){
  return `## Description \n ${description}`
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

${renderProjectDescription(data.description)}  
${renderProjectInstallation(data.installation)}
${renderProjectUsage(data.usage)}
${renderProjectCredits(data.credits)}
${renderLicenseSection(data.license)}
${renderProjectContact(data.contact)}


`;
}

export default generateMarkdown;
