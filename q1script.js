document.getElementById("checkButton").addEventListener("click", function () {
    // Seçilen cevabı kontrol etmek için seçeneklerin değerini alın
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');

    if (selectedAnswer) {
        // Doğru cevap kontrolü
        if (selectedAnswer.value === "four") {
            openCustomPopup("Doğru cevap!");
        } else {
            const correctAnswer = "four"; // Sorunun doğru cevabı
            openCustomPopup("Yanlış cevap " + correctAnswer);
        }
    } else {
        alert("Lütfen bir cevap seçin.");
    }
});

// Görünmez butonu tıklanabilir hale getirme
const invisibleButton = document.getElementById("invisibleButton");
invisibleButton.style.zIndex = 1; // Diğer içeriklerin üstüne çıkmasını sağlar
invisibleButton.style.opacity = 0; // Görünmez yapar

// Görünmez butona tıklanıldığında easteregg1.html dosyasını yeni pencerede açma
invisibleButton.addEventListener("click", function () {
    window.open("easteregg1.html", "_blank");
});

const customPopup = document.getElementById("customPopup");
const closePopupButton = document.getElementById("closePopup");

// Özel popup'ı açma
function openCustomPopup(message) {
    const popupContent = document.querySelector(".popup-content");
    popupContent.innerHTML = "<p>" + message + "</p>";
    customPopup.style.display = "block";
}

// Özel popup'ı kapatma
function closeCustomPopup() {
    customPopup.style.display = "none";
}

// Kapatma düğmesine tıklama olayı eklemek
closePopupButton.addEventListener("click", closeCustomPopup);

