var username =document.querySelector('#username')
var email =document.querySelector('#email')
var password =document.querySelector('#password')
var btn =document.querySelector('#btn')

btn.addEventListener('click',function(e){
    e.preventDefault();
    if(email.value==='' || username.value==='' || password.value===''){
        alert('please complete the form')
    }else{
        localStorage.setItem('username',username.value)
        localStorage.setItem('email',email.value)
        localStorage.setItem('password',password.value)
    }
    setTimeout(()=>{window.location='login.html'},1500)

})