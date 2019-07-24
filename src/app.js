const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()
const port = process.env.PORT || 3000

const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPaths = path.join(__dirname, '../templates/partials')

app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPaths)
 
// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Prisoners Dilemma',
        name: 'Dynamic_Programmers'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'What is it?',
        name: 'Dynamic_Programmers'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        errorMessage: '404 page ' + req._parsedOriginalUrl._raw + ' not found',
        name: 'Dynamic_Programmers'
    })
})

app.listen(port, () => {
    console.log('Server is up on port on ' + port)
})