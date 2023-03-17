import { authActions } from "../slices/auth.slice";
import { getReviewsByAuthUser } from "./record.action";

import { db } from "../../library/firebase";
import { doc, getDoc } from "firebase/firestore";

export const transformAuthenticatedUser = (id) => {
  return async (dispatch) => {
    const transform = async (id) => {
      const docRef = doc(db, "users", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const user = {
          id: id,
          fullName: docSnap.data().fullName,
          username: docSnap.data().username,
          email: docSnap.data().email,
          timeStamp: JSON.stringify(docSnap.data().timeStamp.toDate()),
        };

        return user;
      } else {
        throw new Error("Does not exist");
      }
    };

    try {
      const authData = await transform(id);
      dispatch(authActions.authenticateUser(authData));
      dispatch(getReviewsByAuthUser(authData.id));
    } catch (error) {
      console.log("error", error);
    }
  };
};
