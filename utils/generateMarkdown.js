// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  # Description
`;
}

module.exports = { generateMarkdown }; // This will call the generateMarkdown function inside this file
