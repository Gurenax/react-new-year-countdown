import {
  SET_IS_DATETIME_MET,
  SET_DATETIME,
} from "./actions";

export const initialState = {
  newYear: "2022",
  isDateTimeMet: false,
  monthsText: "",
  daysText: "",
  hoursText: "",
  minutesText: "",
  secondsText: "",
};

export const reducer = (state, action) => {
  switch (action.type) {
    case SET_IS_DATETIME_MET:
      return {
        ...state,
        isDateTimeMet: action.payload.isDateTimeMet,
      };

    case SET_DATETIME:
      const { monthsText, daysText, hoursText, minutesText, secondsText } =
        action.payload;

      return {
        ...state,
        monthsText,
        daysText,
        hoursText,
        minutesText,
        secondsText,
      };

    default:
      return state;
  }
};
