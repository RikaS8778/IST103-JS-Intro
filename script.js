//class10 activity
//alert("Hello World");

//activity2
const macho = "Super ";
const lucky_num = 777;
const def_status = true;
const fav_num = 8;

if(def_status === true){
    console.log(macho + lucky_num + "!")
};

for(let i = 0; i <=8; i++) {
    if (i=fav_num)
    console.log(fav_num + " is my favorit number!");
}

//activity3
let todoList = [
    "have dinner",
    "transfer money from jpBank", 
    "search MSP payment", 
    "ask a question to my friend", 
    "be opendminded"
];

let myProfile = {
    fName: "Rika",
    lName: "Sonohara",
    hasChild: false,
    age: 36
};

if(!myProfile.hasChild){
    console.log("Do you think that it's too late to have child if you are over "+ myProfile.age + " years old ?")
} else if (myProfile.fName === "Rika") {
    console.log("I'm " + myProfile.fName + myProfile.lName + ".");
} else if (myProfile.hasChild){
    console.log("What is your child's name?");
}

console.log("Need to " + todoList[4] + " for making friends!");

   






