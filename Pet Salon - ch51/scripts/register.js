console.log("Register")

let pets[];//empty array

//Object literal
let pet1= {
    name:"Cupcake",
    age:3,
    gender:"male",
    breed:"mixed",
    
}

// let pet2= {
//     name:"Marshmellow",
//     age:1,
//     gender:"female",
//     breed:"pug",
    
// }

// document.write(pet1.name);
// document.write(pet2.name);


//push pets into the array
pets.push(pet1,pet2);

function displayNames(){
    console.log("Total pets = " + pets.length);
    console.log(pet(0).name);
    console.log(pet(1).name)
}

displayNames();





// let student1= {
// name:"Jeff",
// age:25,
// isActive:true
// }

