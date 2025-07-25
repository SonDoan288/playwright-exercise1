// 1. Viết hàm multiply nhận 2 tham số a và b, in ra kết quả nhân của chúng. Gọi hàm với 2 cặp giá trị khác nhau. 

// function multiply (){
//     const a = 2;
//     const b = 4;
//     const c = a * b;
//     return c;
// }
// let result = multiply ();

// console.log(result);

function multiply(a, b) {
    const resultmultiply = a * b;

    console.log(resultmultiply);
}
multiply(5, 6);

multiply(7, 8);


// 2. Viết hàm findMin nhận 3 tham số a, b, c, trả về giá trị nhỏ nhất. Gọi hàm và in kết quả với 2 bộ số khác nhau. 

function findMin(a, b, c) {

    let min = a;

    if (b < min) {
        min = b;
    }

    if (c < min) {
        min = c;
    }

    console.log(`${min}`);

    return min;

    // console.log(`${min}`);

}
findMin(5, 6, 7);

findMin(11, 3, 7);

//3. VIết hàm getTopStudents 

function getTopStudents(students, threshold) {
    const topStudents = [];

    for (let i = 0; i < students.length; i++) {
        if (students[i].score >= threshold) {
            topStudents.push(students[i].name);
        }
    }

    return topStudents;
}
const students = [
    { name: 'A', score: 10 },
    { name: 'B', score: 20 },
    { name: 'C', score: 30 }
];

const threshold = 15;

const result = getTopStudents(students, threshold);
console.log(result);

//4. Viết hàm calculateInterest nhận 3 tham số

function calculateInterest(principal, rate, year) {

    const total = principal + (principal * rate * year) / 100;

    return total;

}
const principal = 20;
const rate = 5;
const year = 10;

const total = calculateInterest(principal, rate, year);

console.log(total);