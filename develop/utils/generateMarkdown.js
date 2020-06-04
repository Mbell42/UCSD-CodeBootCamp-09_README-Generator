// Create markdown generated from user's input that will populate readme.pdf.
function generateMarkdown(answers) {
  // Title of project, any Badges, Project Description, Table of Contents,
  //and project details will be generated here from user's answers.
  return `# ${answers.projectTitle}

  [![ForTheBadge uses-js](http://ForTheBadge.com/images/badges/uses-js.svg)](http://ForTheBadge.com)

  [![NPM Version](https://img.shields.io/npm/v/npm.svg?style=flat)]()
  [![HitCount](http://hits.dwyl.com/{username}/{project}.svg)](http://hits.dwyl.com/{username}/{project})

  ## Description
  ${answers.description}

  ## Table of Contents
  - [Installation](#Installation)
  - [Usage](Usage)
  - [License](#License)
  - [Contributing](#Contributing)
  - [Tests](#Tests)
  - [Questions](#Questions)
  
  ## Installation Requirements
  The following dependiencies are required for project ${answers.projectTitle}: 
  
  ## Usage
  ${answers.usage}

  ## License
  ${answers.license}

  ## Contributing Parties
  ${answers.contributing}

  ## Tests
  ${answers.tests}

  ## Questions
  ${answers.questions}

  ## GitHub Profile Image
  # ${answers.ghUsername}

  ## Github Profile Avatar
  ![Profile Picture](${answers.avatar}=250x)

  `;
};
module.exports = generateMarkdown;
  