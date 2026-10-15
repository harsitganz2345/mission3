
document.querySelectorAll("[data-toggle='password']").forEach((button) => {
  const wrapper = button.closest(".password-wrap");
  if (!wrapper) return;

  const input = wrapper.querySelector("input");
  const eyeOpen = button.querySelector(".eye-open");
  const eyeClosed = button.querySelector(".eye-closed");

  if (!input || !eyeOpen || !eyeClosed) return;

  input.type = "password";
  eyeOpen.classList.add("is-hidden");
  eyeClosed.classList.remove("is-hidden");

  button.addEventListener("click", () => {
    const showPassword = input.type === "password";

    input.type = showPassword ? "text" : "password";

    eyeOpen.classList.toggle("is-hidden", !showPassword);
    eyeClosed.classList.toggle("is-hidden", showPassword);

    button.setAttribute(
      "aria-label",
      showPassword ? "Sembunyikan kata sandi" : "Tampilkan kata sandi"
    );

    button.setAttribute("aria-pressed", String(showPassword));
  });
});

document.querySelectorAll("[data-google]").forEach((button) => {
  button.addEventListener("click", () => alert("Login/daftar Google belum terhubung karena project ini tidak memakai backend."));
});

const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const ee = document.getElementById("emailError");
    const pe = document.getElementById("passwordError");
    ee.textContent = ""; pe.textContent = "";
    let ok = true;
    if (!email.value.trim()) { ee.textContent = "E-Mail wajib diisi."; ok = false; }
    else if (!email.validity.valid) { ee.textContent = "Format E-Mail belum benar."; ok = false; }
    if (!password.value) { pe.textContent = "Kata sandi wajib diisi."; ok = false; }
    if (!ok) return;
    window.location.href = "index.html";
  });
}

const registerForm = document.getElementById("registerForm");
if (registerForm) {
  registerForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const ids = ["name","email","gender","phone","password","confirmPassword"];
    ids.forEach(id => { const x=document.getElementById(id+"Error") || document.getElementById(id==="confirmPassword" ? "confirmError" : id+"Error"); if(x)x.textContent=""; });
    let ok = true;
    const name = document.getElementById("name"), email=document.getElementById("email"), gender=document.getElementById("gender");
    const phone=document.getElementById("phone"), pass=document.getElementById("password"), confirm=document.getElementById("confirmPassword");
    const setErr=(id,msg)=>{document.getElementById(id).textContent=msg;ok=false};
    if(!name.value.trim()) setErr("nameError","Nama lengkap wajib diisi.");
    if(!email.value.trim()) setErr("emailError","E-Mail wajib diisi.");
    else if(!email.validity.valid) setErr("emailError","Format E-Mail belum benar.");
    if(!gender.value) setErr("genderError","Jenis kelamin wajib dipilih.");
    if(!phone.value.trim()) setErr("phoneError","No. HP wajib diisi.");
    if(!pass.value) setErr("passwordError","Kata sandi wajib diisi.");
    if(!confirm.value) setErr("confirmError","Konfirmasi kata sandi wajib diisi.");
    else if(pass.value !== confirm.value) setErr("confirmError","Kata sandi tidak sama.");
    if(!ok)return;
    alert("Pendaftaran berhasil (mode demo). Data tidak disimpan karena project ini tanpa storage.");
    window.location.href="login.html";
  });
}

const forgotForm = document.getElementById("forgotForm");
if (forgotForm) {
  forgotForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email=document.getElementById("email"), error=document.getElementById("emailError");
    error.textContent="";
    if(!email.value.trim()){error.textContent="E-Mail wajib diisi.";return}
    if(!email.validity.valid){error.textContent="Format E-Mail belum benar.";return}
    alert("Link reset password (simulasi) sudah dikirim.");
    window.location.href="reset-password.html";
  });
}

const resetForm = document.getElementById("resetForm");
if (resetForm) {
  resetForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const pass=document.getElementById("password"), confirm=document.getElementById("confirmPassword");
    const pe=document.getElementById("passwordError"), ce=document.getElementById("confirmError");
    pe.textContent="";ce.textContent="";
    if(!pass.value){pe.textContent="Kata sandi wajib diisi.";return}
    if(!confirm.value){ce.textContent="Konfirmasi kata sandi wajib diisi.";return}
    if(pass.value!==confirm.value){ce.textContent="Kata sandi tidak sama.";return}
    alert("Password berhasil diubah (simulasi).");
    window.location.href="login.html";
  });
}
