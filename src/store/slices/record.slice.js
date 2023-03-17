import { createSlice } from "@reduxjs/toolkit";

//init record Slice
const recordSlice = createSlice({
  name: "record",
  initialState: {
    records: [],
    selectedRecord: {
      id: "",
      businessName: "",
      businessType: "",
      businessAddress: "",
      ratingDate: "",
      rating: 0,
      scoresHygiene: 0,
      scoresStructural: 0,
    },
    selectedRecordReviews: [],
    authUserReviews: [],
  },
  reducers: {
    addToRecords(state, action) {
      const newRecord = action.payload;
      const existingRecord = state.records.find(
        (record) => record.id === newRecord.id
      );
      if (!existingRecord) {
        state.records.unshift({
          id: newRecord.id,
          businessName: newRecord.businessName,
          businessType: newRecord.businessType,
          businessAddress: newRecord.businessAddress,
          ratingDate: newRecord.ratingDate,
          rating: newRecord.rating,
          scoresHygiene: newRecord.scoresHygiene,
          scoresStructural: newRecord.scoresStructural,
        });
      }
    },
    resetSelectedRecord(state) {
      state.selectedRecord = {
        id: "",
        businessName: "",
        businessType: "",
        businessAddress: "",
        ratingDate: "",
        rating: 0,
        scoresHygiene: 0,
        scoresStructural: 0,
      };
    },
    updateSelectedRecord(state, action) {
      const record = action.payload;
    //   console.log(record);
      state.selectedRecord = {
        id: record.id,
        businessName: record.businessName,
        businessType: record.businessType,
        businessAddress: record.businessAddress,
        ratingDate: record.ratingDate,
        rating: record.rating,
        scoresHygiene: record.scoresHygiene,
        scoresStructural: record.scoresStructural,
      };
    },
    clearRecords(state) {
      state.records = [];
    },
    getSelectedRecordReviews(state, action) {
      state.selectedRecordReviews = action.payload;
      state.selectedRecordReviews.sort(function (a, b) {
        return (
          new Date(JSON.parse(b.timeStamp)) - new Date(JSON.parse(a.timeStamp))
        );
      });
    },
    addToSelectedRecordReview(state, action) {
    //   console.log(action.payload);
      const newReview = action.payload;
      const existingReview = state.selectedRecordReviews.find(
        (review) => review.id === newReview.id
      );
      if (!existingReview) {
        state.selectedRecordReviews.unshift(newReview);
      }
      state.selectedRecordReviews.sort(function (a, b) {
        return (
          new Date(JSON.parse(b.timeStamp)) - new Date(JSON.parse(a.timeStamp))
        );
      });
    },
    addToAuthUserReview(state, action) {
      state.authUserReviews = action.payload;
      // const existingReview = state.authUserReviews.find(review => review.id === newReview.id);
      // if (!existingReview) {
      //     state.authUserReviews.unshift(newReview);
      // }
      state.authUserReviews.sort(function (a, b) {
        return (
          new Date(JSON.parse(b.timeStamp)) - new Date(JSON.parse(a.timeStamp))
        );
      });
    },
    clearRecordReviews(state) {
      state.selectedRecordReviews = [];
    },
    clearReviews(state) {
      state.reviews = [];
    //   console.log(state.reviews);
    },
  },
});

// Export Cart Slice Actions
export const recordActions = recordSlice.actions;
// Export Cart Slice
export default recordSlice;
