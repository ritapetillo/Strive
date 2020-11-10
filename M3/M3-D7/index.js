let filterBy = ""
const userTable = document.getElementById('user-table')
const sortIcon = document.getElementById('sort-name')
let sort = false

const fetchUsers = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users') 
        let data = await response.json()
    return data
}




const spreadAddress = (address) => {
    let keys = Object.keys(address).filter(key => key != 'geo')
    return keys.reduce((acc,key)=>acc.concat(address[key] + " "),"")
}
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

const clearTable = () => {
 return userTable.querySelectorAll('*').forEach(node=>node.remove())
}
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


})}

const getAllNames = (users) => {
    let names = users.reduce((acc, user) => acc.concat(`${user.name}, `), "")
    names = names.substring(0,names.length-2)
    // alert(`${names} added to the database`)
}

window.onload = async () => {
    let users = ''
    
    try {
            users = await fetchUsers()
            renderUsers(users)
            filterUsers(users)
            sortUsers(users)
            getAllNames(users)

        } catch (error) {
            console.log(error)
        }
    
    
    
    
    console.log(users)
}