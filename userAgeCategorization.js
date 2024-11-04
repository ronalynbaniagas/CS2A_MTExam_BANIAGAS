// ageCategorization.js

let age  = 9;

if (age < 5) {
    console.log("Toddler (under 5 years old)");
} else if (age >= 5 && age <= 12) {
    console.log("Child (5-12 years old)");
} else if (age >= 13 && age <= 19) {
    console.log("Teenager (13-19 years old)");
} else if (age >= 20 && age <= 35) {
    console.log("Young Adult (20-35 years old)");
} else if (age >= 36 && age <= 60) {
    console.log("Middle age (36-60 years old)");
} else {
    console.log("Senior (over 60 years old)");
}