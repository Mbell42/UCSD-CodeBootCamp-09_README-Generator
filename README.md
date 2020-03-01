# 09_README-Generator
Ninth homework project: A command-line application that dynamically generates a README.md from a user's input. The application can be run with the following command: 'node index.js'.

Instructions:
------------
Instructions are located in the readme.md file in the root folder of the hw assignment repository: "https://ucsd.bootcampcontent.com/UCSD-Coding-Bootcamp/UCSD-SD-FSF-PT-12-2019-U-C/tree/master/09-NodeJS/02-Homework/"


Resources used:
------------
- GitBash
- gitHub
- node.js
- node.js modules:
	- inquirer
	- axios
	- api
	- ""
	- ""


Progress:
------------
2020.02.29.0046 - Initial Commit.  Initialized readme.me, and set up folder structure.  Created and copied initial setup for index.js, package.json, api.js, and generateMarkdown.js. Researched the following npm modules; inquirer, axios, api. 

2020.02.29.1928 - Added beginning pseudocode to .js files.

2020.02.29.1950 - Added dependencies to .js files. Commented out initial code starting point in 'index.js'.  Began coding user prompts in 'index.js'.

2020.02.29.2005 - Added user prompts and comments explaining code to 'index.js'.

2020.02.29.2021 - Began function in 'index.js' to take in user's answers to prompts and api return, to be used to generate the content of the readme file.  In 'api.js', added axios api call to GitHub for user details based on the users answer to the github username prompt in 'index.js'.  

2020.02.29.2030 - I ran npm i in 'develop' folder, and audit checked/fixed two DenialOfService (D.O.S.) vulnerablilities. This added 'package-lock.json.'. This allowed me to run 'index.js' in order to test current functionality, as well as to check return from GitHub api call.  All tests green so far.  Next I will begin filling in generateMarkdown function in 'generateMarkdown.js', and then will complete function that calls generateMarkdown in 'index.js'.