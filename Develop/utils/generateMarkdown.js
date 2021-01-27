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
 <p> Below is a demo of the app:</br></p>
    ${data.usage}

## Contributing
    ${data.contributing}

## License
    ${data.license}

## Tests
    ${data.tests}
    
## Questions

<p>
For more informations on this repository, please reach out to me via:<br>
* Email : ${data.email} <br>
* Github : <a href="https://github.com/${data.github}">@${data.github}</a> 
</p>

`;
}

module.exports = generateMarkdown;
