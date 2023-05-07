import axios from "axios";
import { URL } from "../App";

export const saveTrick = async (userID, trickID, isTrickSaved) => {
  if (!isTrickSaved) {
    try {
      await axios.put(`${URL}/tricks`, {
        trickID,
        userID,
      });
    } catch (err) {
      console.error(err);
    }
  } else {
    try {
      await axios.delete(`${URL}/tricks`, {
        data: { userID: userID, trickID: trickID },
      });
    } catch (err) {
      console.error(err);
    }
  }
};
