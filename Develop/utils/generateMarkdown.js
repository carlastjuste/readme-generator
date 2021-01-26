// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} 
  ## Description
  ${data.description}

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#Contributing)
  * [License](#license)
  * [Tests](#license)
  * [Questions](#questions)

  ## Installation
    ${data.installation}
  
  ## Usage
    ${data.usage}

  ## Contributing
    ${data.contributing}

  ## License
    ${data.license}

  ## Tests
    ${data.tests}

  ## Questions
    For more informations on this repository, please reach out to me via:
    * Email : ${data.email}
    * Github : ${data.github}


`;
}

module.exports = generateMarkdown;
