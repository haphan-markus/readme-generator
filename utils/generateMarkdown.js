// function to generate markdown for README
function generateMarkdown(data) {
  let bar = "```";
  let unorderedList = "-";
  // let licence = data.licence.replace(/ /g,"-");
  // let licenceLowercase = licence.toLowerCase();
  // if (data.licence === "None") {
  //   link = "None";
  // } else {
  //   link = "[${data.licence}](https://choosealicense.com/licenses/${licenceLowercase}/)";
  // }
  return `
  # ${data.title}

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
  
  ${data.licence}

`;
}

module.exports = generateMarkdown; // This will call the generateMarkdown function inside this file
