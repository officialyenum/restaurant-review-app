import { recordActions } from "../slices/record.slice";

import { db } from "../../library/firebase";
import {
  collection,
  query,
  where,
  getDocs,
  getDoc,
  serverTimestamp,
  addDoc,
  doc,
  orderBy,
  limit,
} from "firebase/firestore";

export const searchRecords = (search) => {
  return async (dispatch) => {
    const sendRequest = async () => {
      const url = `${process.env.REACT_APP_API_GET_RECORDS_FRONT}"${search}"${process.env.REACT_APP_API_GET_RECORDS_BACK}`;
      const encodedUrl = encodeURI(url);
      const resp = await fetch(encodedUrl);
      if (!resp.ok) {
        // console.log(resp);
        return;
      }

      const data = await resp.json();
      return data;
    };

    try {
      const cartData = await sendRequest();
      dispatch(recordActions.clearRecords());
      cartData.records.forEach((data) => {
        dispatch(
          recordActions.addToRecords({
            id: data.record.id,
            businessName: data.record.fields.businessname,
            businessType: data.record.fields.businesstype,
            businessAddress: data.record.fields.addressline3,
            ratingDate: data.record.fields.ratingdate,
            rating: data.record.fields.rating,
            scoresHygiene: data.record.fields.scores_hygiene,
            scoresStructural: data.record.fields.scores_structural,
          })
        );
      });
    } catch (error) {
      console.log("error", error);
    }
  };
};

export const getRecordById = (id) => {
  return async (dispatch) => {
    dispatch(recordActions.resetSelectedRecord());
    const sendRequest = async () => {
      const url =
        process.env.REACT_APP_API_GET_RECORD_FRONT +
        id +
        process.env.REACT_APP_API_GET_RECORD_BACK;
      const encodedUrl = encodeURI(url);
      const resp = await fetch(encodedUrl);
      if (!resp.ok) {
        return;
      }

      const data = await resp.json();
      return data;
    };

    try {
      const recordData = await sendRequest();
      dispatch(
        recordActions.updateSelectedRecord({
          id: recordData.record.id,
          businessName: recordData.record.fields.businessname,
          businessType: recordData.record.fields.businesstype,
          businessAddress: recordData.record.fields.addressline3,
          ratingDate: recordData.record.fields.ratingdate,
          rating: recordData.record.fields.rating,
          scoresHygiene: recordData.record.fields.scores_hygiene,
          scoresStructural: recordData.record.fields.scores_structural,
        })
      );
    } catch (error) {
      dispatch(recordActions.resetSelectedRecord());
    //   console.log("error", error);
    }
  };
};

export const getReviewsByRestaurantId = (id) => {
  return async (dispatch) => {
    // dispatch(recordActions.clearRecordReviews);
    const sendRequest = async () => {
      const q = query(
        collection(db, "reviews"),
        where("restaurantId", "==", id)
      );

      // const q = query(collection(db, "reviews"), limit(10));
      const querySnapshot = await getDocs(
        q,
        orderBy("timeStamp", "desc"),
        limit(10)
      );
      if (querySnapshot) {
        querySnapshot.forEach((doc) => {
          // console.log(doc.id, " => ", doc.data());
        //   console.log(doc.id);
          const reviewData = {
            id: doc.id,
            restaurantId: doc.data().restaurantId,
            restaurant: doc.data().restaurant,
            body: doc.data().body,
            stars: doc.data().stars,
            rating: doc.data().rating,
            userId: doc.data().userId,
            user: doc.data().user,
            timeStamp: JSON.stringify(doc.data().timeStamp.toDate()),
          };
        //   console.log(reviewData);
          dispatch(recordActions.addToSelectedRecordReview(reviewData));
        });
        return querySnapshot;
      } else {
        throw new Error("Does not exist");
      }
    };

    try {
      await sendRequest();
    } catch (error) {
      console.log("error", error);
    }
  };
};

export const getReviewsByAuthUser = (id) => {
  return async (dispatch) => {
    dispatch(recordActions.clearRecordReviews);
    const sendRequest = async () => {
      const q = query(collection(db, "reviews"), where("userId", "==", id));

      const querySnapshot = await getDocs(
        q,
        orderBy("timeStamp", "desc"),
        limit(10)
      );
      if (querySnapshot) {
        let res = [];
        querySnapshot.forEach((doc) => {
        //   console.log(doc.id, " => ", doc.data());
          const reviewData = {
            id: doc.id,
            restaurantId: doc.data().restaurantId,
            restaurant: doc.data().restaurant,
            body: doc.data().body,
            stars: doc.data().stars,
            rating: doc.data().rating,
            userId: doc.data().userId,
            user: doc.data().user,
            timeStamp: JSON.stringify(doc.data().timeStamp.toDate()),
          };
          res.push(reviewData);
        });
        dispatch(recordActions.addToAuthUserReview(res));
        return querySnapshot;
      } else {
        throw new Error("Does not exist");
      }
    };

    try {
      await sendRequest();
    } catch (error) {
      console.log("error", error);
    }
  };
};

export const getLatestTenReviews = () => {
  return async (dispatch) => {
    dispatch(recordActions.clearRecordReviews);
    const sendRequest = async () => {
      const q = query(collection(db, "reviews"), limit(10));

      const querySnapshot = await getDocs(q);

      if (querySnapshot) {
        querySnapshot.forEach((doc) => {
        //   console.log(doc.data());
        //   console.log(doc.id, " => ", doc.data());
          const reviewData = {
            id: doc.id,
            restaurantId: doc.data().restaurantId,
            restaurant: doc.data().restaurant,
            body: doc.data().body,
            stars: doc.data().stars,
            rating: doc.data().rating,
            userId: doc.data().userId,
            user: doc.data().user,
            timeStamp: JSON.stringify(doc.data().timeStamp.toDate()),
          };
        //   console.log(reviewData);
          dispatch(recordActions.addToSelectedRecordReview(reviewData));
        });
        return querySnapshot;
      } else {
        throw new Error("Does not exist");
      }
    };

    try {
      await sendRequest();
    } catch (error) {
      console.log("error", error);
    }
  };
};

export const submitReview = (record, rating, body, stars, user) => {
  return async (dispatch) => {
    const sendRequest = async () => {
    //   console.log("reviewData:", body);
      // Add a new document with a generated id.
      const newReview = await addDoc(collection(db, "reviews"), {
        restaurantId: record.id,
        restaurant: record,
        rating: rating,
        body: body,
        stars: stars,
        userId: user.id,
        user: user,
        timeStamp: serverTimestamp(),
      });
      // Get the Doc Data from DB;
      const docRef = doc(db, "reviews", newReview.id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const reviewData = {
          id: newReview.id,
          restaurantId: docSnap.data().restaurantId,
          restaurant: docSnap.data().restaurant,
          rating: docSnap.data().rating,
          body: docSnap.data().body,
          stars: docSnap.data().stars,
          userId: docSnap.data().userId,
          user: docSnap.data().user,
          timeStamp: JSON.stringify(docSnap.data().timeStamp.toDate()),
        };
        return reviewData;
      } else {
        throw new Error("Does not exist");
      }
    };
    try {
      const reviewData = await sendRequest();
      dispatch(recordActions.addToSelectedRecordReview(reviewData));
    } catch (error) {
      console.log("error", error);
    }
  };
};
