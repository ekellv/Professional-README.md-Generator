
  
# Professional README.md Generator

## Description 

A command line interface meant to generate a professional, quality README.md template for the user to easily edit and publish on GitHub.

![Github license](http://img.shields.io/badge/License-MIT-yellow.svg)

[A recording of the application is available here.](https://drive.google.com/file/d/1Hvkl6Rqin4b12y8VwOmAit6T4ro2t247/view)

## Contents
1. [About](#about)
      * [User Story](#user%20story)
      * [Acceptance Criteria](#acceptance%20criteria)
      * [Visuals](#visuals)
      * [Technologies](#technologies)
2. [Installation](#installation)
3. [License](#license)
4. [Usage](#usage)
5. [Contributing](#contributing)
6. [Tests](#tests)
7. [Authors and Acknowledgements](#authors%20and%20acknowledgements)

## About

This project was created using node and is meant to quickly and simply create a README.md for the user to edit and deploy for any given project. The user answers questions in the command line after running node index.js, which form an editable template. Some of the information is left purposely blank and  can be left purposely blank in node in case the user feels it will be easier to type larger portions of text in a README.md file than the command line.

## User Story

```
AS A developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project
```

## Acceptance Criteria 

```
GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README
```

## Visuals: 

![README md-gif-small](https://user-images.githubusercontent.com/103372188/181519202-ecc17335-e25b-42b9-90bb-9074800ba13d.gif)
![README md-screenshot](https://user-images.githubusercontent.com/103372188/181518582-2ca71ecf-814e-4300-b6ec-2c4e2ccb30b9.png)


## Technologies

* [node.js](https://nodejs.org/en/)
* [inquirer.js](https://www.npmjs.com/package/inquirer)


## Installation 

Please run the following dependencies to install the application: 

`
npm i
`

## License 

This reposititory is licensed under the MIT license. 

For more information about this license or any others, please visit: [https://choosealicense.com/](https://choosealicense.com/).

## Usage 

The repository may be cloned or forked. 

## Contributing 

The repository is not currently accepting contributions. 

## Testing 

The command to run tests on this application is: 

`
npm run test
`

## Authors and Acknowledgements

Built by: Erin Voelker

## Contact Information

* GitHub: [ekellv](https://github.com/ekellv)
* Email: [erinkvoelker@gmail.com](mailto:erinkvoelker@gmail.com)

