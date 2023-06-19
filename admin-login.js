document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();
  
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
    // Check if the provided username and password are correct (dummy values for demonstration)
    var adminUsername = 'admin';
    var adminPassword = 'moinkhan123@';
  
    if (username === adminUsername && password === adminPassword) {
      // Redirect to the admin page
      window.location.href = 'admin_page.html';
    } else {
      // Show error message
      document.getElementById('errorMessage').textContent = 'Invalid username or password.';
    }
  });
  