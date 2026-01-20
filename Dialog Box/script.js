// const loginDialog = document.getElementById("login-dialog");
// const signupDialog = document.getElementById("signup-dialog");

// const showLoginDialog = (show) => showDialog(show, loginDialog);
// const showSignupDialog = (show) => showDialog(show, signupDialog);

// const showDialog = (show, dialog) =>
//   show ? dialog.showModal() : dialog.close();


document.querySelectorAll(".open-modal").forEach(btn=>{
  btn.addEventListener("click", ()=>{
    let dialogId = btn.getAttribute("data-modal");
    let dialog = document.getElementById(dialogId);
    dialog.showModal();
    dialog.querySelectorAll(".close-modal").forEach(btn=>{
      btn.addEventListener("click", ()=>{
        dialog.close();
      })
    })
  })
})
// document.querySelectorAll(".close-modal").forEach(btn=>{
//   btn.addEventListener("click", ()=>{
//     let dialog = btn.closest("dialog");
//     dialog.close();
//   })
// })