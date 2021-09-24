import useInput from "../hooks/use-input";

const BasicForm = (props) => {
  const {
    value: enteredFirstName,
    hasError: firstNameIsInvalid,
    isValid: firstNameIsValid,
    valueChangeHandler: firstNameChangeHandler,
    valueBlurHandler: firstNameBlurHandler,
    reset: resetFirstName
  } = useInput((value) => value.trim() !== '');

  const {
    value: enteredLastName,
    hasError: lastNameIsInvalid,
    isValid: lastNameIsValid,
    valueChangeHandler: lastNameChangeHandler,
    valueBlurHandler: lastNameBlurHandler,
    reset: resetLastName
  } = useInput((value) => value.trim() !== '');

  const {
    value: enteredEmail,
    hasError: emailIsInvalid,
    isValid: emailIsValid,
    valueChangeHandler: emailChangeHandler,
    valueBlurHandler: emailBlurHandler,
    reset: resetEmail
  } = useInput((value) => value.trim() !== '' && value.includes('@'));

  let formIsValid = false;
  if (firstNameIsValid && lastNameIsValid && emailIsValid) formIsValid = true;

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (!formIsValid) return;
    console.log('Submitted!');
    console.log(enteredFirstName, enteredLastName, enteredEmail);
    resetFirstName();
    resetLastName();
    resetEmail();
  }

  const firstNameInput = firstNameIsInvalid ? 'form-control invalid' : 'form-control';
  const lastNameInput = lastNameIsInvalid ? 'form-control invalid' : 'form-control';
  const emailInput = emailIsInvalid ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={formSubmitHandler}>
      <div className='control-group'>
        <div className={firstNameInput}>
          <label htmlFor='name'>First Name</label>
          <input
            type='text' 
            id='name'
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
            value={enteredFirstName}/>
            {firstNameIsInvalid && <p className="error-text">Name must not be empty</p>}
        </div>
        <div className={lastNameInput}>
          <label htmlFor='name'>Last Name</label>
          <input 
            type='text' 
            id='name'
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
            value={enteredLastName}/>
            {lastNameIsInvalid && <p className="error-text">Name must not be empty</p>}
        </div>
      </div>
      <div className={emailInput}>
        <label htmlFor='name'>E-Mail Address</label>
        <input 
          type='text' 
          id='name'
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}/>
          {emailIsInvalid && <p className="error-text">Email is not valid</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
