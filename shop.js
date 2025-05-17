document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const productCards  = document.querySelectorAll('.product-card');
  
    filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
  
        const filter = btn.dataset.filter;
  
        productCards.forEach(card => {
          card.style.display =
            filter === 'all' || card.dataset.category === filter ? 'flex' : 'none';
        });
      });
    });
  });
  
  document.addEventListener("DOMContentLoaded", () => {
    const nav = document.getElementById('navRight');
    const isLoggedIn = !!localStorage.getItem('userToken');
  
    if (nav) {
      let searchForm = `
        <form class="search-form" onsubmit="handleSearch(event)">
          <input type="text" id="searchQuery" class="search-input" placeholder="Search..." />
          <button type="submit" style="display:none;"></button>
        </form>
      `;
  
      if (isLoggedIn) {
        nav.innerHTML = searchForm + `
          <a href="account.html" class="icon-link"><i class="fa-regular fa-user"></i></a>
          <a href="wishlist.html" class="icon-link"><i class="fa-regular fa-heart"></i></a>
          <a href="cart.html" class="icon-link"><i class="fa-solid fa-cart-shopping"></i></a>
          <button onclick="logoutAccount()" class="logout-btn">Log Out</button>
        `;
      } else {
        nav.innerHTML = searchForm + `
          <a href="signup.html" class="icon-link">Sign Up</a>
          <a href="login.html" class="icon-link">Log In</a>
        `;
      }
    }
  });
  
  function logoutAccount() {
    localStorage.removeItem("userToken");
    alert("Logged out.");
    window.location.reload();
  }