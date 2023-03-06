






let signUp = document.getElementById('smt-btn');
let hidebox = document.getElementById('image-box')
let infoBox = document.getElementById('form-container')
signUp.addEventListener('click', e => {

    let confirm = `
    <div class="email-confirmation">
    <div class="logo-box confirmation"><img class="figure-img" src="https://img.icons8.com/fluency/256/paint-3d.png" alt=""></div>
     <p>Email confirmation sent<p>
     </p>Please confirm your email address</p>
     <p class="p mt-4"><a href="index.html">Sign in</a></p>
    </div>
    `

   

    infoBox.innerHTML = confirm;


   
   hidebox.style.display = 'none';
   infoBox.classlist.add('ease')
  
  

})

   bn   