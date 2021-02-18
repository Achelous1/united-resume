document.addEventListener("DOMContentLoaded", function() {
    initContextPopup();
});

function initContextPopup() {
    document.getElementById("editResumeLink").setAttribute("href", chrome.runtime.getURL("views/list.html"));
}
