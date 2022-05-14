function generateMarkdown(userData) {
  return `
 <h1>${userData.title} </h1>
 
![badge](https://img.shields.io/badge/license-${userData.license}-brightgreen)
 
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
  
  ## Installation
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
  
  Find me on Github: [${userData.github}](https://github.com/${userData.github})

  Email me with questions: ${userData.email}

`}
module.exports = generateMarkdown;