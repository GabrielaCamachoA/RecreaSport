import { validateCredCreate, login,hashPassword } from "../../js/auth";
export default function loginScript() {
      document.getElementById('login-form').addEventListener('submit', async function(event) {
        event.preventDefault();
        
        const username = document.getElementById('login-username').value;
        const password = document.getElementById('login-password').value;
        const rememberMe = document.getElementById('remember-me').checked;

        try {
          const response = await fetch('http://localhost:3000/api/auth/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
          });

          if (!response.ok) {
            throw new Error('Login failed');
          }

          const data = await response.json();
          const token = data.token;

          if (rememberMe) {
            localStorage.setItem('authToken', token);
          } else {
            sessionStorage.setItem('authToken', token);
          }

          alert('Login successful!');
          navigate('dashboard'); // Redirect to dashboard or another page
        } catch (error) {
          console.error('Error during login:', error);
          alert('Login failed. Please check your credentials and try again.');
        }
      });

}
/*
 function loginWithGoogle() {
        // Implement Google OAuth login flow here
        alert('Google login is not implemented yet.');
      }

      function navigate(page) {
        // Implement navigation logic here
        alert('Navigation to ' + page + ' is not implemented yet.');
      } */