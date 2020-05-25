"use strict";

const connectDb = require("./db");
const { ObjectID } = require("mongodb");
//const {errorHandler} = require('./errorhandler')

module.exports = {
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
      course = await db.collection("CountryBottomScale").findOne({ code: code });
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
      course = await db.collection("CountryTopEstimate").findOne({ code: code });
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
      course = await db.collection("CountryBottomEstimate").findOne({ code: code });
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
      course = await db.collection("CountryTopAvgScala").findOne({ code: code });
    } catch (error) {
      console.error(error);
    }

    return course;
  },getBottomAvgScaleCountrys: async () => {
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
      course = await db.collection("CountryBottomAvgScala").findOne({ code: code });
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
