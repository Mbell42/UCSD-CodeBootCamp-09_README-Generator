// Create markdown generated from user's input that will populate readme.pdf.
function generateMarkdown(answers) {
  // Title of project, any Badges, Project Description, Table of Contents,
  //and project details will be generated here from user's answers.
  return `# ${answers.projectTitle};

  Description
  ${answers.description}

  Table of Contents
  - [Installation](#Installation)
  - [Usage](Usage)
  
  Installation Requirements

  Usage

  License

  Contributing Parties

  Tests

  Questions
  `;
}
  
module.exports = generateMarkdown;
  