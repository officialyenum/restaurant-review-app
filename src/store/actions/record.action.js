import { recordActions } from "../slices/record.slice";


export const searchRecords = (search) => {
    return async (dispatch) => {

        const sendRequest = async () => {
            const url = `${process.env.REACT_APP_API_FRONT}"${search}"${process.env.REACT_APP_API_BACK}`;
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
            console.log("success");
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
            console.log("success");
        } catch (error) {
            console.log("error",error);
        }
    }
}