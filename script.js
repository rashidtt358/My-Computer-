// ആപ്പുകൾ തുറക്കാൻ
function openApp(appId) {
    document.getElementById(appId).classList.remove("hidden");
}

// ആപ്പുകൾ അടയ്ക്കാൻ
function closeApp(appId) {
    document.getElementById(appId).classList.add("hidden");
}

// സ്റ്റാർട്ട് മെനു തുറക്കാൻ/അടയ്ക്കാൻ
function toggleStartMenu() {
    document.getElementById("start-menu").classList.toggle("hidden");
}

// ക്ലോക്ക് പ്രവർത്തിപ്പിക്കാൻ
function updateClock() {
    let now = new Date();
    document.getElementById("clock").innerText = now.toLocaleTimeString();
}
setInterval(updateClock, 1000);
updateClock();
