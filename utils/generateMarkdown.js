// function to generate markdown for README
function generateMarkdown(data) {
  let bar = "```";
  let link = '';
  let licence = data.licence.replace(/ /g,"-");
  let licenceLowercase = licence.toLowerCase();
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
  * ${data.userstory}
  ${bar}

  ## Tables of Contents
    * Installation
    * Usage
    * Licence
      * Contributing
      * Tests
      * Questions

  ## Installation

  To install necessary dependencies, run the following command:

  ${bar} bash 
  ${data.installationInstructions}
  ${bar}
  
  ## Usage
  ${data.usage}

  ## Contributing
  ${data.contributing}

  For further discussion, please contact me via my Github [${data.github}](https://github.com/${data.github}) and email ${data.email}.

  ## Tests

  ## Licence
  
  [${data.licence}](https://choosealicense.com/licenses/${licenceLowercase});
`;
}

module.exports = { generateMarkdown }; // This will call the generateMarkdown function inside this file
