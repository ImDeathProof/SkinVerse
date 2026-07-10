// Codigo para la gestion de la autenticacion

import { clearAuthToken, login } from "../managers/authManager.js";
const loginForm = document.querySelector('.auth-form');

function initAuthPage() {
    console.log('Auth page initialized');
    setupAuthEvents();
}

initAuthPage();

function setupAuthEvents() {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const isLoggedIn = login(username, password);
        if (isLoggedIn) {
            alert('Login successful!');
            window.location.href = '/index.html';
        }
        else {
            alert('Invalid username or password. Please try again.');
        }
    });
}