// Начальник цеха пригласил людей на совещание. 
// Каждый, кто входил в кабинет, пожимал руки всем остальным. 
// Сколько человек участвовало в совещании, если всего получилось 120 рукопожатий?


function getPeople (handshake) {
    let people = 0;
    let currentHandshake = 0;
    while ( currentHandshake < handshake){
        currentHandshake += people;
        people ++;
    }
    return people;
}
console.log( getPeople(1) ); 
console.log( getPeople(3) ); 
console.log( getPeople(6) ); 
console.log( getPeople(10) ); 
console.log( getPeople(15) ); 
console.log( getPeople(120) ); 


