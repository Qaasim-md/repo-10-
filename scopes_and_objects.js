let globalCount = 2;

function showLocalScope () {
    let localCount = 1;
    console.log("LocalCount",localCount);
    console.log("GlobalCount",globalCount);
}

function changeCount() {
    globalCount +=1;
    let localCount = 5;
localCount +=1;
console.log("New globalcount",globalCount);
console.log("New localCount",localCount);
}

function Students(name, age, course) {
    this.name = name;
    this.age = age;
    this.course = course;

this.introduceYourself = function() {
    console.log("Hi my name is " + this.name + " and I am " + this.age + " years old and I study " + this.course);
}
}

let student1 = new Students("Qaasim", 19, "Computer Science");
let student2 = new Students("Imtiyaaz", 19, "Web designer");
let student3 = new Students("Aiden", 23, "Cyber Security");
let student4 = new Students("Storm", 18, "Robotics Engineering");
let student5 = new Students("Natheefah", 18, "Software Development");
let student6 = new Students("Mujahid", 20, "Sales FOrce Technician")

console.log(student1.introduceYourself());
console.log(student2.introduceYourself());
console.log(student3.introduceYourself());
console.log(student4.introduceYourself());
console.log(student5.introduceYourself());
console.log(student6.introduceYourself());

const school = {
    name: "FutureScript University",
    Location: {
        city: "Durban",
        country: "South Africa"
    },
    subjects: ["HTML", "CSS", "JavaScript", "Python"],
    Principal: {
        fullname: "Clark Kent",
        age: 45,
        yearsExperience: 20
    }
};

console.log("school name: " +school.name);
console.log("City: " + school.Location.city);
console.log("Subjects are: " + school.subjects);
console.log("The Principal is: " +school.Principal.fullname);

showLocalScope();
changeCount();