import React, { useEffect, useReducer } from "react";
import moment from 'moment'
import StyledText from "../StyledText";
import { initialState, reducer } from './reducer';
import { SET_IS_DATETIME_MET, SET_DATETIME } from './actions';
import { Container, Heading } from "./styled";
import { formatCountdownTextLabel } from './utils';

const Countdown = ({
  title,
  eventDateTime,
  messageLine1,
  messageLine2,
  messageLine3,
  messageLine4,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const timer = () => {
      const eventTime = moment(
        eventDateTime, // e.g. `01-01-2022 00:00:00`,
        'DD-MM-YYYY HH:mm:ss'
      ).unix();
      const currentTime = moment().unix()
      const diffTime = eventTime - currentTime
      let duration = moment.duration(diffTime * 1000, 'milliseconds')
      const interval = 1000
  
      if (diffTime > 0) {
        setInterval(() => {
          if (duration.asMilliseconds() > 0) {
            duration = moment.duration(
              duration.asMilliseconds() - interval,
              'milliseconds'
            )
  
            // Format the months/days/hours/mins/secs with labels
            dispatch({ type: SET_DATETIME, payload: {
                monthsText: formatCountdownTextLabel(duration.months(), ' months', true),
                daysText: formatCountdownTextLabel(duration.days(), ' days', true),
                hoursText: formatCountdownTextLabel(duration.hours(), ' hours', true),
                minutesText: formatCountdownTextLabel(duration.minutes(), ' minutes', true),
                secondsText: formatCountdownTextLabel(duration.seconds(), ' seconds', false)
              }
            });
          } else {
            // setIsDateTimeMet(true);
            dispatch({ type: SET_IS_DATETIME_MET, payload: { isDateTimeMet: true } });
          }
        }, interval);
      } else {
        // setIsDateTimeMet(true);
        dispatch({ type: SET_IS_DATETIME_MET, payload: { isDateTimeMet: true } });
      }
    }

    // Call the timer function
    timer();
  }, []);

  return (
    <Container>
      <Heading>{title}</Heading>
      {!state.isDateTimeMet ? (
        <React.Fragment>
          <StyledText backgroundColour="black" textColour="#FFFF33">
            {state.monthsText}
          </StyledText>
          <StyledText backgroundColour="black" textColour="#00FF33">
            {state.daysText}
          </StyledText>
          <StyledText backgroundColour="black" textColour="#099FFF">
            {state.hoursText}
          </StyledText>
          <StyledText backgroundColour="black" textColour="#FF00CC">
            {state.minutesText}
          </StyledText>
          <StyledText backgroundColour="black" textColour="#CC00FF">
            {state.secondsText}
          </StyledText>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <StyledText backgroundColour="black" textColour="#FFFF33">
            {messageLine1}
          </StyledText>
          <StyledText backgroundColour="black" textColour="#FF00CC">
            {messageLine2}
          </StyledText>
          <StyledText backgroundColour="black" textColour="#099FFF">
            {messageLine3}
          </StyledText>
          <StyledText backgroundColour="black" textColour="#CC00FF">
            {messageLine4}
          </StyledText>
        </React.Fragment>
      )}
    </Container>
  );
}

export default Countdown;
