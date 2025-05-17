function handleSearch(e) {
    e.preventDefault();
    const query = document.getElementById("searchQuery").value.trim();
    if (query) alert("Searching for: " + query);
  }