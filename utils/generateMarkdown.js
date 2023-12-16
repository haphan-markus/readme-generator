// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.description}

  ## Installation
  ${data.installationInstructions}

  ## Usage
  ${data.usage}

  ## Contributing
  ${data.contributing}

  For further discussion, please contact me via https://github.com/${data.github} and email ${data.email}.

  ## Deployment
  

  ## Licence
  ${data.licence}

`;
}

module.exports = { generateMarkdown }; // This will call the generateMarkdown function inside this file
