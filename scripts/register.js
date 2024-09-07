console.log("Register")

// let pets[];//empty array

//Object literal
let pet1= {
    name:"Cupcake",
    age:3,
    gender:"female",
    service:"shampoo and trim",
    breed:"mixed",
    
}
let pet2= {
    name:"Marshmellow",
    age:1,
    gender:"female",
    service:"potty training",
    breed:"pug",
    
}

let pet3= {
    name:"Lebron",
    age: 2,
    gender:"male",
    service:"walking",
    breed:"Goat",
    
}
let pet4= {
    name:"Rocky",
    age:4,
    gender:"male",
    service:"Kennel service",
    breed:"dalmation",
    
}
let pet5= {
    name:"Kobe",
    age:8,
    gender:"male",
    service:"potty training",
    breed:"pit-bull",
    
}
// document.write(pet1.name);
// document.write(pet2.name);
// document.write(pet3.name);
// document.write(pet4.name);
// document.write(pet5.name);


//push pets into the array
//pets.push(pet1,pet2);

// function displayNames(){
//     console.log("Total pets = " + pets.length);
//     console.log(pet(0).name);
//     console.log(pet(1).name)
// }


function displayNames() {
    console.log("Total pets = " + pets.length);
    for(let i=0;i<pets.length;i++){
        document.getElementById("petsNames").innerHTML+="<p>" +pets[i].name + "</p>";
    }
}

displayNames();


// let student1= {
// name:"Jeff",
// age:25,
// isActive:true
// }


function displayAnimals(){
    let option=prompt("enter your animal as a Dog or Cat")
    
        if(option == "Dog"){
            let F=Number(prompt("Enter how many dogs"));
            document.getElementById("results").innerHTML="You have this many dogs";
            
        }else if(option == "Cat"){
            let C=Number(prompt("Enter how many cats"));
            document.getElementById("results").innerHTML="You have this many cats";
        }
    }

    displayAnimals();


    let names = ["Cupcake", "Marshmellow", "Lebron", "Rocky", "Kobe"];

let ages=[3,1,2,4,8];

for(let i=0;i<names.length;i++){
    document.getElementById("register").innerHTML+=`
    <div class="register">
        <p> Name; ${names[i]} </p>
        <p> Age: ${ages[i]} </p>
    </div>`
}

