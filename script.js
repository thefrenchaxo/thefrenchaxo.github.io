document.addEventListener("DOMContentLoaded", () => {
    const donationButton = document.getElementById("donation-button");
    const copyMessage = document.getElementById("copy-message");
    const donationAddress = "0xD719CfeA3738421795a6FBEA5Dbaa7fA7683648f";

    donationButton.addEventListener("click", (event) => {
        event.preventDefault();
        navigator.clipboard.writeText(donationAddress)
            .then(() => {
                copyMessage.style.display = "block";
                copyMessage.classList.add("show");
                setTimeout(() => {
                    copyMessage.style.display = "none"; 
                    copyMessage.classList.remove("show");
                }, 3000);
            })
            .catch(err => {
                alert("Failed to copy: " + err);
            });
    });
});
