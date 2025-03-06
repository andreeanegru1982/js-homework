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
    
    for(let i = 0; i < studentNumber; i++){
        let name = prompt(`Input the ${i+1} student's name `);
        let age = Number(prompt(`Input ${name}'s age`));
        let attendance = confirm(`Is ${name} present?`);

        students.push({ firstName: name, studAge: age, present: attendance });
    }
}

getUserInfo();


/* Create a function showAttendancePercentage that:
Calculates the percentage of students who are present.
Displays this percentage in an alert. (2 points)*/


function showAttendancePercentage() {
    let presentCount = students.filter(student => student.present).length;
    let percentage = (presentCount / students.length) * 100;

    alert(`Today, ${percentage.toFixed(2)}% of students are present.`);
}

showAttendancePercentage(); 

/*Create a function createTeams that:
Takes a number as a parameter (the desired number of teams).
Forms teams only with present students.
Distributes students across the teams in a structured way so that each team receives students in a cyclic order. (2 points)
(Bonus) Shuffles the students before assigning them to teams to ensure variety. (1 point)
For 10 present students and 3 teams required, logs in the console the teams in the following format:*/


let presentStudents = students.filter(student => student.present).map(student => student.firstName); 
    for(let i= presentStudents.length - 1; i > 0; i--){
        let s = Math.floor(Math.random() * (i+1));
        [presentStudents[i], presentStudents[s]] = [presentStudents[s], presentStudents[i]];
    }
    
    console.log(`The students present are: ${presentStudents}`);

function createTeams(){
    let teamNo = 3;
    let teams =[[], [], []];
    for(let i = 0; i < presentStudents.length; i++){
            teams[i % 3].push(presentStudents[i]);
    }

    console.log("Team 1:");
    teams[0].forEach(member => console.log(`${member}`));

    console.log("\nTeam 2:");
    teams[1].forEach(member => console.log(`${member}`));

    console.log("\nTeam 3:");
    teams[2].forEach(member => console.log(`${member}`));
}
createTeams();