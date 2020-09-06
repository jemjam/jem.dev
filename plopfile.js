const datePicker = require('inquirer-datepicker')
const fs = require('fs')
const path = require('path')

/**
 * Register the moment helpers so our plop templates output friendlier dates
 */
var handlebars = require('handlebars')
handlebars.registerHelper('moment', require('helper-moment'))

/**
 * Read the directory of files and return the highest day completed so far (so
 * we can increment by one)
 */
const currentHighest = fs
    .readdirSync('./pages/100days', { withFileTypes: true })
    .filter((dirEnt) => {
        const entryName = dirEnt.name
        return dirEnt.isFile() && entryName.startsWith('day')
    })
    .map((dirEnt) => {
        const { name } = path.parse(dirEnt.name)
        // Returning just the number
        return name.slice(-2)
    })
    .map((strVal) => parseInt(strVal, 10))
    .reduce((prev, curr) => {
        return curr > prev ? curr : prev
    })

module.exports = (plop) => {
    plop.setPrompt('datepicker', datePicker)
    // plop generator code
    plop.setGenerator('100days', {
        description:
            'A #100DaysOfProjects post outlining work done on a project today',
        prompts: [
            {
                type: 'datepicker',
                name: 'date',
                message: 'Date of this entry',
                default: new Date(),
                format: ['Y', '/', 'MM', '/', 'DD'],
            },
            {
                type: 'number',
                name: 'number',
                message: '#100Days number',
                default: currentHighest + 1,
            },
            {
                type: 'input',
                name: 'title',
                message: 'Post title (h1)',
                default: '100 Projects day..',
            },
            {
                type: 'input',
                name: 'desc',
                message: 'Post description (summary)',
                default: 'Today I worked on...',
            },
        ],
        actions: [
            {
                type: 'add',
                path: './pages/100days/day{{number}}.mdx',
                templateFile: './defaultTemplates/100days.hbs',
            },
        ],
    })

    plop.setGenerator('component', {
        description: "Page component or element",
        prompts: [],
        actions: [
            
        ]
    })
}
