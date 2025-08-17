export function isValidEmail(email) {
  const emailRegexRFC =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  return emailRegexRFC.test(email);
}

export function isValidPassword(password) {
  const mediumPassword = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;
  return mediumPassword.test(password);
}

export function isValidName(name) {
  const standardName = /^[A-Za-z\s\-']{2,50}$/;
  return standardName.test(name);
}

export function isValidPhoneNumber(phoneNumber) {
  const phoneRegex = /^\+?[0-9]{10,15}$/;
  return phoneRegex.test(phoneNumber);
}

export function isOnlyDigits(str) {
  const digitPattern = /^\d+$/;
  return digitPattern.test(str);
}
