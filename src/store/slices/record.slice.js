import { createSlice } from "@reduxjs/toolkit";

//init record Slice
const recordSlice = createSlice({
    name: 'record',
    initialState: {
        records: [],
        selectedRecord: {
            id: '',
            businessName: '',
            businessType: '',
            businessAddress: '',
            ratingDate: '', 
            rating: 0,
            scoresHygiene: 0, 
            scoresStructural: 0,
        },
        selectedRecordReviews: []
    },
    reducers: {
        addToRecords(state, action){
            const newRecord = action.payload;
            const existingRecord = state.records.find(record => record.id === newRecord.id);
            if (!existingRecord) {
                state.records.push({
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
        clearRecords(state){
            state.records = [];
        },
    }
});

// Export Cart Slice Actions 
export const recordActions = recordSlice.actions;
// Export Cart Slice
export default recordSlice;