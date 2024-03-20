let user =document.querySelector('#user')
let links =document.querySelector('#links')
let dom =document.querySelector('#dom')
let logout =document.querySelector('#logout')
let shop=document.querySelector('#shop')
let cartsproduct=document.querySelector('.carts-products div')
let badge=document.querySelector('.badge')
let cart=document.querySelector('.cart')
let carts=document.querySelector('.carts-products')


if(localStorage.getItem('username')){
    links.remove()
    dom.style.display='flex';
    user.innerHTML=localStorage.getItem('username')
}

logout.addEventListener('click',function(){
    localStorage.clear()
})


let productUi;
(productUi = function (products=[]){
    let productsUi = products.map((item)=>{
        return`<div class="product-item">
        <img src="${item.imageurl}" alt="Glasses">
        <div class="product-item-desc">
            <h2>${item.title}</h2>
            <p>special product ${item.size}</p>
        </div>
        <div class="product-item-action">
            <button class="addtocart" onclick="addedtocart(${item.id})">AddToCart</button>
            <i class="fa-regular fa-bookmark icon"></i>
        </div>
    </div>`
    
})
shop.innerHTML=productsUi.join("")
})(JSON.parse(localStorage.getItem('products')));


let AddedItems=localStorage.getItem('shoppingcartitems') ? JSON.parse(localStorage.getItem('shoppingcartitems')) : []
function addedtocart(id){
    console.log (id)
    var ananas = allproducts.find((item) => item.id == id)
    cartsproduct.innerHTML += `<p>${ananas.title}</p>`
    badge.style.display="block";
    badge.innerHTML++
    AddedItems =[...AddedItems ,ananas];
    localStorage.setItem("shoppingcartitems" ,JSON.stringify(AddedItems))
    
}

function openmenu(){
    if(carts.style.display=="none"){
        carts.style.display="block"
        badge.style.display='none'
    }else{carts.style.display="none"
        
}
}

cart.addEventListener('click',openmenu)


function checklogedin(){
    if(localStorage.getItem('username')){
        console.log('item')
    }else window.location='login.html'
}


/* search*/

let input = document.getElementById('srch')



input.addEventListener('keyup',function(e){
    search(e.target.value ,JSON.parse(localStorage.getItem('products')))
    if(e.target.value.trim()==='')
    productUi(JSON.parse(localStorage.getItem('products')))
    
})

function search(title ,myarray){
    let arr = myarray.filter(item => item.title.toLowerCase().indexOf(title.toLowerCase())!==-1);
    productUi(arr);
}

