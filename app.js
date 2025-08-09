const {hasPassingGrade} = require('./utils.js');

const studentName = "Quishia Samantha Magpantay";
const grades = [89, 90, 88, 95, 81];
const studentDetails = {
    major: "BS Information Technology",
    year: 4
};

const calculateAverage = (numbers) => {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum / numbers.length;
}; //average is 88.6

const averageGrade = calculateAverage(grades); //holder for average grade calculation

console.log(`Student: ${studentName}`);
console.log(`Major: ${studentDetails.major}`);
console.log(`Year: ${studentDetails.year}`);
console.log(`Grades: ${grades.join(", ")}`);
console.log(`Average Grade: ${averageGrade}`);

if (hasPassingGrade(averageGrade)) {
    console.log(`Congratulations! You have a passing average.`);
} else {
    console.log(`You need to improve your average grade.`);
}