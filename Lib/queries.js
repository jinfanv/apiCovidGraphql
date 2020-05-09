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
        course = await db.collection('countrys').findOne({code:code})
      } catch (error) {
        console.error(error);
        
      }

      return course
    },
    getBeds: async () => {
      let db
      let beds = []

      try {
        db = await connectDb()
        beds = await db.collection('beds').find().toArray()
      } catch (error) {
        console.error(error);
        
      }

      return beds
    },
    getBed: async (root,{bedId}) => {
      let db
      let bed

      try {
        db = await connectDb()
        bed = await db.collection('beds').findOne({_id:ObjectID(bedId)})
      } catch (error) {
        console.error(error);
        
      }

      return bed
    },
    getRestrictions: async () => {
      let db
      let Restrictions = []

      try {
        db = await connectDb()
        Restrictions = await db.collection('Restrictions').find().toArray()
      } catch (error) {
        console.error(error);
        
      }

      return Restrictions
    },
    getRestriction: async (root,{resId}) => {
      let db
      let Restriction

      try {
        db = await connectDb()
        Restriction = await db.collection('Restrictions').findOne({_id:ObjectID(resId)})
      } catch (error) {
        console.error(error);
        
      }

      return Restriction
    }

}