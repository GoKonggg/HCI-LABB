function handleLogin(e) {
    e.preventDefault();
  
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
  
    if (email && password) {
      // Simulasi sukses login
      localStorage.setItem("userToken", "basic");
      alert("Login successful!");
      window.location.href = "account.html";
    } else {
      alert("Please enter valid credentials.");
    }
  }
  