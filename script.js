// ആപ്പ് തുറക്കാൻ
function openApp() {
    document.getElementById("app-window").classList.remove("hidden");
}

// ആപ്പ് അടയ്ക്കാൻ
function closeApp() {
    document.getElementById("app-window").classList.add("hidden");
}

// ക്ലോക്ക് പ്രവർത്തിപ്പിക്കാൻ
function updateClock() {
    let now = new Date();
    document.getElementById("clock").innerText = now.toLocaleTimeString();
}
setInterval(updateClock, 1000);
updateClock();
