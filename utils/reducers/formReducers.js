export const reducer = (state, action) => {
    const { validationResult, inputId, inputValue } = action;

    const updatedValues = {
        ...state.inputValues,
        [inputId]: inputValue,
    };

    const updatedValidities = {
        ...state.inputValidities,
        [inputId]: validationResult,
    };

    let updatedFormIsValid = true;

    for (const key in updatedValidities) {
        if (!updatedValidities[key]) {
            updatedFormIsValid = false;
        }
    }

    // Check if there are any error messages for invalid inputs
    const errorTexts = {};
    for (const key in updatedValidities) {
        if (!updatedValidities[key]) {
            errorTexts[key] = "Invalid input"; // Set your custom error message here
        } else {
            errorTexts[key] = null; // Reset error message if input is valid
        }
    }

    return {
        inputValues: updatedValues,
        inputValidities: updatedValidities,
        formIsValid: updatedFormIsValid,
        errorTexts: errorTexts, // Include error messages in the state
    };
};