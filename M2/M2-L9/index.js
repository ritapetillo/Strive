const blink = [
    {
    name:"Dumpweed",
    lenght:"2:23",
    link:"https://open.spotify.com/embed/track/5SlKhaPcdIfSjpoM2QtM4C?si=82emHh6DRNy48tzomKKIOA"
    },
      {
    name:	"Don't Leave Me",
    lenght:"2:23",
    link:"https://open.spotify.com/embed/track/1IAeSajljaXAkLZKXBZnE8?si=dZAWOV5PQwqTdBFk4wZNWg"
    },
       {
    name:		"Aliens Exist",
    lenght:"3:13",
    link:"https://open.spotify.com/embed/track/3nqm3DdVskqbHhmb8S8hMd?si=BgNP7zOKRoG307jH8-djYQ"
    },
        {
    name:		"Going Away to College",
    lenght:"2:59",
    link:"https://open.spotify.com/embed/track/4TofVhKSYwFXRtbYo5M3h4?si=NcbWMSMqTQKSPqDCJnnz9g"
    },
         {
    name:		"What's My Age Again?",
    lenght:"2:28",
    link:"https://open.spotify.com/embed/track/4LJhJ6DQS7NwE7UKtvcM52?si=iqBFLykvTk-9Z10A5yk8Bw"
    },
]
let currentPlay = ""
let blinkTable = document.getElementById('blink-table')
let addBlinkBtn = document.getElementById('add-blink-btn')


let addTrack = (album) => {
    let song = document.querySelector('.track-name').value
        let dur = document.querySelector('.track-dur').value

    if (album === 'blink') {
        blink.push({
            name: song,
            lenght: dur

        })
        console.log(blink)
        createBlinkTrack()
    }

    document.querySelector('.track-dur').value = "";
    document.querySelector('.track-name').value =""


    
}
const clearWindow = () => {
    while (blinkTable.firstChild) {
        blinkTable.removeChild(blinkTable.firstChild)
    }
}

const createBlinkTrack = () => {
    let buttons = document.querySelectorAll('.btn-delete')
    clearWindow()



    blink.forEach((song, i) => {
        const tr = document.createElement('tr')
            let ciao = () => {
                console.log('ciao')
            }
            

         tr.innerHTML =`<th scope="row">${i+1}</th>
                                <td>${song.name}</td>
                                <td>${song.lenght}</td>
                                <td><button class="btn btn-alert btn-delete">Delete</button>
                                </td>
                            </tr >`
        
        tr.addEventListener('click', () => {
            currentPlay = song.link; 
            console.log(currentPlay)
        
        
            play()
            
        })
        
    let buttons = document.querySelectorAll('.btn-delete')
    //     buttons[i].addEventListener('click', () => {
    //     console.log(blinkTable)
    // })

       
       

        blinkTable.appendChild(tr)

         
    })

    ////

    // for (let i = 0; i < buttons.length; i++){
    //     buttons[i].addEventListener('click',()=>{console.log(i)})
    // }    
    
}

const play = () => {
    const musicPlayer = document.getElementById('music-player')
    musicPlayer.src = currentPlay;
}

window.addEventListener('DOMContentLoaded', () => {
    createBlinkTrack()
    addBlinkBtn.addEventListener('click', () => { addTrack('blink') })
    let deleteBtns = document.querySelectorAll('.btn-delete')
    
});