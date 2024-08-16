const login=document.querySelector(".login");
const signup=document.querySelector(".signup");
const loginbtn=document.querySelector(".demo-btn-log");
const signbtn=document.querySelector(".demo-btn-sign");
const over=document.getElementById('log');
const sign=document.querySelector('.sig');
const passworderr=document.getElementById('pass');
 

loginbtn.addEventListener('click',()=>{
    
    login.classList.add('active');
    signup.classList.remove('active');
    document.querySelector('.demo-1').style.display="none";
    document.querySelector('.demo-2').style.display="flex";
 
  
});

signbtn.addEventListener('click',()=>{
    signup.classList.add('active');
    document.querySelector('.demo-2').style.display="none";
    document.querySelector('.demo-1').style.display="flex";
    login.classList.remove('active');

});
over.addEventListener('click',()=>{
    login.classList.remove('active');
    document.querySelector('.demo-1').style.display="flex";
  
   validmail();
   passerr();
    }
);
sign.addEventListener('click',()=>{
    signup.classList.remove('active'); 
    document.querySelector('.demo-2').style.display="flex";
    signerr();
    signpass();
    signpasserr();
   user();
}); 
const mail=document.getElementById('email');
mail.addEventListener('input',()=>{
validmail();

});
passworderr.addEventListener('input',()=>{
    passerr();
});
function validmail(){
    var emailerr=document.getElementById('email').value;
  
    var content=document.querySelector('.empty')
    if(emailerr.length === 0){
        content.innerHTML="Email required";
        document.getElementById('email').style.border="2px solid red";
        document.querySelector('.demo-1').style.display="none"; 
        login.classList.add('active');
     
        return false;
     }
   else if(emailerr.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.([a-zA-Z0-9-]+)*$/)){
       content.innerHTML="";
       document.getElementById('email').style.border="none";
       
   
       
       return true;
   
}
content.innerHTML="Invalid Email id";
    document.getElementById('email').style.border="2px solid red";
    document.querySelector('.demo-1').style.display="none"; 
       login.classList.add('active');
       
      return false;

   
}

function passerr(){
 
    const passwordlen=passworderr.value;
    var passemt=document.querySelector('.empty-pass');
      if(passwordlen.length==0){
        passemt.innerHTML="Password required";
        passworderr.style.border="2px solid red";
        document.querySelector('.demo-1').style.display="none"; 
        login.classList.add('active');
        return false;
      }  
      else if(passwordlen.match(/^[a-zA-z0-9!@#\^\&*_==-]{8,12}$/)){
        passemt.innerHTML="";
        passworderr.style.border="none";
        return true;
      }
      passemt.innerHTML="Enter 8 character";
      passworderr.style.border="2px solid red";
      document.querySelector('.demo-1').style.display="none"; 
      login.classList.add('active');
      return false;
}
function signerr(){
    const signmail=document.getElementById('signemail');
    const signcontent=document.getElementById('signerr');
    const signmaillen=signmail.value;
    if(signmaillen.length==0){
        signcontent.innerHTML="Email Requried";
        signmail.style.border="2px solid red";
        document.querySelector('.demo-2').style.display="none"; 
        signup.classList.add('active');
        return false;
    }
    else if(signmaillen.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.([a-zA-Z0-9-]+)*$/))
    {
        signcontent.innerHTML="";
        signmail.style.border="none"; 
        return true;
    }
    signcontent.innerHTML="Invalid Email Id";
    signmail.style.border="2px solid red";
    document.querySelector('.demo-2').style.display="none"; 
    signup.classList.add('active');
    return false;

}
function signpass(){
    const signpassword=document.getElementById('signpassword');
    const signpasslen=signpassword.value;
    const signcpasscontent=document.querySelector('.sign-pass');
    if(signpasslen.length==0){
        signcpasscontent.innerHTML="Password required";
        signpassword.style.border="2px solid red";
        document.querySelector('.demo-2').style.display="none"; 
        signup.classList.add('active');
        return false;
      }  
      else if(signpasslen.match(/^[a-zA-z0-9!@#\^\&*_==-]{8,12}$/)){
        signcpasscontent.innerHTML="";
        signpassword.style.border="none";
        return true;
      }
      signcpasscontent.innerHTML="Enter 8 or 12 character";
      signpassword.style.border="2px solid red";
      document.querySelector('.demo-2').style.display="none"; 
      signup.classList.add('active');
      return false;
    
}
function signpasserr(){
    const signpassword=document.getElementById('signconfrimpassword');
    const signpasslen=signpassword.value;
    const signcpasscontent=document.querySelector('.sign-conform');
    if(signpasslen.length==0){
        signcpasscontent.innerHTML="Conform Password required";
        signpassword.style.border="2px solid red";
        document.querySelector('.demo-2').style.display="none"; 
        signup.classList.add('active');
        return false;
      }  
      else if(signpasslen.match(/^[a-zA-z0-9!@#\^\&*_==-]{8,12}$/)){
        signcpasscontent.innerHTML="";
        signpassword.style.border="none";
        return true;
      }
      signcpasscontent.innerHTML="Enter 8 or 12 character";
      signpassword.style.border="2px solid red";
      document.querySelector('.demo-2').style.display="none"; 
      signup.classList.add('active');
      return false;
    
}
function user(){
  const username=document.getElementById('user');
  const userlen=username.value;
  const usercontent=document.getElementById('usererr');
  if(userlen.length==0){
    usercontent.innerHTML="User-name required";
        username.style.border="2px solid red";
        document.querySelector('.demo-2').style.display="none"; 
        signup.classList.add('active');
        return false; 
  }
  else if(userlen.match(/^[a-zA-Z\-]+$/)){
usercontent.innerHTML="";
    username.style.border="none";
    return true;
  }
  usercontent.innerHTML="Invalid User-name";
  username.style.border="2px solid red";
  document.querySelector('.demo-2').style.display="none"; 
  signup.classList.add('active');
  return false; 
}

