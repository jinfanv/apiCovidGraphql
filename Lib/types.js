'use strict'

const connectDb = require('./db')
const { ObjectID } = require('mongodb')

module.exports = {
    Country:{
        typebed: async ({typebed}) =>{
            let db        
            let ids
            console.log(typebed);
            
            try {
                db = await connectDb()
                ids = typebed ? typebed.map(id=>ObjectID(id)):[]
                
                //console.log(ids);
                
                if (ids.length > 0 ) {

                    let data = await db.collection('beds').find({ _id: { $in: ids } })
                                            
                    return data.toArray()
                }else{
                    return []
                }
                
            } catch (error) {
                console.error(error);
                
            }
        },

        restrictions:async ({Restriction}) =>{
            let db
            let RestrictionData
            let ids

            try {
                db = await connectDb()
                ids = Restriction ? Restriction.map(id=>ObjectID(id)):[]
               
                if (ids.length > 0 ) {

                    let data = await db.collection('Restrictions').find({ _id: { $in: ids } })
                      console.log(data);
                                 
                    return data.toArray()
                }else{
                    return []
                }
                
            } catch (error) {
                console.error(error);
                
            }

            return RestrictionData
        }
    }
}