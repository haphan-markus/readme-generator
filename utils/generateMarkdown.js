// function to generate markdown for README
function generateMarkdown(data) {
  let bar = "```";
  return `
  # ${data.title}

  ## Description
  ${data.description}

  ## User story
  
  * ${data.userstory}

  ## Tables of Contents
    * Installation
    * Usage
    * Licence
    *   Contributing
    *   Tests
    *   Questions

  ## Installation

  To install necessary dependencies, run the following command:

  ${bar} bash 
  ${data.installationInstructions}
  ${bar}
  
  ## Usage
  ${data.usage}

  ## Contributing
  ${data.contributing}

  For further discussion, please contact me via https://github.com/${data.github} and email ${data.email}.

  ## Tests

  ## Licence
  ${data.licence}

`;
}

module.exports = { generateMarkdown }; // This will call the generateMarkdown function inside this file
