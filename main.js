/*Define a function getUserInfo that:

Asks the user for their name using prompt.
Asks the user for their age using prompt.
Asks the user if they are present using confirm.
Returns an object containing:
name: the user's name.
age: the user's age (as a number).
attendance: a boolean indicating whether the student is present.

Use this function to collect data for multiple students and store 
their information in an array. (3 points)*/

let studentNumber = prompt(`How many students are inrolled?`);
    studentNumber = Number(studentNumber);

    let students = [];

function getUserInfo(){
    let name = [];
    let age = [];
    let presence = [];

    for(let i = 0; i < studentNumber; i++){
        name[i] = prompt(`Input the ${i+1} student's name `);
        age[i] = Number(prompt(`Input ${name[i]}'s age`));
        presence[i] = confirm(`Is ${name[i]} present?`);
    }

    students.push({name, age, presence});

}

getUserInfo();

/* Create a function showAttendancePercentage that:

Calculates the percentage of students who are present.
Displays this percentage in an alert. (2 points)*/

function showAttendancePercentage(){

}