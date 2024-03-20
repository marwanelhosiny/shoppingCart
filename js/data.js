let allproducts=[
    {
        id:'1',
        title:'Headphones',
        size:'large',
        imageurl:'imgs/headphones.jpeg'
    },
    {
        id:'2',
        title:'laptop',
        size:'large',
        imageurl:'imgs/laptop.jpeg'
    },
    {
        id:'3',
        title:'iphone14',
        size:'large',
        imageurl:'imgs/iphone.jpeg'
    },
    {
        id:'4',
        title:'Glasses',
        size:'large',
        imageurl:'imgs/ndara.jpeg'
    }
]

localStorage.setItem('products',JSON.stringify(allproducts))