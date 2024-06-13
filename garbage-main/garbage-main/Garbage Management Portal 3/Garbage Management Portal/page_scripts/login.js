document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("loginForm");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Simulating stored credentials for user and admin
        const storedUserUsername = "user";
        const storedUserPassword = "user123";
        const storedAdminUsername = "admin";
        const storedAdminPassword = "admin123";

        if (username === storedUserUsername && password === storedUserPassword) {
            document.cookie = `username=${encodeURIComponent(username)}; path=/`;
            document.cookie = `password=${encodeURIComponent(password)}; path=/`;
            document.cookie = `role=user; path=/`;
            window.location = "main.html"; // Redirect to user panel
        } else if (username === storedAdminUsername && password === storedAdminPassword) {
            document.cookie = `username=${encodeURIComponent(username)}; path=/`;
            document.cookie = `password=${encodeURIComponent(password)}; path=/`;
            document.cookie = `role=admin; path=/`;
            window.location = "adminpanel.html"; // Redirect to admin panel
        } else {
            alert("Invalid username or password. Please try again.");
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
    }

    const role = getCookie("role");
    if (role !== "admin") {
        window.location = "login.html";
    }

    const username = decodeURIComponent(getCookie("username"));
    const password = decodeURIComponent(getCookie("password"));

    if (username && password) {
        document.getElementById("userName").textContent = username;
        document.getElementById("userPassword").textContent = password;
    } else {
        window.location = "login.html";
    }
});

function logout() {
    document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "password=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "role=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    window.location = "login.html";
}
