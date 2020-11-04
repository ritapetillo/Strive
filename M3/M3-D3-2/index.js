//varibles

let containerImages = document.querySelector('.container-images')
let btn1 = document.getElementById('btn-image-1')


//functions
const fetchImage1 = () => {
      fetch('http://www.splashbase.co/api/v1/images/search?query=colors').then(res => res.json()).then(data => {
        let images = data.images;
        
        //Step 2 clean container
          containerImages.querySelectorAll('*').forEach(element=>element.remove())


        //Step 3 render data

        //Step 3.1 for every image, create a card
        images.forEach(image => {
            console.log(image)
            //create a card
            let div = document.createElement('div');
            div.classList.add('col-md-4');
            div.innerHTML = ` 
                        <div class="card mb-4 shadow-sm">
                            <img class="card-img-top" src="${image.url}">
                            <div class="card-body">
                                <p class="card-text">
                                    This is a wider card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit
                                    longer.
                                </p>
                                <div class="d-flex justify-content-between align-items-center">
                                    <div class="btn-group">
                                        <button type="button" class="btn btn-sm btn-outline-secondary">
                                            View
                                        </button>
                                        <button type="button" class="btn btn-sm btn-outline-secondary">
                                            Edit
                                        </button>
                                    </div>
                                    <small class="text-muted">9 mins</small>
                                </div>
                            </div>
                        </div>`
            
            //append the card to the container
       containerImages.appendChild(div)
                    
            
        });
       
    
    })
}



//on window load
window.onload = () => {

    btn1.addEventListener('click', fetchImage1)
  
}