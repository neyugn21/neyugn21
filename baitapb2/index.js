console.log("Bai1==============================");

// b1: Phân tách mảng colors gồm ba phần tử và lấy ra các giá trị của các phần tử đó vào các biến firstColor, secondColor, và thirdColor.

let arr = ["red", "green", "blue"];

let [firstColor, secondColor, color3] = arr;

console.log(firstColor, secondColor, color3);
console.log("Bai2==============================");

// b2:Phân tách đối tượng person có hai thuộc tính là name và age vào các biến tương ứng.
const person = {
  name: "Thanh",
  age: 24,
};
const { name, age } = person;
console.log("name:", name, " age:", age);

function displayPerson({ name, age }) {
  console.log("name:", name, " age:", age);
}

displayPerson(person);
const person3 = {
  name: "Linh",
  age: 21,
};
const { name: personName, age: personAge } = person3;
console.log(personName, personAge);
console.log("Bai3==============================");

// bai3:Tạo một mảng mới bằng cách nối hai mảng arr1 và arr2 vào một mảng mới sử dụng spread operator.
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
// const arr3 = [...arr1, ...arr2];
// console.log(arr3);
const arr3 = [...arr1];
arr2.forEach((item) => {
  arr3.push(item);
});
console.log(arr3);
console.log("Bai4==============================");

// bai4:Tạo một bản sao của mảng originalArray bằng cách sử dụng spread operator.
const originalArray = ["Nguyen", "Tien", "Thanh"];
const newArray = [...originalArray];
console.log(newArray);

console.log("Bai5==============================");
//Bai5: Thêm một phần tử số 4 vào cuối mảng arr bằng cách sử dụng spread operator.
const array = [1, 2, 3, 4];
const newArr = [...array, 4];
console.log(newArr);

//b6 Cho hai đối tượng obj1 và obj2, viết một đoạn mã sử dụng Spread Operator để tạo một đối tượng mới chứa tất cả các thuộc tính từ cả hai đối tượng.
console.log("Bai6==============================");
let obj1 = {
  name: "Thanh",
  age: 24,
};
let obj2 = {
  address: "Ha Noi",
  email: "nLp2S@example.com",
};
let obj3 = { ...obj1, ...obj2 };
console.log(obj3);
console.log("Bai7==============================");

//b7:Cho một đối tượng person với các thuộc tính như name, age, và gender, viết một đoạn mã sử dụng Spread Operator để thêm một thuộc tính mới là country có giá trị là "Vietnam".
const hito = {
  name: "Hito",
  age: 24,
  gender: "male",
};
const newhito = { ...hito, country: "vietnam" };
console.log(newhito);
console.log("Bai8==============================");
// bai 8:Sử dụng filter để lọc ra các số chẵn từ một mảng số nguyên.
const msn = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newMsn = msn.filter((item) => {
  return item % 2 == 0;
});
console.log(newMsn);

//b9:Sử dụng filter để lọc ra các số chẵn từ một mảng số nguyên.
console.log("Bai9==============================");

const mang = [
  "red",
  "green",
  "blue",
  "apple",
  "banana",
  "blueberry",
  "strawberry",
];
const newMang = mang.filter((item) => {
  return item.length > 6;
});
console.log(newMang);
// bai10:Sử dụng filter để lọc ra các đối tượng từ một mảng các đối tượng dựa trên một điều kiện cho trước
console.log("Bai10==============================");

const PerSon = [
  {
    name: "Thanh",
    age: 24,
  },
  {
    name: "Linh",
    age: 21,
  },
  {
    name: "Huy",
    age: 23,
  },
  {
    name: "Hieu",
    age: 22,
  },
];
const newPerSon = PerSon.filter((item) => {
  return item.age > 22;
});
console.log(newPerSon);

console.log("Bai11==============================");
// bai11:
const SNT = [1, 2, 5, 7, 11, 13, 15, 14, 21, 23, 25, 26, 27, 31];
const isPrime = (num) => {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};
const newSNT = SNT.filter((item) => {
  return isPrime(item);
});
console.log(newSNT);

console.log("Bai12==============================");
// bai12:Sử dụng filter để lọc ra các chuỗi không chứa ký tự số từ một mảng các chuỗi.
const chuoi = [
  "red32",
  "green23",
  "blue32",
  "apple",
  "banana",
  "blueberry",
  "strawberry",
];
const newChuoi = chuoi.filter((item) => {
  return item.split("").every((char) => {
    return isNaN(char);
  });
});
console.log(newChuoi);
