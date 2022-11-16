// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license){
    case 'Apache License 2.0':
      return `![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`;
    case 'BSD 3-Clause "New" or "Revised"':
      return `![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)`;
    case 'MIT license':
      return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
    case 'Mozilla Public License 2.0':
      return `![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)`
    default:
      return ``;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license){
    case 'Apache License 2.0':
      return `https://opensource.org/licenses/Apache-2.0`;
    case 'BSD 3-Clause "New" or "Revised"':
      return `https://opensource.org/licenses/BSD-3-Clause`;
    case 'MIT license':
      return `https://opensource.org/licenses/MIT`;
    case 'Mozilla Public License 2.0':
      return `https://opensource.org/licenses/MPL-2.0`
    default:
      return ``;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `This project is license under ${license}`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  [${renderLicenseBadge(data.license)}](${renderLicenseLink(data.license)})

  ## Description
  ${data.description}
  
  # Table of Content
  - [Instructions](#instructions)
  - [Usage Information](#usage-information)
  - [License](#license)
  - [Contribution Guidelines](#contribution-guidelines)
  - [Test Instructions](#test-instructions)
  - [Question](#question)
  
  ## Instructions
  ${data.instructions}

  ## Usage Information
  ${data.usage}

  ## License
  ${renderLicenseSection(data.license)}

  ## Contribution Guidelines
  ${data.contribution}

  ## Test Instructions
  ${data.test}

  ## Question
  If you have any additional questions about this project, Feel free to reach me at [${data.email}](${data.email}).
  For more of my project, please visit [https://github.com/${data.github}](https://github.com/${data.github})
  `;

}

module.exports = generateMarkdown;
