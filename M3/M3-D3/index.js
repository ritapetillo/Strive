
const btnFetch = document.querySelectorAll('.btnFetch')
const containerImgs = document.querySelector('.container-imgs')
const btnModalImages = document.querySelectorAll('button')
let btns = document.getElementsByClassName('btnImageModal')
let btnsHide = document.getElementsByClassName('btnHide')
let searchInput = document.getElementById('search-pic-input')
let searchBtn = document.getElementById('search-pic-btn')
let alert = document.getElementById('alert')
let carousel = document.querySelector('.carousel-inner')

//carousel search
let searchInput2 = document.getElementById('search-pic-input2')
let searchBtn2 = document.getElementById('search-pic-btn2')




//command to empty the container from previous images
const cleanContainer = () => {
    containerImgs.querySelectorAll('*').forEach(n => n.remove());

}
//render images in the container
const renderImgs = (imgs) => {
    cleanContainer()
    imgs.forEach(img => {
        const div = document.createElement('div')
        div.classList.add('col-md-4')
        div.innerHTML = ` <div class="card mb-4 shadow-sm">
                           <img class="card-img-top" src="${img.url}">
                            <div class="card-body">
                                <p class="card-text">
                                    This is a wider card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit
                                    longer.
                                </p>
                                <div class="d-flex justify-content-between align-items-center">
                                    <div class="btn-group">
                                        <button type="button" class="btn btn-sm btn-outline-secondary btnImageModal" data-toggle="modal" data-target="#imageModal" imageUrl="${img.url}">
                                            View
                                        </button>
                                        <button type="button" class="btn btn-sm btn-outline-secondary btnHide" imageUrl="${img.url}">
                                            Hide
                                        </button>
                                    </div>
                                    <small class="text-muted">${img.id}</small>
                                </div>
                            </div>
                        </div>`
        containerImgs.appendChild(div)





    })
    
}

//command to empty the carousel from previous images
const cleanCarousel = () => {
    carousel.querySelectorAll('*').forEach(n => n.remove());

}
const renderCarouselImgs = (imgs) => {
    cleanCarousel()
    imgs.forEach(img => {
        const div = document.createElement('div')
        div.classList.add('carousel-item')
        div.innerHTML = `<img class="d-block w-100" src="${img.url}" alt="First slide">
`
        carousel.appendChild(div)
        carousel.firstElementChild.classList.add('active')




    })
    
}

//open the modal with the image 
const openModal = (url) => {
    let modalContainer = document.querySelector('.modal-body')
    modalContainer.querySelectorAll('*').forEach(item=> item.remove())

    let img = document.createElement('img');
    img.classList.add('img-fluid')
    img.src = url
    modalContainer.appendChild(img)
}

//fetch a query
const fetchPics = (q) => {
    return fetch(`http://www.splashbase.co/api/v1/images/search?query=${q}`).then(res=>res.json())
}

//main comand which takes the promise from fetching the query
const fetchCommand = (item,how) => {
    fetchPics(item).then(res => {
        let str = "Total images count: "
        alert.innerHTML = str + res.images.length
        alert.style.display = 'block'
        setTimeout(() => { 
           alert.style.display ="none"
        }, 5000); 
        if (!how) {
            renderImgs(res.images)
            btns = [...btns]
            btns.forEach(btn => {
                btn.addEventListener('click', () => {
        
                    openModal(btn.getAttribute('imageUrl'))
                })
            })
                  
            btnsHide = [...btnsHide]
            btnsHide.forEach(btn => {
                btn.addEventListener('click', () => {
                    let imgToHideUrl = (btn.getAttribute('imageUrl'))
                    let imgToHide = document.querySelector(`img[src*="${imgToHideUrl}"]`)
                    imgToHide.classList.toggle('d-none');
            
                })
            })
        } else {
            renderCarouselImgs(res.images)
            console.log(how)
        }
    }).catch(err => {
        if (err) {
            err='There is an error'
        }
        alert.innerHTML = err
    alert.style.display = 'block'
        setTimeout(() => { 
           alert.style.display ="none"
        }, 5000); 
})
}

window.onload = () => {
    alert.style.display = "none"
//action to be fired when I click any of the buttons
    btnFetch.forEach(btn => {
        btn.addEventListener('click', () => {
            let item = btn.getAttribute('id')
            fetchCommand(item)    
          
        })
    })
//action to be fired when I search a query
 searchBtn.addEventListener('click', () => {
     let value = searchInput.value;
     console.log(value)
     fetchCommand(value)
 })
    
     searchBtn2.addEventListener('click', () => {
         let value = searchInput2.value;
         console.log(value)
     fetchCommand(value,'carousel')
   })
}

  
