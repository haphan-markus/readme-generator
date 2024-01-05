// function to generate markdown for README
function generateMarkdown(data) {
  let bar = "```";
  let licence;
  switch (data.licence){
    case "MIT":
      licence = "![Licence](https://img.shields.io/badge/license-MIT-blue.svg)";
      break
    case "APACHE 2.0":
      licence = "![Licence](https://img.shields.io/badge/license-APACHE2.0-blue.svg)";
      break
    case "GPL 3.0":
      licence = "![Licence](https://img.shields.io/badge/license-GPL3.0-blue.svg)";
      break
    case "BSD 3":
      licence = "![Licence](https://img.shields.io/badge/license-BSD3-blue.svg)";
      break
    default:
      licence = "No licence applied";
  }

  return `
  # ${data.title}

  ${licence}

  ## Description
  ${data.description}

  ## User story
  
  ${bar}
  ${data.userstory}
  ${bar}

  ## Tables of Contents
  
  + [Installation](#installation) \n
  + [Usage](#usage) \n
      + [Contributing](#contributing) \n
      + [Tests](#tests) \n
      + [Questions](#questions) \n
  + [Licence](#licence) \n
  
  ## Installation

  To install necessary dependencies, run the following command:

  ${bar} bash 
  ${data.installationInstructions}
  ${bar}
  
  ## Usage

  ${data.usage}

  ### Contributing

  ${data.contributing}

  ### Tests

  ${data.tests}

  ### Questions

  If you have any questions, please contact me via my Github [${data.github}](https://github.com/${data.github}) and email ${data.email}.

  ## Licence
  
  This repository is authorised under ${data.licence} licence.

`;
}

module.exports = generateMarkdown; // This will call the generateMarkdown function inside this file