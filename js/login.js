let username =document.querySelector('#username')
let password =document.querySelector('#pass')
let btn =document.querySelector('#botn')
let getuser= localStorage.getItem('username')
let getpass= localStorage.getItem('password')

btn.addEventListener('click',function(e){
    e.preventDefault()
    if(username.value=='' || password.value==''){
        alert('please enter username and password')
    }else if(username.value ==getuser && password.value==getpass){
        setTimeout(()=>{window.location='index.html'},1500)
    }
})