import axios from "axios";
import { URL } from "../App";

export const wishlistTrick = async (userID, trickID, isTrickWishlisted) => {
  if (!isTrickWishlisted) {
    try {
      await axios.put(`${URL}/tricks/wishlist`, {
        trickID,
        userID,
      });
    } catch (err) {
      console.error(err);
    }
  } else {
    try {
      await axios.delete(`${URL}/tricks/wishlist`, {
        data: { userID: userID, trickID: trickID },
      });
    } catch (err) {
      console.error(err);
    }
  }
};
