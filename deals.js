document.addEventListener('DOMContentLoaded', () => {
  const section = document.getElementById('dealSection');
  const buttons = document.querySelectorAll('.filter-btn');
  const cards   = document.querySelectorAll('.deal-card');
  const STORAGE_TOKEN = 'userToken';

  let signedIn = !!localStorage.getItem(STORAGE_TOKEN);


  section.classList.add('show');

  if (signedIn) {
    section.classList.remove('locked');
    const overlay = section.querySelector('.overlay');
    if (overlay) overlay.style.display = 'none';
  }

  function filterDeals(category) {
    cards.forEach(card => {
      const match = category === 'all' || card.dataset.category === category;
      card.style.display = match ? 'grid' : 'none';
    });
  }

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;

      if (!signedIn && filter === 'all') return;

      if (!signedIn && filter !== 'all') {
        localStorage.setItem(STORAGE_TOKEN, 'basic');
        signedIn = true;
        section.classList.remove('locked');
        const overlay = section.querySelector('.overlay');
        if (overlay) overlay.style.display = 'none';
      }

      filterDeals(filter);
    });
  });

  if (signedIn) {
    filterDeals('all');
  }
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
