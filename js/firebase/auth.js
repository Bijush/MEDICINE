// 🔐 FIREBASE AUTH ADMIN (ONLY 1 ADMIN LOCK)

// 👉 নিজের email বসাও
const ADMIN_EMAIL = "bijush@gmail.com";

let ADMIN_USER = null;


// 🔥 AUTH STATE LISTENER
firebase.auth().onAuthStateChanged(user => {

  // 🔐 only allow specific admin email
  if (user && user.email === ADMIN_EMAIL) {
    ADMIN_USER = user;
  } else {
    ADMIN_USER = null;

    // ❌ force logout if not admin
    if (user) {
      firebase.auth().signOut();
      alert("❌ Not authorized admin");
    }
  }

  console.log("Admin state:", ADMIN_USER ? "ADMIN LOGGED IN" : "USER MODE");

  // 🔄 refresh sidebar / UI
  if (typeof refreshAdminUI === "function") {
    refreshAdminUI();
  }
});


// ✅ CHECK ADMIN
function isAdmin() {
  return ADMIN_USER !== null;
}


// 🔑 LOGIN
function loginAdmin() {
  const email = prompt("Enter admin email:");
  const password = prompt("Enter password:");

  if (!email || !password) {
    alert("Email & password required ❗");
    return;
  }

  firebase.auth()
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {

      const user = userCredential.user;

      // 🔐 check email
      if (user.email !== ADMIN_EMAIL) {
        alert("❌ Not admin email");

        firebase.auth().signOut();
        return;
      }

      alert("✅ Admin login successful");

      // 🔥 open dashboard
      showDashboard();
    })
    .catch((error) => {
      console.error("LOGIN ERROR:", error);
      alert("❌ Login failed: " + error.message);
    });
}


// 🔒 LOGOUT
function logoutAdmin() {
  firebase.auth().signOut()
    .then(() => {

      ADMIN_USER = null;

      alert("Logged out ✅");

      // 🔥 go normal page
      showTheory();

      // 🔄 refresh UI
      if (typeof refreshAdminUI === "function") {
        refreshAdminUI();
      }
    })
    .catch(err => {
      console.error("Logout error:", err);
      alert("Logout failed ❌");
    });
}