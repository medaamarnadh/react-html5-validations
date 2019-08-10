# react-html5-validations
As we do not have in built form validations support in ReactJs, we need to have reusable light weight library to validate our forms in more flexible and customised way. I hope react-html5-validations package/module will fill the gap. This module does not include any other dependencies and development dependencies. This module was developed by using pure Javascript. 


# # How to use:

1. `npm install --save react-html5-validations`
2. Load this module as `import { checkFormValidation, checkElementValidation}`


## Reference

### checkFormValidation(<formObject>)
This is the method to validate a form.  We need to pass our form object into the above method then it will return result as an object which includes validation status of the form and validation status of each element in the form. The return result is 
``` 
{
	"valid": false,
	"validations": {
		"fullName": {
			"value": "",
			"validity": false,
			"longError": false,
			"shortError": false,
			"aboveRangeError": false,
			"rangeBelowError": false,
			"valid": false,
			"incorrectInput": false,
			"patternError": false,
			"customError": false
		},		  
		"email": {
			...
		}
	}
}
```
**valid** : true/ false. 
   true --> If the entire form is valid 
   false --> If the form is invalid 
 **validations** : This is a JSON object that contains validations of entire form. each key is the form element name. The value of each element contains same kind of validation object which is 
```
{
	"value": "",
	"validity": false,
	"longError": false,
	"shortError": false,
	"aboveRangeError": false,
	"rangeBelowError": false,
	"valid": false,
	"incorrectInput": false,
	"patternError": false,
	"customError": false
}
```
**value**: Value of the form element 
	
**validity**: true / false Tells us whether form element is valid or not 

**longError**:  true/ false Tell us whether the form element has long error or not.

**shortError**: true / false Tells us whether the form is short Error or not 

**aboveRangeError**: true/ false Tell us whether the form element has above range error or not 

**rangeBelowError**: true/false Tell us whether the form element has below range error not

**incorrectInput**: true/false. Tell us whether the form element has in correct input error or not 

**patternError**: true/false. Tell us whether the form element has pattern error  or not 

**customError**: true/false. Tell us whether the form element has custom error or not

The beauty of this module is we do not need to learn any validations mechanism other than html5 validations to define in our forms 
Note: We can use above method in form onSubmit event and  have to call `preventDefault` method of the event object.

### checkElementValidation(<ElementObject>)
This is the function to check an individual form element is valid or not. The result is 
```
{
	"value": "some value",
	"validity": true,
	"longError": false,
	"shortError": false,
	"aboveRangeError": false,
	"rangeBelowError": false,
	"valid": true,
	"incorrectInput": false,
	"patternError": false,
	"customError": false
}
```


## Example usage
```
	import  React, { Component } from  'react';
	import { Button, Form, FormGroup, Label, Input, Container } from  'reactstrap';
// We are loading react-html5-validations 
	import { checkElementValidation, checkFormValidation } from  'react-html5-validations';
	
	class  HomePage  extends  Component {
		constructor(props) {
			super(props)
			this.state  = {
				user: {
					name:  '',
					email:  ''
				},
				formValidations: {
				}
			}
			// Bind this
			this.handleFormSubmit  =  this.handleFormSubmit.bind(this)
			this.onChange  =  this.onChange.bind(this)
		}
		// This is the function to handle the form submit event
		
		handleFormSubmit(ev) {
			ev.preventDefault()
			let  formValidations  = checkFormValidation(ev.target)
			this.setState({
			formValidations:  formValidations.validations
			})
		}
		
		onChange (e) {
			let  formValidations  =  this.state.formValidations
			formValidations[e.target.name] = checkElementValidation(e.target)
			this.setState({
				formValidations
			});
		}

	render() {
		return (
			<Container>
			<div>
			<Form onSubmit={this.handleFormSubmit} noValidate>

			<FormGroup  className="signup-input-wrap">
				<Label  for="name"  className="input-label name-label">
					Full name
				</Label>
				
				<Input type="text" name="fullName" placeholder="Enter full name" onChange={this.onChange} className="input-field"	required  />
				
				{this.state.formValidations.fullName && !this.state.formValidations.fullName.validity ? (
				<span  className="error-msg">Please enter a valid full name</span>
				): ''}
			</FormGroup>
			
			<FormGroup  className="signup-input-wrap">
				<Label  for="exampleEmail"  className="input-label email-label">
					Email
				</Label>
				<Input type="email" name="email" onChange={this.onChange}	placeholder="Enter email ID" className="input-field" required/>
				{this.state.formValidations.email && !this.state.formValidations.email.validity ? (
				<span  className="error-msg">Please enter a valid email</span>
				): ''}
			</FormGroup>
			<Input type="submit" value="Login" className="submit-btn login-btn" />
			</Form>
			</div>
			</Container>
		);
	}
}
export  default  HomePage
```
If you face any issues while integrating with your ReactJs applications or If you would like to give any suggestions please add them as issues in the Github repository. 
[GitHub issues link](https://github.com/medaamarnadh/react-html5-validations/issues)