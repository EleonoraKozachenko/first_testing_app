const user = {
  name: "",
  login: "",
  password: "",
};

const register = (value, type) => {
  user[type] = value;
};

function validate() {
  const errors = {};
  if (user.name.length === 0) {
    errors.nameError = "This login field is required";
  }
  if (user.login.length === 0) {
    errors.loginError = "This login field is required";
  }
  if (user.password.length === 0) {
    errors.passwordError = "This password field is required";
  }

  if (errors.nameError) {
    alert(errors.nameError);
  }
  if (errors.loginError) {
    alert(errors.loginError);
  }
  if (errors.passwordError) {
    alert(errors.passwordError);
  }

  return errors;
};

const button = () => {
  const errorsObject = validate();
  if (Object.keys(errorsObject).length) {
    console.log("ERROR");
  } else {
    console.log("SUCCESS");
    localStorage.user = JSON.stringify(user);
  redirect("/login");
  }
};
