const cors = require('cors')
const express = require('express')
const app = express()
const date = require('./date') 
const xml2js = require('xml2js')
app.use(express.json())
app.use(cors())