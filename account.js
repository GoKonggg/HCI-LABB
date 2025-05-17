function handleSearch(e) {
    e.preventDefault();
    const query = document.getElementById("searchQuery").value.trim();
    if (query) alert("Searching for: " + query);
  }

function logoutAccount() {
    localStorage.removeItem("userToken");
    alert("You have been logged out.");
    window.location.href = "index2.html";
  }

function switchTab(tabId) {
const allTabs = document.querySelectorAll('.tab-content');
allTabs.forEach(tab => tab.classList.remove('active'));

const targetTab = document.getElementById(tabId);
if (targetTab) targetTab.classList.add('active');
}

function logoutAccount() {
    localStorage.removeItem("userToken");
    alert("You have been logged out.");
    window.location.href = "index2.html"; 
  }