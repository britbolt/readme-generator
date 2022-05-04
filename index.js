// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generatePage = require('./Develop/utils/generateMarkdown');


// TODO: Create an array of questions for user input
const promptQuestions = userData => {
    if (!userData) {
        userData = [];
    }
    return inquirer.prompt([
    
    {
        type: 'input',
        name: 'project-title',
        message: 'What is the title of your project? (Required)',
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
    },
    {
            type: 'input',
            name: 'github',
            message: 'What is your Github username? (Required)',
            validate: githubInput => {
                if(githubInput) {
                    return true;
                } else {
                    console.log('Please enter your github username.');
                    return false;
        }
    }
}
])
.then(userData => {
    const data = generatePage(userData);

    // fs.writeFile('./README.md', data, err => {
    //     if (err) throw new Error (err);
    //         console.log("File created successfully");
    // }) 
});
};



const startPage = function () {
    promptQuestions();
};
// Function call to initialize app
startPage();
