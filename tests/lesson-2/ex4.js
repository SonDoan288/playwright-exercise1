const height = 180; 

// tính số lẻ của chiều cao
const a = height % 100;

console.log(a);

// Tính cân nặng lý tưởng
const ideaweight = a * 9 / 10; 

console.log(ideaweight);

// Tính cân nặng tối đa

const maxweight = a;

console.log(maxweight);

// Tính cân nặng tối thiểu

const minweight = a * 8 / 10;

console.log(minweight);

// In tất cả giá trị ra 1 dòng

console.log ('IdeaWeight:', ideaweight , 'Maxwweight:',maxweight, 'MinWeight:',minweight);
