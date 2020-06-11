"use strict";

const connectDb = require("./db");
const { ObjectID } = require("mongodb");


module.exports = {
  //Get Measure
  getGeneralRestrictions: async () => {
    let db;
    let Restrictions = [];

    try {
      db = await connectDb();
      Restrictions = await db
        .collection("GeneralMeasureCountry")
        .find()
        .toArray();
    } catch (error) {
      console.error(error);
    }

    return Restrictions;
  },
  getGeneralRestriction: async (root, { code }) => {
    let db;
    let Restriction;

    try {
      db = await connectDb();
      Restriction = await db
        .collection("GeneralMeasureCountry")
        .findOne({ code: code });
    } catch (error) {
      console.error(error);
    }

    return Restriction;
  },
  getGeneralTopRestrictions: async () => {
    let db;
    let Restrictions = [];

    try {
      db = await connectDb();
      Restrictions = await db
        .collection("GeneralTopMeasureCountry")
        .find()
        .toArray();
    } catch (error) {
      console.error(error);
    }

    return Restrictions;
  },
  getGeneralTopRestriction: async (root, { code }) => {
    let db;
    let Restriction;

    try {
      db = await connectDb();
      Restriction = await db
        .collection("GeneralTopMeasureCountry")
        .findOne({ code: code });
    } catch (error) {
      console.error(error);
    }

    return Restriction;
  },
  getGeneralBottomRestrictions: async () => {
    let db;
    let Restrictions = [];

    try {
      db = await connectDb();
      Restrictions = await db
        .collection("GeneralBottomMeasureCountry")
        .find()
        .toArray();
    } catch (error) {
      console.error(error);
    }

    return Restrictions;
  },
  getGeneralBottomRestriction: async (root, { code }) => {
    let db;
    let Restriction;

    try {
      db = await connectDb();
      Restriction = await db
        .collection("GeneralBottomMeasureCountry")
        .findOne({ code: code });
    } catch (error) {
      console.error(error);
    }

    return Restriction;
  },
  
  getMeasureTopRestrictions: async () => {
    let db;
    let Restrictions = [];

    try {
      db = await connectDb();
      Restrictions = await db
        .collection("MeasureTopMeasureCountry")
        .find()
        .toArray();
    } catch (error) {
      console.error(error);
    }

    return Restrictions;
  },
  getMeasureTopRestriction: async (root, { code }) => {
    let db;
    let Restriction;

    try {
      db = await connectDb();
      Restriction = await db
        .collection("MeasureTopMeasureCountry")
        .findOne({ code: code });
    } catch (error) {
      console.error(error);
    }

    return Restriction;
  },
  getMeasureBottomRestrictions: async () => {
    let db;
    let Restrictions = [];

    try {
      db = await connectDb();
      Restrictions = await db
        .collection("MeasureBottomMeasureCountry")
        .find()
        .toArray();
    } catch (error) {
      console.error(error);
    }

    return Restrictions;
  },
  getMeasureBottomRestriction: async (root, { code }) => {
    let db;
    let Restriction;

    try {
      db = await connectDb();
      Restriction = await db
        .collection("MeasureBottomMeasureCountry")
        .findOne({ code: code });
    } catch (error) {
      console.error(error);
    }

    return Restriction;
  },



  getGeneralTopRestrictionsRecords: async () => {
    let db;
    let Restrictions = [];

    try {
      db = await connectDb();
      Restrictions = await db
        .collection("GeneralTopMeasureRecordCountry")
        .find()
        .toArray();
    } catch (error) {
      console.error(error);
    }

    return Restrictions;
  },
  getGeneralTopRestrictionRecords: async (root, { code }) => {
    let db;
    let Restriction;

    try {
      db = await connectDb();
      Restriction = await db
        .collection("GeneralTopMeasureRecordCountry")
        .findOne({ code: code });
    } catch (error) {
      console.error(error);
    }

    return Restriction;
  },
  getGeneralBottomRestrictionsRecords: async () => {
    let db;
    let Restrictions = [];

    try {
      db = await connectDb();
      Restrictions = await db
        .collection("GeneralBottomMeasureRecordCountry")
        .find()
        .toArray();
    } catch (error) {
      console.error(error);
    }

    return Restrictions;
  },
  getGeneralBottomRestrictionRecords: async (root, { code }) => {
    let db;
    let Restriction;

    try {
      db = await connectDb();
      Restriction = await db
        .collection("GeneralBottomMeasureRecordCountry")
        .findOne({ code: code });
    } catch (error) {
      console.error(error);
    }

    return Restriction;
  },
  
  getMeasureTopRestrictionsRecords: async () => {
    let db;
    let Restrictions = [];

    try {
      db = await connectDb();
      Restrictions = await db
        .collection("MeasureTopMeasureRecordCountry")
        .find()
        .toArray();
    } catch (error) {
      console.error(error);
    }

    return Restrictions;
  },
  getMeasureTopRestrictionRecords: async (root, { code }) => {
    let db;
    let Restriction;

    try {
      db = await connectDb();
      Restriction = await db
        .collection("MeasureTopMeasureRecordCountry")
        .findOne({ code: code });
    } catch (error) {
      console.error(error);
    }

    return Restriction;
  },
  getMeasureBottomRestrictionsRecords: async () => {
    let db;
    let Restrictions = [];

    try {
      db = await connectDb();
      Restrictions = await db
        .collection("MeasureBottomMeasureRecordCountry")
        .find()
        .toArray();
    } catch (error) {
      console.error(error);
    }

    return Restrictions;
  },
  getMeasureBottomRestrictionRecords: async (root, { code }) => {
    let db;
    let Restriction;

    try {
      db = await connectDb();
      Restriction = await db
        .collection("MeasureBottomMeasureRecordCountry")
        .findOne({ code: code });
    } catch (error) {
      console.error(error);
    }

    return Restriction;
  },


  //Gets de Country GENERAl
  getCountrys: async () => {
    let db;
    let courses = [];

    try {
      db = await connectDb();
      courses = await db.collection("Country").find().toArray();
    } catch (error) {
      console.error(error);
    }

    return courses;
  },
  getCountry: async (root, { code }) => {
    let db;
    let course;

    try {
      db = await connectDb();
      course = await db.collection("Country").findOne({ code: code });
    } catch (error) {
      console.error(error);
    }

    return course;
  },
  getTopScaleCountrys: async () => {
    let db;
    let courses = [];

    try {
      db = await connectDb();
      courses = await db.collection("CountryTopScale").find().toArray();
    } catch (error) {
      console.error(error);
    }

    return courses;
  },
  getTopScaleCountry: async (root, { code }) => {
    let db;
    let course;

    try {
      db = await connectDb();
      course = await db.collection("CountryTopScale").findOne({ code: code });
    } catch (error) {
      console.error(error);
    }

    return course;
  },
  getBottomScaleCountrys: async () => {
    let db;
    let courses = [];

    try {
      db = await connectDb();
      courses = await db.collection("CountryBottomScale").find().toArray();
    } catch (error) {
      console.error(error);
    }

    return courses;
  },
  getBottomScaleCountry: async (root, { code }) => {
    let db;
    let course;

    try {
      db = await connectDb();
      course = await db
        .collection("CountryBottomScale")
        .findOne({ code: code });
    } catch (error) {
      console.error(error);
    }

    return course;
  },

  getTopEstimateCountrys: async () => {
    let db;
    let courses = [];

    try {
      db = await connectDb();
      courses = await db.collection("CountryTopEstimate").find().toArray();
    } catch (error) {
      console.error(error);
    }

    return courses;
  },
  getTopEstimateCountry: async (root, { code }) => {
    let db;
    let course;

    try {
      db = await connectDb();
      course = await db
        .collection("CountryTopEstimate")
        .findOne({ code: code });
    } catch (error) {
      console.error(error);
    }

    return course;
  },
  getBottomEstimateCountrys: async () => {
    let db;
    let courses = [];

    try {
      db = await connectDb();
      courses = await db.collection("CountryBottomEstimate").find().toArray();
    } catch (error) {
      console.error(error);
    }

    return courses;
  },
  getBottomEstimateCountry: async (root, { code }) => {
    let db;
    let course;

    try {
      db = await connectDb();
      course = await db
        .collection("CountryBottomEstimate")
        .findOne({ code: code });
    } catch (error) {
      console.error(error);
    }

    return course;
  },
  getTopAvgScaleCountrys: async () => {
    let db;
    let courses = [];

    try {
      db = await connectDb();
      courses = await db.collection("CountryTopAvgScala").find().toArray();
    } catch (error) {
      console.error(error);
    }

    return courses;
  },
  getTopAvgScaleCountry: async (root, { code }) => {
    let db;
    let course;

    try {
      db = await connectDb();
      course = await db
        .collection("CountryTopAvgScala")
        .findOne({ code: code });
    } catch (error) {
      console.error(error);
    }

    return course;
  },
  getBottomAvgScaleCountrys: async () => {
    let db;
    let courses = [];

    try {
      db = await connectDb();
      courses = await db.collection("CountryBottomAvgScala").find().toArray();
    } catch (error) {
      console.error(error);
    }

    return courses;
  },
  getBottomAvgScaleCountry: async (root, { code }) => {
    let db;
    let course;

    try {
      db = await connectDb();
      course = await db
        .collection("CountryBottomAvgScala")
        .findOne({ code: code });
    } catch (error) {
      console.error(error);
    }

    return course;
  },
  getBeds: async () => {
    let db;
    let beds = [];

    try {
      db = await connectDb();
      beds = await db.collection("Beds").find().toArray();
    } catch (error) {
      console.error(error);
    }

    return beds;
  },
  getBed: async (root, { bedId }) => {
    let db;
    let bed;

    try {
      db = await connectDb();
      bed = await db.collection("Beds").findOne({ _id: ObjectID(bedId) });
    } catch (error) {
      console.error(error);
    }

    return bed;
  },
  getRestrictions: async () => {
    let db;
    let Restrictions = [];

    try {
      db = await connectDb();
      Restrictions = await db.collection("Restrictions").find().toArray();
    } catch (error) {
      console.error(error);
    }

    return Restrictions;
  },
  getRestriction: async (root, { resId }) => {
    let db;
    let Restriction;

    try {
      db = await connectDb();
      Restriction = await db
        .collection("Restrictions")
        .findOne({ _id: ObjectID(resId) });
    } catch (error) {
      console.error(error);
    }

    return Restriction;
  },
};
