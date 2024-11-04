// user profileObject.js
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Creating an object to store user profile information
let userProfile = {
    fullName: '',
    age: 0,
    favoriteNumber: 0,
    favoriteColors: []
};

function askQuestion(query) {
    return new Promise(resolve => rl.question(query, resolve));
}

async function getUserProfile() {
    userProfile.fullName = await askQuestion("Please enter your full name: ");
    userProfile.age = parseInt(await askQuestion("Please enter your age: "), 10);
    userProfile.favoriteNumber = parseInt(await askQuestion("Please enter your favorite number: "), 10);

    // Prompt for favorite colors, allowing multiple entries
    let moreColors = true;
    while (moreColors) {
        let colorInput = await askQuestion("Enter a favorite color (or type 'done' to finish): ");
        if (colorInput.toLowerCase() === 'done') {
            moreColors = false;
        } else {
            userProfile.favoriteColors.push(colorInput);
        }
    }

    // Logging the entire object to the console
    console.log("User Profile:", userProfile);
    rl.close();
}

// Start the process
getUserProfile();