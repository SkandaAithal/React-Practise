let validation = ({ fn, mobile, email, pwd }) => {
  let errorMessage = {};

  // ^ name validation
  if (!fn) {
    errorMessage.fnMessage = "Name is empty";
  } else if (!/^[A-Za-z\s]+$/g.test(fn)) {
    errorMessage.fnMessage = "Name should contain only alphabets";
  }

  // ^ mobile validation
  if (!mobile) {
    errorMessage.mobileMessage = "Mobile is empty";
  } else if (!/^[6-9][0-9]{9}$/.test(mobile)) {
    errorMessage.mobileMessage = "mobile should contain only 10 numbers";
  }

  // ^ email validation
  if (!email) {
    errorMessage.emailMessage = "email is empty";
  } else if (
    !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    )
  ) {
    errorMessage.emailMessage = "email is not in right format";
  }
  // ^ password validation
  if (!pwd) {
    errorMessage.passwordMessage = "password is empty";
  } else if (pwd.length < 8) {
    errorMessage.passwordMessage = "password should more than 8 characters";
  } else if (!/^[A-Za-z0-9\@!#$%&*^?]+$/.test(pwd)) {
    errorMessage.passwordMessage = "password is not in right format";
  }

  return errorMessage;
};

export default validation;
