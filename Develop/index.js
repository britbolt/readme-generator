// TODO: Include packages needed for this application
const inquirer = require('inquirier');
const fs = require('fs');
const generatePage = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const promptQuestions = userData => {
    if (!userData) {
        userData = [];
    }
    return inquirer.prompt([
    {
        type: 'input',
        name: 'project title',
        message: 'What is your project titled? (Required)',
        validate: projectTitle => {
            if (projectTitle) {
            return true;
        }
        else {
            console.log('Please enter the name of your project!');
            return false;
        }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please describe your project.(Required)',
        validate: descriptionInput => {
            if (descriptionInput)
            {
                return true;
            } else {
                console.log('You must enter a description');
                return false;
            }        
        }
    },
    {
        type: 'checkbox',
        name: 'language',
        message: 'Which languages did you use for this project? (check all that apply)',
        choices: ['HTML', 'CSS', 'Javascript', 'Python', 'Java', 'C++', 'SQL']
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the intended use for this project?',
    }
])};


// TODO: Create a function to write README file
promptQuestions()
.then(userData => {
    const data = generatePage(userData); 
fs.writeFile('./README.md', data, err => {
    if (err) throw new Error (err);
    else {
        console.log("file created successfully");
    }
})
});


// TODO: Create a function to initialize app
init => {
    
    promptQuestions();
};

// Function call to initialize app
init();
