const students = [
    { name: "Alice Johnson", idNum: 1001, year: 1, grade: 85.5 },
    { name: "Bob Smith", idNum: 1002, year: 2, grade: 90.2 },
    { name: "Charlie Brown", idNum: 1003, year: 1, grade: 78.8 },
    { name: "David Wilson", idNum: 1004, year: 3, grade: 88.0 },
    { name: "Emily Davis", idNum: 1005, year: 4, grade: 92.5 },
    { name: "Frank Miller", idNum: 1006, year: 2, grade: 80.3 },
    { name: "Grace Lee", idNum: 1007, year: 1, grade: 95.7 },
    { name: "Henry Clark", idNum: 1008, year: 3, grade: 87.4 },
    { name: "Isabel White", idNum: 1009, year: 4, grade: 91.6 },
    { name: "Jack Taylor", idNum: 1010, year: 2, grade: 83.9 }
];


function findGrade(students){
    let highestGrade = 0;
    let lowestGrade = 999;
    let tempHighIndex = 0;
    let tempLowIndex = 0;
    
    for(let i = 0; i < 10; i++){
        if(students[i].grade > highestGrade){
            highestGrade = students[i].grade;
            tempHighIndex = i;
        }

        if(students[i].grade < lowestGrade){
            lowestGrade = students[i].grade;
            tempLowIndex = i;
        }
    }

    console.log("Highest Grade");
    console.log("Student Name: ", students[tempHighIndex]);

    console.log("Lowest Grade:")
    console.log("Student Name: ", students[tempLowIndex]);
}

findGrade(students);