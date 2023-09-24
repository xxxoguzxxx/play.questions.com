const card = document.querySelector('.card');
const toggleCardButton = document.getElementById('toggleCard');
const loginButton = document.getElementById('loginButton');
const registerButton = document.getElementById('registerButton');
const loginForm = document.querySelector('.front form');
const registerForm = document.querySelector('.back form');
const loginLink = document.getElementById('loginLink');
const registerLink = document.getElementById('registerLink');

// Kartı döndürme işlevi
toggleCardButton.addEventListener('click', () => {
  card.classList.toggle('flipped');
});

// Kayıt Linkine Tıklama İşlevi
registerLink.addEventListener('click', (e) => {
  e.preventDefault();
  // Kayıt işlemi
  const ad = document.getElementById('registerAd').value;
  const soyad = document.getElementById('registerSoyad').value;
  const email = document.getElementById('registerEmail').value;
  const sifre = document.getElementById('registerSifre').value;
  
  // Burada sunucuda kayıt işlemi yapabilirsiniz (örneğin, AJAX isteği ile).
  // Bu örnekte sadece basit bir mesajı gösteriyoruz.
  if (!checkUserExists(ad)) {
    showAlert('Kayıt başarılı!');
    // Kayıt formunu temizle
    resetForm(registerForm);
  } else {
    showAlert('Bu ada sahip bir hesap bulunmaktadır.');
  }
});

// Giriş Linkine Tıklama İşlevi
loginLink.addEventListener('click', (e) => {
  e.preventDefault();
  // Giriş işlemi
  const kullaniciAdi = loginForm.querySelector('input[type="text"]').value;
  const sifre = loginForm.querySelector('input[type="password"]').value;
  
  // Burada sunucuda giriş işlemi yapabilirsiniz (örneğin, AJAX isteği ile).
  // Bu örnekte sadece basit bir mesajı gösteriyoruz.
  if (!checkUserExists(kullaniciAdi)) {
    showAlert('Bu ada sahip hesap bulunamadı, Hesap oluşturmayı deneyebilirsiniz.');
  } else {
    // Başarılı giriş mesajı göster
    showAlert('Giriş başarılı!');
    // Kartı tekrar çevir
    card.classList.remove('flipped');
    // Giriş formunu temizle
    resetForm(loginForm);
  }
});

// Kullanıcı adının varlığını kontrol eden işlev (sunucu tarafında yapılmalıdır).
function checkUserExists(kullaniciAdi) {
  // Sunucuda böyle bir kontrol yapılmalıdır.
  // Bu örnekte her zaman false dönüyoruz.
  return false;
}

// Uyarı mesajı göstermek için işlev
function showAlert(message) {
  const alertBox = document.createElement('div');
  alertBox.classList.add('alert');
  alertBox.textContent = message;
  document.body.appendChild(alertBox);

  // 5 saniye sonra uyarıyı kapat
  setTimeout(() => {
    alertBox.style.display = 'none';
  }, 5000);
}

// Formu temizlemek için işlev
function resetForm(form) {
  form.reset();
}

const myButton = document.querySelector('#myButton');
myButton.addEventListener('click', myFunction);
