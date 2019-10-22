export const API_URL = 'http://localhost:8080/api/';

export const REQUEST_STATUSES = {
  NOT_LOADED: 'notLoaded',
  LOADING: 'loading',
  LOADED: 'loaded',
  FAILED: 'failed'
};

export const VALIDATION_ERRORS = {
  REQUIRED_FIELD: 'This field is required.',
  INVALID_DATE: 'Please enter a valid date.',
  INVALID_EMAIL: 'Please enter a valid email address.',
  MIN_LENGTH: min => `Please enter at least ${min} characters in this field`,
  EXACT_LENGTH: length =>
    `Please enter exactly ${length} characters in this field`,
  EXACT_LENGTH_ZIPCODE: 'Invalid Zip code',
  IS_NAN: 'Please enter a number',
  INVALID_PHONE_FORMAT: 'Please enter a valid phone format.'
};
