//fetchi i dati
const fetchBooks = () => {
    return fetch(`https://striveschool.herokuapp.com/books`).then(res => res.json())
}
fetchBooks().then(res=>console.log(res))

//rederizzi