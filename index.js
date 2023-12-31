const inquirer = require('inquirer');
const fs = require('fs');
const SVG = require('./lib/svg');
const shapes = require('./lib/shapes');

const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Please enter up to 3 characters',
    }, {
        type: 'input',
        name: 'textColor',
        message: 'Choose a color (or hex value) for the text',
    } , {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape',
        choices: ['Square', 'Triangle', 'Circle'],
    }, {
        type: 'input',
        name: 'shapeColor',
        message: 'Choose a color (or hex value) for the shape',
    }]


const genSVG = (fileName, svg) => {
    fs.writeFile(fileName,svg.render(), (err) => {err ? console.log(err) : console.log('.svg file created')});
}


inquirer.prompt(questions).then((answers) => {
    const newSVG = new SVG(answers)

    genSVG('./examples/new.svg', newSVG)

})


