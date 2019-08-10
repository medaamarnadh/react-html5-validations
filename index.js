/**
 * 
 */
exports.checkFormValidation = (validationForm) => {    
    const elements = validationForm.elements;
    const validations = {};
    let valid = true
    for(let ele of elements) {    
        validations[ele.name] = {
            value: ele.value,
            validity: ele.checkValidity(),
            longError: ele.validity.tooLong,
            shortError: ele.validity.tooShort,
            aboveRangeError: ele.validity.rangeOverflow,
            rangeBelowError: ele.validity.rangeUnderflow,
            typeError: ele.validity.typeError,
            valid: ele.validity.valid,
            incorrectInput: ele.validity.badInput,
            patternError: ele.validity.patternMismatch,
            customError: ele.validity.customError
        }
        if(ele.checkValidity() === false) {
            valid = false
        }

    }
    return {
        valid,
        validations
    };
}

exports.checkElementValidation = (element) => {
    let validationObject = {};
    validationObject = {
            value: element.value,
            validity: element.checkValidity(),
            longError: element.validity.tooLong,
            shortError: element.validity.tooShort,
            aboveRangeError: element.validity.rangeOverflow,
            rangeBelowError: element.validity.rangeUnderflow,
            typeError: element.validity.typeError,
            valid: element.validity.valid,
            incorrectInput: element.validity.badInput,
            patternError: element.validity.patternMismatch,
            customError: element.validity.customError        
    }
    return validationObject;
}