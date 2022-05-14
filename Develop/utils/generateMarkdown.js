function generateMarkdown(userData) {
  return `
 <h1> #${userData.title} </h1>
 
 https://img.shields.io/badge/license-${userData.license}-brightgreen
 
  ## Table of Contents
  - [Description](#Description) 
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [License](#License)
  - [Contributing](#Contributing)
  - [Tests](#Tests)
  - [Questions](#Questions)

  ## Description
  ${userData.description}
  
  ## Installation:
  ${userData.installation}

  ## Usage
  ${userData.usage}

  ## License
  This application is covered by the ${userData.license} license.

  ## Contributing
  ${userData.contributing}

  ## Tests
  ${userData.tests}

  ## Questions
  ${userData.questions}
  

  Find me on Github: [${userData.github}](https://github.com/${userData.github})

  Email me with questions: ${userData.email}

`}
module.exports = generateMarkdown;

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (licenseInput) {
   
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
