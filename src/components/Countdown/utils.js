// Formats digits to two digits (e.g. 05)
export const formatTimerDigit = (digit) => {
  return digit > 9 ? digit : "0" + digit;
};

// Format the countdownText to include labels and set to blank when value is 0 (strict)
// When strict is true, set the value to blank when digit is 0
export const formatCountdownTextLabel = (digit, label, strict) => {
  if (strict) return digit > 0 ? formatTimerDigit(digit) + label : "";
  else return formatTimerDigit(digit) + label;
};
