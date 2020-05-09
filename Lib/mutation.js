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
    },
    createBed: async (root,{input}) => {
    
        let db
        let bed
        let newbed = input
        try {
            db = await connectDb()
            bed = await db.collection('beds').insertOne(input)
            newbed._id = bed.insertedId
        } catch (error) {
            console.log(error);        
        }
        
        return newbed
    },
    createRestriction: async (root,{input}) => {
    
        let db
        let Restriction
        let newRestriction = input
        try {
            db = await connectDb()
            Restriction = await db.collection('Restrictions').insertOne(input)
            newRestriction._id = Restriction.insertedId
        } catch (error) {
            console.log(error);        
        }
        
        return newRestriction
    },
    addBed: async (root,{countryId,bedId}) => {

        let db
        let Country
        let Bed
        try {
            db = await connectDb()
            Country = await db.collection('countrys').findOne({code:countryId})
            Bed = await db.collection('beds').findOne({_id:ObjectID(bedId)})
            
            if(!Country && !Bed) throw new Error("No existe el Pais o la Cama")
            
            
            await db.collection('countrys').updateOne(
                {code:countryId},
                {$addToSet:{typebed: ObjectID(bedId)}}
            )
        } catch (error) {
            console.log(error);        
        }
        
        return Country
    },  
    
    addRestriction: async (root,{countryId,restrictionId}) => {

            let db
            let Country
            let restriction
            try {
                db = await connectDb()
                Country = await db.collection('countrys').findOne({code:countryId})
                restriction = await db.collection('Restrictions').findOne({_id:ObjectID(restrictionId)})
                
                if(!Country && !Bed) throw new Error("No existe el Pais o la Cama")
                
                
                await db.collection('countrys').updateOne(
                    {code:countryId},
                    {$addToSet:{Restriction: ObjectID(restrictionId)}}
                )
            } catch (error) {
                console.log(error);        
            }
        
        return Country
    }, 
    editCountry: async (root, { _id, input }) => {
        let db
        let Country
    
        try {
          db = await connectDb()
          await db.collection('countrys').updateOne(
            { _id: ObjectID(_id) },
            { $set: input }
          )
          Country = await db.collection('countrys').findOne(
            { _id: ObjectID(_id) }
          )
        } catch (error) {
          console.error(error)
        }
    
        return Country
    },
  
    editBed: async (root, { _id, input }) => {
        let db
        let Bed
    
        try {
          db = await connectDb()
          await db.collection('Beds').updateOne(
            { _id: ObjectID(_id) },
            { $set: input }
          )
          Bed = await db.collection('Beds').findOne(
            { _id: ObjectID(_id) }
          )
        } catch (error) {
          console.error(error)
        }
    
        return Bed
    },
   
    editRestriction: async (root, { _id, input }) => {
        let db
        let Restriction
    
        try {
          db = await connectDb()
          await db.collection('Restrictions').updateOne(
            { _id: ObjectID(_id) },
            { $set: input }
          )
          Restriction = await db.collection('Restrictions').findOne(
            { _id: ObjectID(_id) }
          )
        } catch (error) {
          console.error(error)
        }
    
        return Restriction
    },
    deleteCountry: async (root, { _id }) => {
        let db
    
        try {
          db = await connectDb()
          await db.collection('countrys').deleteOne(
            { _id: ObjectID(_id) }
          )
        } catch (error) {
          console.error(error)
        }
    
        return true
      },
    deleteBed: async (root, {
        _id
      }) => {
        let db
    
        try {
          db = await connectDb()
          await db.collection('beds').deleteOne({
            _id: ObjectID(_id)
          })
        } catch (error) {
          console.error(error)
        }
    
        return true
    },
    deleteRestriction: async (root, {
        _id
      }) => {
        let db
    
        try {
          db = await connectDb()
          await db.collection('Restrictions').deleteOne({
            _id: ObjectID(_id)
          })
        } catch (error) {
          console.error(error)
        }
    
        return true
      }
}