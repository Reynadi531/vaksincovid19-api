const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const helmet = require('helmet')
const { notFound, errorHandler } = require('./middlewares')

const app = express();
app.use(cors())
app.use(morgan('dev'))
app.use(helmet())

app.use((req, res, next) => {
    res.set('Cache-Control', 'public, s-maxage=60, stale-while-revalidate');
    next()
})

app.get('/', (req, res) => {
    res.redirect('/api')
})

app.use('/api', require('./Routes/api'))

app.use(notFound)
app.use(errorHandler)
const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Server running at port ${PORT}`))