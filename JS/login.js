const user = {
  login: "",
  password: "",
};

const isLocalUser = localStorage.user;
if (!isLocalUser && !window.location.pathname.includes("login")) {
  redirect("/login");
}

function auth(value, type) {
  if (type === "login") {
    user.login = value;
  } else {
    user.password = value;
  }
}

function validate() {
  const errors = {};

  if (user.login.length === 0) {
    errors.loginError = "This login field is required";
  }
  if (user.password.length === 0) {
    errors.passwordError = "This password field is required";
  }

  if (errors.loginError) {
    alert(errors.loginError);
  }

  if (errors.passwordError) {
    alert(errors.passwordError);
  }

  return errors;
}

function getUser() {
  try {
    const users = fetch("https://jsonplaceholder.typicode.com/users").then(
      (data) => {
        // запрос на сервер с помощью fetch, then показывает ответ с сервера
        console.log("data,", data);
      }
    );
  } catch (error) {
    console.log("error", error);
  }
}

function authUser(userClient, userStorage) {
  const isLogin = userClient.login === userStorage.login;
  const isPassword = userClient.password === userStorage.password;
  if (isLogin && isPassword) {
    redirect("/home");
  } else {
    alert("This user isn't defined");
    window.location.reload();
  }
}

const dataUser = localStorage.user;

function button() {
  const errorsObject = validate();
  if (Object.keys(errorsObject).length) {
    console.log("ERROR");
    window.location.reload();
  } else {
    console.log("SUCCESS");
    // localStorage.user = JSON.stringify({login : "admin" , password : "admin"});
    authUser(user, JSON.parse(dataUser));
  }
}

function logout() {
  delete localStorage.user;
  redirect("/login");
}
