const loginButton = document.getElementById("btn_login");
const userTxt = document.getElementById("username");
const passwordTxt = document.getElementById("password");
const alertText = document.getElementById("alertText");

loginButton.addEventListener("click", login);

function login() {
    fetch(`./auth/login?username=${userTxt.value}&password=${passwordTxt.value}`, { method: "POST" })
    .then(async (res) => {
        if(res.status == 401) {
            alertText.style.display = "block";
            alertText.innerText = "Invalid login";
            return setTimeout(() => {
                alertText.style.display = "none";
            }, 5000);
        }

        if(res.status == 500) {
            alertText.style.display = "block";
            alertText.innerText = "Server error";
            return setTimeout(() => {
                alertText.style.display = "none";
            }, 5000);
        }

        let auth = await res.json();
        localStorage.setItem("token", auth["token"]);
        location.replace("./index.html");
    });
}