import { recordActions } from "../slices/record.slice";


export const searchRecords = (search) => {
    return async (dispatch) => {

        const sendRequest = async () => {
            const url = `${process.env.REACT_APP_API_GET_RECORDS_FRONT}"${search}"${process.env.REACT_APP_API_GET_RECORDS_BACK}`;
            const encodedUrl = encodeURI(url);
            const resp = await fetch(encodedUrl);
            if (!resp.ok) {
                console.log(resp);
                return
            }

            const data = await resp.json();
            return data;
        }

        try {
            const cartData = await sendRequest();
            dispatch(recordActions.clearRecords());
            cartData.records.forEach(data => {
                dispatch(recordActions.addToRecords({
                        id: data.record.id,
                        businessName: data.record.fields.businessname,
                        businessType: data.record.fields.businesstype,
                        businessAddress: data.record.fields.addressline3,
                        ratingDate: data.record.fields.ratingdate, 
                        rating: data.record.fields.rating, 
                        scoresHygiene: data.record.fields.scores_hygiene, 
                        scoresStructural: data.record.fields.scores_structural,
                }))
            });
        } catch (error) {
            console.log("error",error);
        }
    }
}

export const getRecordById = (id) => {
    return async (dispatch) => {

        const sendRequest = async () => {
            const url = process.env.REACT_APP_API_GET_RECORD_FRONT+ id + process.env.REACT_APP_API_GET_RECORD_BACK;
            const encodedUrl = encodeURI(url);
            const resp = await fetch(encodedUrl);
            if (!resp.ok) {
                console.log(resp);
                return
            }

            const data = await resp.json();
            return data;
        }

        try {
            const recordData = await sendRequest();
            console.log(recordData);
            dispatch(recordActions.updateSelectedRecord({
                id: recordData.record.id,
                businessName: recordData.record.fields.businessname,
                businessType: recordData.record.fields.businesstype,
                businessAddress: recordData.record.fields.addressline3,
                ratingDate: recordData.record.fields.ratingdate, 
                rating: recordData.record.fields.rating, 
                scoresHygiene: recordData.record.fields.scores_hygiene, 
                scoresStructural: recordData.record.fields.scores_structural,
            }));
        } catch (error) {
            console.log("error",error);
        }
    }
}


export const getReviews = (id) => {
    return async (dispatch) => {
        const sendRequest = async () => {
            const url = `test`;
            const encodedUrl = encodeURI(url);
            const resp = await fetch(encodedUrl);
            if (!resp.ok) {
                console.log(resp);
                return
            }

            const data = await resp.json();
            return data;
        }

        try {
            const reviewData = await sendRequest();
            dispatch(recordActions.clearReviews());
            dispatch(recordActions.addToReviews(reviewData))
        } catch (error) {
            console.log("error",error);
        }
    }
}