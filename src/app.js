const express = require('express')
const logger = require('./utils/logger')


const app = express()

app.route('/').get((req,res)=>{
    logger.info('GET route access')
    res.send('Welcome! You have accessed the Get route and this information will be recorded in a .log file :)')
})

app.listen(3000, ()=>{
    logger.info('Server is running')
})

