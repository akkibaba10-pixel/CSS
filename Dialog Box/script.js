const loginDialog = document.getElementById("login-dialog");
const signupDialog = document.getElementById("signup-dialog");

const showLoginDialog = (show) => showDialog(show, loginDialog);
const showSignupDialog = (show) => showDialog(show, signupDialog);

const showDialog = (show, dialog) =>
  show ? dialog.showModal() : dialog.close();
