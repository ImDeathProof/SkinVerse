const PAYMENTSUMMARY_KEY = "skinverse_summary";

export function getPaymentSummary() {
    return JSON.parse(localStorage.getItem(PAYMENTSUMMARY_KEY)) || { totalItems: 0, totalPrice: 0 };
}

export function savePaymentSummary(summary) {
    localStorage.setItem(PAYMENTSUMMARY_KEY, JSON.stringify(summary));
}

export function clearPaymentSummary() {
    localStorage.removeItem(PAYMENTSUMMARY_KEY);
}

export function updatePaymentSummary(totalItems, totalPrice) {
    const summary = { totalItems, totalPrice };
    savePaymentSummary(summary);
}