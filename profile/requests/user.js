let people = document.getElementById('people'); 

async function getPeople() {
    await fetch('https://randomuser.me/api/')
    .then(response => response.json())
    .then (data => showPeople(data.results[0]));
    
}

function showPeople(person){
    people.innerHTML += '<h1>'+person.name.first+'<h1>';


}