
let books = []
let shoppingLisy = []
let cart = []
let cartContainer = document.getElementById('cart-container');
let emptyBtn = document.getElementById('empty-cart')


const startSearch = () => {
    let searchBtn = document.querySelector('.fa-search');
    let searchValue = document.querySelector('.input-search')
    searchBtn.addEventListener('click', () => {
        window.location = `search.html?=${searchValue.value}`
    })
}

const fetchBooks = () => {
   return fetch(`https://striveschool.herokuapp.com/books`).then(res=>res.json())
}

const rederBestsellers = (books) => {
    let bestsellers = books.splice(0, 10);
    let containerBestSellers = document.getElementById('bestsellers-container')
    bestsellers.forEach(book => {
        let div = document.createElement('div')
        let classes = ["col-4",'col-md-3', "col-lg-2"]
        div.classList.add(...classes);
        div.innerHTML =`<div class="card">
        <div class="cardImg">
                    <img class="card-img-top" src="${book.img}" alt="Card image cap"></div>
                    <div class="card-body">
                        <h6 class="card-title ellipsis">${book.title}</h6>
                        <div class="card-details d-flex justify-content-between align-items-start">
                        <h5 class="">$${book.price}</h5>
                        <i class="fas fa-cart-plus" asin="${book.asin}"></i></div>
                    </div>`
            containerBestSellers.append(div)

    }
    )
    
}

const rederUnderTen = (books) => {
    let under5 = books.filter(book=>book.price <=5);
    let containerUnder5 = document.getElementById('under5-container')
    under5.forEach(book => {
        let div = document.createElement('div')
        let classes = ["col-4",'col-md-3', "col-lg-2"]
        div.classList.add(...classes);
        div.innerHTML =`<div class="card">
        <div class="cardImg">
                    <img class="card-img-top" src="${book.img}" alt="Card image cap"></div>
                    <div class="card-body">
                        <h6 class="card-title ellipsis">${book.title}</h6>
                        <div class="card-details d-flex justify-content-between align-items-start">
                        <h5 class="">$${book.price}</h5>
                        <i class="fas fa-cart-plus" asin="${book.asin}"></i></div>
                    </div>`
            containerUnder5.append(div)

    }

    )

    
}

const renderCart = (cart) => {
    let itemsInCartHeading = document.querySelector('.items-cart')
    itemsInCartHeading.innerHTML = `Items in your cart: ${cart.length}`
    cart.forEach((item,i)=> {
        let div = document.createElement('div');
        div.className = 'row mt-3';
        div.innerHTML = ` 
                                <div class="col-1">${i + 1}</div>

                <div class="col-2"><img class="img-fluid" src="${item[0].img}"></div>
                <div class="col-7"><h6 class="">${item[0].title}</h6><h6 class="">${item[0].category}</h6></div>
                <div class="col-2 d-flex flex-column align-items-end"><h6 class="">$ ${item[0].price} </h6><i class="fas fa-trash-alt" toDelete="${i}"></i></div>
            `
        cartContainer.append(div)
    })
    
    
}
const addToCart = () => {
     const cartBtn = document.querySelectorAll('main i')
    cartBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            
            let asin = btn.getAttribute('asin')
            cart.push(asin)
            localStorage.setItem('savedCart', JSON.stringify(cart))
            console.log(JSON.parse(localStorage.getItem('savedCart')))
        })
           
        })
}

const deleteFromCart = () => {
    const cartTrash = document.querySelectorAll('.fa-trash-alt')
    cartTrash.forEach((btn,i) => {
        btn.addEventListener('click', () => {
            cart.splice(i, 1)
            localStorage.setItem('savedCart', JSON.stringify(cart))
            window.location = "cart.html"

           
       })
    })
    
    emptyBtn.addEventListener('click', () => {
        localStorage.clear();
        cart = []
        window.location = 'cart.html'
    })
    
}
const cleanCart = () => {
    cartContainer.querySelectorAll('*').forEach(n => n.remove);
}
window.onload = () => {
    startSearch()
    if (window.location.href.includes('index')) {
        fetchBooks().then(data => {
            books = data
            rederBestsellers(books)
            rederUnderTen(books)
       
        }).then(res => {
            addToCart(books)
        })
    
    }

    if (window.location.href.includes('cart')) {
        fetchBooks().then(data => {
            booksCart = []
            cart = JSON.parse(localStorage.getItem('savedCart'))
            cart.forEach(item => {
                let book = data.filter(book => book.asin == item)
                booksCart.push(book)
            })
            renderCart(booksCart)
            deleteFromCart()
       
        })
    
    }
    if (window.location.href.includes('search')) {
        fetchBooks().then(data => {
            let query = window.location.href.substring(1)
            console.log(query)
            books = data;

    
        })




    }
}   
  
