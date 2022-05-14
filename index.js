// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./Develop/utils/generateMarkdown');



// TODO: Create an array of questions for user input
const promptQuestions = userData => {
    if (!userData) {
        userData = [];
    }
    return inquirer.prompt([
    
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project? (Required)',
        validate: titleInput => {
            if (titleInput) {
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
        message: 'Please describe your project. (Required)',
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
        type: 'input',
        name: 'installation',
        message: 'What as your installation process? (Required)',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Who contributed to this project. (Required)',
        validate: contributingInput => {
            if (contributingInput)
            {
                return true;
            } else {
                console.log('You must enter contributors.');
                return false;
            }        
        }
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Which tests did you use, if any?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the intended use for this project?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license(s) cover this project?',
        choices: [
            "Apache",
            "GNU",
            "ISC",
            "MIT",
            "Mozilla",
            "Open",
            "Academic"
        ]
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
},
{
    type: 'input',
    name: 'email',
    message: 'What is your email address? (Required)',
    validate: emailInput => {
        if(emailInput) {
            return true;
        } else {
            console.log('Please enter your email address.');
            return false;
        }
    }
}
])  
.then(userData => {
    console.log(userData);
     
    
const generateReadme = generateMarkdown(userData);

    fs.writeFile('./myREADME.md', generateReadme, 'utf8', err => {
        if(err) throw err;
        console.log('The file has been created!');
    });
});
};

promptQuestions();
