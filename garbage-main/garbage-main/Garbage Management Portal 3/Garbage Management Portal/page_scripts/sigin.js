document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        const gender = document.getElementById("gender").value;
        const age = document.getElementById("age").value;
        const address = document.getElementById("address").value;
        const bankDetails = document.getElementById("bankDetails").value;

        document.cookie = `username=${encodeURIComponent(username)}; path=/`;
        document.cookie = `password=${encodeURIComponent(password)}; path=/`;
        document.cookie = `gender=${encodeURIComponent(gender)}; path=/`;
        document.cookie = `age=${encodeURIComponent(age)}; path=/`;
        document.cookie = `address=${encodeURIComponent(address)}; path=/`;
        document.cookie = `bankDetails=${encodeURIComponent(bankDetails)}; path=/`;

        
        if (document.cookie.includes(`username=${encodeURIComponent(username)}`) &&
            document.cookie.includes(`password=${encodeURIComponent(password)}`) &&
            document.cookie.includes(`gender=${encodeURIComponent(gender)}`) &&
            document.cookie.includes(`age=${encodeURIComponent(age)}`) &&
            document.cookie.includes(`address=${encodeURIComponent(address)}`) &&
            document.cookie.includes(`bankDetails=${encodeURIComponent(bankDetails)}`)) {
            alert("Form data has been successfully saved !");
            window.location="login.html"
        } else {
            alert("Failed to save");
        }
    });
});
