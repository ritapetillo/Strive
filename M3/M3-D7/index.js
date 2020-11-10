let filterBy = ""
const userTable = document.getElementById('user-table')
const sortIcon = document.getElementById('sort-name')
let sort = false

//I fetch the users sending an async/await request
const fetchUsers = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users') 
        let data = await response.json()
    return data
}



//With this function I spread the address
const spreadAddress = (address) => {
    let keys = Object.keys(address).filter(key => key != 'geo')
    let addressUser = keys.reduce((acc, key) => acc.concat(address[key] + ", "), "")
    return addressUser.substring(0, addressUser.length-2)
}

//I render the table with all the users by creating and then appending to the table as many 'tr' with user details as the users.
const renderUsers = (data) => {
    data.map(user => {
        const tr = document.createElement('tr');

        tr.innerHTML = `
        <th scope="row">${user.id}</th>
        <td>${user.name}</td>
        <td>${user.username}</td>
        <td>${user.email}</td>
        <td>${user.phone}</td>
        <td>${spreadAddress(user.address)}</td>
        <td>${user.company.name}</td>
        <td>${user.website}</td>
        <td><a href="user.html?id=${user.id}"><i class="fas fa-edit"></i></a></td>
        `
        userTable.append(tr)
    })
}

//with this function I cler the table so that it's ready to display other data
const clearTable = () => {
 return userTable.querySelectorAll('*').forEach(node=>node.remove())
}


//FILTER BY USERNAME/NAME/EMAIL
const filterByFunc = (e) => {
let dropdownMenuBtn = document.querySelector('#dropdownMenuButton')
filterBy = e.target.name
dropdownMenuBtn.innerHTML = e.target.text
}
const filterUsers = (users) => {
    let dropdownItem = document.querySelectorAll('.dropdown-item')
    // let searchBtn = document.getElementById('search-btn')
    let searchInput = document.getElementById('search-input')

    dropdownItem.forEach(item=>item.addEventListener('click', (e) => {
        filterByFunc(e)
        if(filterBy != "")
        {
            searchInput.classList.remove('d-none')
            searchInput.placeholder = `Filter by ${e.target.text}`
        } else {
            searchInput.classList.add('d-none')
        }

    }))

    searchInput.addEventListener('keyup', (e) => {
        let filteredUsers =""
            filteredUsers = users.filter(user => user[filterBy].toLowerCase().includes(e.target.value.toLowerCase()))
           //clear table
            clearTable()
            //re-render table
            renderUsers(filteredUsers)    
  })
}

//SORT THE TABLE BY NAME (ASC OR DESC)
const sortUsers = (users) => {
    sortIcon.style.cursor = 'pointer'
    sortIcon.addEventListener('click', () => {
        let sortedUsers = []
        switch (sort) {
            case false:
          sortedUsers = users.sort((user1, user2) => user1.name.localeCompare(user2.name))
          sort = "cres"
          break
            case 'cres':
           sortedUsers = users.sort((user1, user2) => user2.name.localeCompare(user1.name))
                sort = 'decr'
                break
            case 'decr':
                sortedUsers = users.sort((user1, user2) => user1.id > user2.id)
                sort = false
                break

        }
        
        //clear table
        clearTable()
        //render sorted users
        renderUsers(sortedUsers)


    })
}

//GET ALL USERS GEOLOCATIONS
const getGeos = (users,mymap) => {
    let geoLocation = users.map(user => user.address.geo)
    console.log(geoLocation)
    geoLocation.forEach((geo,i) => {

        L.marker([geo.lat, geo.lng]).addTo(mymap)
    })
   
}

//GET ALL USER NAMES
const getAllNames = (users) => {
    let names = users.reduce((acc, user) => acc.concat(`${user.name}, `), "")
    names = names.substring(0,names.length-2)
    // alert(`${names} added to the database`)
}



/////////USER PAGE
const renderUser = (user) => {
    let userContainer = document.querySelector('.user__details')
   userContainer.innerHTML = `
    <div><h6>Full Name</h6> ${user.name} </div>
            <div><h6>Username</h6> ${user.username}</div>
            <div><i class="fas fa-envelope"></i>${user.email} <i class="fas fa-phone ml-4"></i>${user.phone}</div>
            <div><h6>Address</h6>${spreadAddress(user.address)}</div>
             <div class="d-flex"><h6>Company</h6>${user.company.name} <i class="fas fa-link ml-4"></i>${user.website} </div>`
     
    
}



//ON WINDOW LOAD
window.onload = async () => {
    let users = ''

if(window.location.pathname === '/')
{
    try {
            users = await fetchUsers()
            localStorage.setItem('users',JSON.stringify(users))
            renderUsers(users)
            filterUsers(users)
            sortUsers(users)
        getAllNames(users)
       

let mapOptions = {
            center: [17.385044, 78.486671],
            zoom: 1
         }
         
         // Creating a map object
         let map = new L.map('mapid', mapOptions);
         
         // Creating a Layer object
         let layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
         
         // Adding layer to the map
         map.addLayer(layer);
        getGeos(users,map)

            

        } catch (error) {
            console.log(error)
        }
    }
    
    if (window.location.pathname === '/user.html') {
        let searchString = new URLSearchParams(window.location.search);
        let idUser = searchString.get('id')
        users = JSON.parse(localStorage.getItem('users'))
        let user = users.find(user => user.id == idUser)
        renderUser(user)
     

    }
    
   
}