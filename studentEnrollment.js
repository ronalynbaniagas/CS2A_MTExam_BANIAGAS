const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const DSA = [];
const PL = [];
const Networks = [];

function askQuestion(query) {
    return new Promise(resolve => readline.question(query, resolve));
}

function displayEnrolledStudents(subjectArray) {
    if (subjectArray.length === 0) {
        console.log("No students enrolled.");
    } else {
        console.log("Currently enrolled students:");
        subjectArray.forEach((student, index) => {
            console.log(`${index + 1}. ${student}`);
        });
    }
}

async function enrollStudent(subjectArray) {
    const studentName = await askQuestion("Enter the name of the student to enroll: ");
    subjectArray.push(studentName);
    console.log(`${studentName} has been enrolled.`);
}

async function unenrollStudent(subjectArray) {
    displayEnrolledStudents(subjectArray);
    const studentName = await askQuestion("Enter the name of the student to unenroll: ");
    const index = subjectArray.indexOf(studentName);

    if (index !== -1) {
        subjectArray.splice(index, 1);
        console.log(`${studentName} has been unenrolled.`);
    } else {
        console.log(`${studentName} is not found in the enrolled students.`);
    }
}

async function main() {
    while (true) {
        const subjectChoice = (await askQuestion("Select a subject to enroll a student:\n(A) DSA\n(B) PL\n(C) Networks\nEnter your choice: ")).toUpperCase();

        let subjectArray;
        if (subjectChoice === 'A') {
            subjectArray = DSA;
        } else if (subjectChoice === 'B') {
            subjectArray = PL;
        } else if (subjectChoice === 'C') {
            subjectArray = Networks;
        } else {
            console.log("Invalid subject choice. Please try again.");
            continue;
        }

        while (true) {
            const operationChoice = (await askQuestion("Select an operation:\n(A) Enroll\n(B) Unenroll\n(C) Select Another Subject\n(D) Exit\nEnter your choice: ")).toUpperCase();

            if (operationChoice === 'A') {
                await enrollStudent(subjectArray);
            } else if (operationChoice === 'B') {
                await unenrollStudent(subjectArray);
            } else if (operationChoice === 'C') {
                break; // Go back to subject selection
            } else if (operationChoice === 'D') {
                console.log("Exiting the program...");
                console.log("DSA Enrolled Students:", DSA);
                console.log("PL Enrolled Students:", PL);
                console.log("Networks Enrolled Students:", Networks);
                readline.close();
                return; // Exit the program
            } else {
                console.log("Invalid operation choice. Please try again.");
            }
        }
    }
}

// Start the program
main();

