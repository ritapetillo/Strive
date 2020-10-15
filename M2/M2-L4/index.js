let partecipants = [];
let teams = []
const addPartInput = document.getElementById('partecipant_name');
const addPartBtn = document.getElementById('btn-add-memeber');
const addTeamInput = document.getElementById('team_name');
const addTeamBtn = document.getElementById('btn-add-team');
let partecipantList = document.getElementById('participant__list');
let teamList = document.getElementById('team__list');
let teamMemberList = document.getElementById('team__member_list');









class Team{
    constructor(name) {
        this.name = name;
        this.color = 'red';
        this.members = [];
    }



    addMember = (member) => {
        this.members.push(member);  
        partecipants.splice(partecipants.indexOf(member), 1)
        console.log(partecipants)
    }

    removeMember = (member) => {
        this.memebers = this.memebers.filter(member => member !== member)
        partecipants.push(member)
    }
}


const removeTeam = (team) => {
    teams.splice(teams.indexOf(team), 1)
}

const generateRandomMember = () => {
    let numParticipants = partecipants.length;
    let randomNumber = Math.floor(Math.random() * numParticipants);
  partecipants[randomNumber]
}


const addMember = (nameTeam) => {
    let teamSelected = teams.find(t => t.name === nameTeam);
    teamSelected.addMember(member)
    console.log(teams)
}

const removeMember = (name, member) => {
    let teamSelected = teams.find(t => t.name === name);
    teamSelected.removeMember(member)
    
}


////////////////////////////////
//with this function I define a method to add a partecipant when clicking on add partecipant button
const addPartecipant = () => {
    addPartBtn.addEventListener('click', () => {
        //new partecipant value
        let newPartecipant = addPartInput.value
        // I push the new partcipant name inside the array partecipants
        partecipants.push(newPartecipant)
        addPartInput.value = ""
        console.log(partecipants)
        //I render the partecipant inside the list
        renderParticipant(newPartecipant)

    })
}

//with this fucntion I define a method to render all participants 
const renderParticipant = (partecipant) => {
   
        let li = document.createElement('li')
        li.innerHTML =  `<li class="list-group-item">${partecipant}</li>`
        partecipantList.appendChild(li)
        
  
}

//with this fucntion I define a method to add a team when clicking on add team button 
const addTeam = () => {
    addTeamBtn.addEventListener('click', () => {
        let team = new Team(addTeamInput.value)
        teams.push(team)
        addTeamInput.value =""
        console.log(team)
        renderTeam(team)
        console.log(teams)
        
    })
}


//with this fucntion I define a method to render all teams 
const renderTeam = (team) => {
   
    console.log(team)
    let li = document.createElement('li')
    li.innerHTML = `<li class="list-group-item teams${team.name}">${team.name} <span class="badge badge-primary badge-pill" id=${team.name}>Add</span></li>`
    teamList.appendChild(li)
    document.getElementById(team.name).addEventListener('click', () => {
        let numParticipants = partecipants.length - 1;
        let randomNumber = Math.floor(Math.random() * numParticipants);
        team.addMember(partecipants[randomNumber])
        console.log(team.members)
        console.log(partecipants)
        console.log(teams)
        renderNewListPartecipant()
    })

    document.querySelector(`.teams${team.name}`).addEventListener('click', () => {
while (teamMemberList.firstChild) {
       teamMemberList.removeChild(teamMemberList.firstChild)
    }


        team.members.forEach(member => {
            console.log(member)

            let li = document.createElement('li')
            li.innerHTML = `<li class="list-group-item">${member}</li>`
            teamMemberList.appendChild(li)
        
  
        })
      
  
    })
}

const renderNewListPartecipant = () => {
    while (partecipantList.firstChild) {
        partecipantList.removeChild(partecipantList.firstChild)
    }
    partecipants.forEach(partecipant => {
        renderParticipant(partecipant)
    })
}


//When I click add memeber, I push the member name into the partecipants array
window.onload = () => {
    
    addPartecipant()
    addTeam()


    


}