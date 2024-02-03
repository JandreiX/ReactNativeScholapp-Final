import { validate } from 'validate.js';

// Define reusable options for presence validation
const presenceOptions = {
    presence: {
        allowEmpty: false,
        message: 'This field is required.',
    },
};

// Define reusable options for email validation
const emailOptions = {
    email: {
        message: 'Please enter a valid email address.',
    },
    ...presenceOptions, // Include presence validation
};

// Define reusable options for password validation
const passwordOptions = {
    length: {
        minimum: 6,
        message: 'Password must be at least 6 characters long.',
    },
    ...presenceOptions, // Include presence validation
};

export const validateString = (id, value) => {
    const validationResult = validate({ [id]: value }, { [id]: presenceOptions });
    return validationResult && validationResult[id];
};

export const validateEmail = (id, value) => {
    const validationResult = validate({ [id]: value }, { [id]: emailOptions });
    return validationResult && validationResult[id];
};

export const validatePassword = (id, value) => {
    const validationResult = validate({ [id]: value }, { [id]: passwordOptions });
    return validationResult && validationResult[id];
};
