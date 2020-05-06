'use strict'

require('dotenv').config()
const {makeExecutableSchema } = require('graphql-tools')

const {readFileSync} = require('fs')
const {join} = require('path')

const resolvers = require('./Lib/resolvers')

const cors = require('cors')

const express = require('express')
const gqlMiddleware = require('express-graphql')
const app = express()

const port = process.env.PORT || 3000
const isDev = process.env.NODE_ENV !== "production"?false:true

const typeDefs = readFileSync(
    join(__dirname,'lib','shema.graphql'),
    'utf-8'
)

// schema
const schema = makeExecutableSchema({typeDefs,resolvers})

app.use(cors())

app.use('/bed', gqlMiddleware({
  schema: schema,
  rootValue: resolvers,
  graphiql: true
}))

app.listen(port, () => {
  console.log(`Server is Listening at http://localhost:${port}/bed`)
})
