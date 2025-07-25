//1. Tính tổng từ 1 đến 100

// Tạo biến finalsum 
let finalsum = 0;

// Vòng lặp chạy từ 1 đến 100 và công tổng giá trị i vào biến finalsum
for (let i = 1; i <= 100; i++) {
    finalsum += i;
}
console.log(finalsum);

//2. In bảng cửu chương từ 2 đến 9 

// in bảng cửu chương của 2 
// const number = 2;

// for (let i = 1; i <= 10; i++) {
//   console.log(`${number} x ${i} = ${number * i}`);
// }

for (let number = 2; number < 10; number++) {
    for (let i = 1; i < 10; i++) {
        console.log(`${number} x ${i} = ${number * i}`);
    }
}

//3. Tạo một mảng chứa các số lẻ từ 1 đến 99

// Tạo 1 mảng rỗng
let array = [];

//Chạy biến i, điều kiện i là số lẻ, gán giá trị i vô mảng
for (let i = 1; i <= 99; i++) {
    if (i % 2 === 1) {
        array.push(i);
    }
}
console.log(array);

//4. In ra 10 email dựa trên tên người dùng và số thứ tự

let username = 'user';
let useremail = 'example.com';

for (i = 1; i <= 10; i++) {
    let result = `${username}${i}@${useremail}`;
    // let result = username.i.useremail;

        console.log(result);
}

// 5. Tạo object mảng doanh thu và tính tổng 

// Chưa nghĩ ra solution
// let object = [
//     {month: 1, total: 100},
//     {month: 2, total: 200},
//     {month: 3, total: 300}
// ];

// let totalrevanue = 0;

// for(i=1; i<= object.length; i++){
//     totalrevanue = 
// }
