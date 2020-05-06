'use strict'

const connectDb = require('./db')
const { ObjectID } = require('mongodb')
//const {errorHandler} = require('./errorhandler')

module.exports = {
    getCountrys: async () => {
        let db
        let courses = []

        try {
          db = await connectDb()
          courses = await db.collection('countrys').find().toArray()
        } catch (error) {
          console.error(error);
          
        }

        return courses
    },
    getCountry: async (root,{code}) => {
      let db
      let course

      try {
        db = await connectDb()
        course = await db.collection('countrys').findOne({code:String})
      } catch (error) {
        console.error(error);
        
      }

      return course
    }
}