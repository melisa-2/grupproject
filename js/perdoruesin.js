
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    var emri = document.querySelector('input[name="emri"]').value;
    var mbiemri = document.querySelector('input[name="mbiemri"]').value;
    var adresa = document.querySelector('input[name="adresa"]').value;
    var email = document.querySelector('input[name="email"]').value;
    var tel = document.querySelector('input[name="tel"]').value;
    var emriPerdoruesit = document.querySelector('input[name="emriPerdoruesit"]').value;
    var fjalekalimi = document.querySelector('input[name="fjalekalimi"]').value;
    var errorMessage = document.getElementById('errorMessage');

  
    if (!emri || !mbiemri || !adresa || !email || !tel || !emriPerdoruesit || !fjalekalimi) {
        errorMessage.textContent = 'Please fill in all fields.';
        errorMessage.style.display = 'block';
    } else {
        errorMessage.style.display = 'none';
       
        alert('Registration successful!');
      
         document.getElementById('registrationForm').submit();
    }
});
