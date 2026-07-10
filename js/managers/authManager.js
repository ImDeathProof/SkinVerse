const AUTH_TOKEN_KEY = "skinverse_auth_token";

export function getAuthToken() {
    return localStorage.getItem(AUTH_TOKEN_KEY);
}

export function saveAuthToken(token) {
    localStorage.setItem(AUTH_TOKEN_KEY, token);
}

export function clearAuthToken() {
    localStorage.removeItem(AUTH_TOKEN_KEY);
}

export function isAuthenticated() {
    return !!getAuthToken();
}

export function login(username, password) {
    if (username === "admin" && password === "1234") {
        saveAuthToken("fake-jwt-token");
        return true;
    }

    return false;
}