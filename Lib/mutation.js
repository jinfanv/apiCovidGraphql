'use strict'

const connectDb = require('./db')
const { ObjectID } = require('mongodb')
//const {errorHandler} = require('./errorhandler')




module.exports = {
  createCountry: async (root,{input}) => {
    
    let db
    let coutry
    let newCountry = input
    try {
        db = await connectDb()
        coutry = await db.collection('countrys').insertOne(input)
        newCountry._id = coutry.insertedId
    } catch (error) {
        console.log(error);        
    }
    
    return newCountry
}
}