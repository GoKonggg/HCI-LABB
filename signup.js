document.addEventListener('DOMContentLoaded',()=>{
    const form=document.getElementById('signupForm');
    form.addEventListener('submit',e=>{
      e.preventDefault();
      const name=document.getElementById('name').value.trim();
      const email=document.getElementById('email').value.trim();
      const pw=document.getElementById('password').value;
  
      if(!name||!email||pw.length<8){
        alert('Fill all fields – password ≥8 chars');
        return;
      }
      if(email.indexOf('@')<1||email.lastIndexOf('.')<email.indexOf('@')+2){
        alert('Enter a valid email');
        return;
      }
      localStorage.setItem('userToken','basic');
      alert('Account created! Enjoy your deals.');
      window.location.href='deals.html';
    });
  });
  