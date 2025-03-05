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
    let firstName = [];
    let age = [];
    let attendance = [];

function getUserInfo(){
   
    for(let i = 0; i < studentNumber; i++){
        firstName[i] = prompt(`Input the ${i+1} student's name `);
        age[i] = Number(prompt(`Input ${firstName[i]}'s age`));
        attendance[i] = confirm(`Is ${firstName[i]} present?`);

        students.push({ firstName, age, attendance });
    }
}

getUserInfo();

/* Create a function showAttendancePercentage that:

Calculates the percentage of students who are present.
Displays this percentage in an alert. (2 points)*/

function showAttendancePercentage(students) {
    const prezStudents = [...attendance];
    let presentCount = prezStudents.filter(prezStudent => prezStudent).length;
    let percentage = (presentCount / students.length) * 100;

    alert(`Today, ${percentage.toFixed(2)}% of students are present.`);
}

showAttendancePercentage(students); 