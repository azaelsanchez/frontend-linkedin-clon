import { OFFER_DETAILS } from "../types";

const initialState = {
  detail: []
};

export function offerDetails(state = initialState, action) {
  switch (action.type) {
    case OFFER_DETAILS:
      return { detail: action.payload };

    default:
      return { ...state };
  }
}

export default offerDetails;
