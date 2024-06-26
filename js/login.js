
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var errorMessage = document.getElementById('errorMessage');

    
    if (username === '' || password === '') {
        errorMessage.textContent = 'Please fill in both fields.';
        errorMessage.style.display = 'block';
    } else {
       
        if (username === 'melisa' && password === '12345') {
            alert('Login successful!');
            
        } else {
            errorMessage.textContent = 'Invalid username or password.';
            errorMessage.style.display = 'block';
        }
    }
});
