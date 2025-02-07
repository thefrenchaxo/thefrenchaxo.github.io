document.addEventListener("DOMContentLoaded", () => {
    const donationButton = document.getElementById("donation-button");
    const copyMessage = document.getElementById("copy-message");
    const donationAddress = "0x1234567890ABCDEF1234567890ABCDEF12345678"; // Remplace par ton adresse Ethereum

    donationButton.addEventListener("click", (event) => {
        event.preventDefault(); // Empêche l'ouverture du lien
        navigator.clipboard.writeText(donationAddress)
            .then(() => {
                copyMessage.style.display = "block"; // Affiche le message
                copyMessage.classList.add("show"); // Ajoute la classe pour l'animation
                setTimeout(() => {
                    copyMessage.style.display = "none"; 
                    copyMessage.classList.remove("show"); // Retire la classe après 3s
                }, 3000);
            })
            .catch(err => {
                alert("Failed to copy: " + err);
            });
    });
});
