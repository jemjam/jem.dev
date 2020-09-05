const datePicker = require('inquirer-datepicker')
var handlebars = require('handlebars');
handlebars.registerHelper('moment', require('helper-moment'));

module.exports = plop => {
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
                format: ['Y', '/', 'MM', '/', 'DD']
            },
            {
                type: 'number',
                name: 'number',
                message: '#100Days number',
                default: 10,
            },
            {
                type: 'input',
                name: 'title',
                message: 'Post title (h1)',
                default: '100 Projects day {{number}}',
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
}
