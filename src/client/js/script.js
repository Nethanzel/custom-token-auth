const username = document.getElementById("user_");
const loginDate = document.getElementById("indate_");
const tokenDate = document.getElementById("outdate_");
const alertText = document.getElementById("alertText");

function validate() {
    let token = localStorage.getItem("token");
    fetch(`./auth/validate`, {headers: { token }})
    .then(async (res) => {

        if(res.status == 401) {
            alertText.style.display = "block";
            alertText.innerText = "Your authentication token is invalid or has expired.";

            username.innerHTML = `<strong>Username:</strong>  --`
            loginDate.innerHTML = `<strong>Login date:</strong> --`
            tokenDate.innerHTML = `<strong>Token expiry:</strong> --`
        }

        if(res.status == 500) {
            alertText.style.display = "block";
            alertText.innerText = "Server error.";
        }

        let data = await res.json();
        data = data.tokenData;

        username.innerHTML = `<strong>Username:</strong> ${data.user || "--"}`
        loginDate.innerHTML = `<strong>Login date:</strong> ${data.startingDate || "--"}`
        tokenDate.innerHTML = `<strong>Token expiry:</strong> ${data.endingDate || "--"}`
    });
};

validate();