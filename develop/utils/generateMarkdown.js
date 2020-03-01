// Create markdown generated from user's input that will populate readme.pdf
function generateMarkdown(data) {
    return `# ${data.title}`;
  }
  
  module.exports = generateMarkdown;
  