import useInput from '../hooks/use-input';

const SimpleInput = (props) => {

  const {
    value: enteredName, 
    hasError: nameInputIsInvalid, 
    isValid: enteredNameIsValid,
    valueChangeHandler: nameInputChangeHandler,
    valueBlurHandler: nameInputBlurHandler,
    reset: resetNameInput
  } = useInput((value) => value.trim() !== '');

  const {
    value: enteredEmail, 
    hasError: emailInputIsInvalid, 
    isValid: enteredEmailIsValid,
    valueChangeHandler: emailInputChangeHandler,
    valueBlurHandler: emailInputBlurHandler,
    reset: resetEmailInput
  } = useInput((value) => value.trim() !== '' && value.includes('@'));

  let formIsValid = false;
    if (enteredEmailIsValid && enteredEmailIsValid) formIsValid = true;
    

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    if (!enteredNameIsValid) {
      return;
    }
    console.log(enteredName);
    resetNameInput();

    if (!enteredEmailIsValid) {
      return;
    }
    resetEmailInput();
  };
  const nameInputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control';
  const emailInputClasses = emailInputIsInvalid ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input 
          type='text' 
          id='name' 
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
        {nameInputIsInvalid && <p className="error-text">Name must not be empty</p>}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='email'>Your Email</label>
        <input 
          type='text' 
          id='email' 
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
          value={enteredEmail}
        />
        {emailInputIsInvalid && <p className="error-text">Please enter a valid email</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
