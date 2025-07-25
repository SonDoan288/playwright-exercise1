// 1. Tạo object car với các thuộc tính
let car = {
    make: "Toyota",
    model: "Corolla",
    year: 2021
};

// In ra năm sản xuất của xe
console.log(car.year);

// Tạo Object với name , address 
let person = {
    name: 'Doan Ngoc Son',
    address: {
        street: 'Ly Thuong Kiet',
        city: 'Ho Chi Minh',
        country: 'Viet Nam'
    }
};
// 2. In ra tên đường của người này
console.log(person.address.street);

// Tạo 1 object student với thuộc tính

let student = {
    name: 'Doan Ngoc Son',
    grades: {
        math : 9,
        english : 8
    }
};

// 2. In ra điểm môn toán
console.log(student["grades"]["math"]);
// console.log(student.grades.math);

// Tạo Object Setting với thuộc tính

let setting = {
    volume: 100,
    brightness: 95
};
//Thay đổi giá trị của volume
setting.volume = 97;

//4. In ra giá trị volume mới
console.log(setting.volume);

//Tạo một Object Bike với year và modal

let bike = {
    year: 1990,
    modal: 'phuong hoang'
};

// 5. Thêm thuộc tính color 
bike.color= 'red';

// In ra object bike để kiểm tra xem có color chưa 
console.log (bike);

// Tạo một object employee với thuộc tính name và age

let employee = {
    name: 'Doan Ngoc Son',
    age: 30
};

// 6. Remove thuộc tính age
delete employee.age;

// In object age để kiểm tra
console.log(employee);

// 7. Khai báo object school với điều kiện

const school = {
    classA: ["An", "Bình", "Châu"],
    classB: ["Đào", "Hương", "Giang"]
  };
  
// In Object
  console.log(school);
