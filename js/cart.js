let shop=document.querySelector('#shop')

if(localStorage.getItem('username')){
    links.remove()
    dom.style.display='flex';
    user.innerHTML=localStorage.getItem('username')
}

logout.addEventListener('click',function(){
    localStorage.clear()
})



function productUi(allproducts=[]){
    let products = JSON.parse(localStorage.getItem('shoppingcartitems')) || allproducts
    let productsUI = products.map((item)=>{
        return`<div class="product-item">
        <img src="${item.imageurl}" alt="Glasses">
        <div class="product-item-desc">
            <h2>${item.title}</h2>
            <p>special product ${item.size}</p>
        </div>
        <div class="product-item-action">
            <button class="addtocart" onclick="removefromcart(${item.id})">RemoveFromCart</button>
        </div>
    </div>`
    
})
shop.innerHTML=productsUI.join("");
}
productUi()

function removefromcart(id){
    shoppingcartitems = localStorage.getItem('shoppingcartitems')
    if (shoppingcartitems){
        console.log(id)
        let items = JSON.parse(shoppingcartitems);
        let filtered = items.filter( (item) => item.id != id );
        localStorage.setItem('shoppingcartitems',JSON.stringify(filtered));
        productUi(filtered)
    }
    
}

