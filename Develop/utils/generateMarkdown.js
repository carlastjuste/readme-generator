// function to generate markdown for README
function generateMarkdown(data) {
  let badgelink ='';

switch (data.license) {
  case 'MIT License':
      badgelink ='https://img.shields.io/badge/license-MIT-blue.svg';
      break;
  case 'GNU GPLv3':
      badgelink = 'https://img.shields.io/badge/license-GNU-blue.svg';
    break;
  case 'APACHE 2.0':
      badgelink = 'https://img.shields.io/badge/license-APACHE-blue.svg';
    break;
  default:
      badgelink = '';

}
  return `# ${data.title} 
  <p align="center"><img src='${badgelink}'</p>

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
  Below is a demo of the app:
    ${data.usage}

## Contributing
    ${data.contributing}

## License
    ${data.license}

  ## Tests
    ${data.tests}
    
  ## Questions

\```md
  For more informations on this repository, please reach out to me via:
* Email : ${data.email}
* Github : [@${data.github}](http://github.com/${data.github})
\```

`;
}

module.exports = generateMarkdown;
