document.addEventListener('DOMContentLoaded', () => {
    const $ = (sel) => document.querySelector(sel);
  
    const form = $('#memberForm');
  
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      let ok = true;
  
      // reset helper
      const mark = (el, msgSel, cond, msg) => {
        const msgEl = $(msgSel);
        if (cond) {
          el.classList.remove('error');
          msgEl.classList.remove('show');
        } else {
          el.classList.add('error');
          msgEl.textContent = msg;
          msgEl.classList.add('show');
          ok = false;
        }
      };
      const firstName = $('#firstName');
mark(firstName, '#msg-fname', firstName.value.trim() !== '', 'Required');

const surname = $('#surname');
mark(surname, '#msg-lname', surname.value.trim() !== '', 'Required');

  
      const email = $('#email');
      const at = email.value.indexOf('@');
      const dot = email.value.lastIndexOf('.');
      const validEmail = at > 0 && dot > at + 1 && dot < email.value.length - 1;
      mark(email, '#msg-email', validEmail, 'Invalid email');
  
      // gender
      const genderPicked = [...document.querySelectorAll('input[name=\"gender\"]')].some(r => r.checked);
      mark($('#gender-anchor'), '#msg-gender', genderPicked, 'Select gender');
  
      // dob
      const dob = new Date($('#dob').value);
      const today = new Date();
      const age = today.getFullYear() - dob.getFullYear();
      const dobValid = $('#dob').value && dob <= today && age >= 10;
      mark($('#dob'), '#msg-dob', dobValid, 'Enter valid DOB (≥10 yrs)');
  
      // password
      const pw = $('#password').value;
      const pwCond = pw.length >= 8 &&
                     /[a-z]/.test(pw) &&
                     /[A-Z]/.test(pw) &&
                     /[0-9]/.test(pw);
      mark($('#password'), '#msg-pass', pwCond,
           '8+ chars, upper, lower & number');
  
      // terms
      const terms = $('#terms').checked;
      mark($('#terms'), '#msg-terms', terms, 'Required');
  
      if (ok) {
        alert('Welcome to Noisecore Membership!');
        form.reset();
        document.querySelectorAll('.form-msg').forEach(m => m.classList.remove('show'));
      }
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
  

  