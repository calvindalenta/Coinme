export const required = value => (value ? undefined : "Required");
export const number = value => isNaN(Number(value)) ? "Must be a number" : undefined;
export const minLength = min => value => value.length < min ? `Must be ${min} characters or more` : undefined;
export const maxLength = max => value =>
  value && value.length > max
    ? `Must be less then ${max} characters`
    : undefined;
export const minLength2 = minLength(2);
export const minLength8 = minLength(8);
export const maxLength4 = maxLength(4);
export const maxLength20 = maxLength(20);