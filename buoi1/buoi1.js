//Cau 1

let student = [
  {
    name: "NVA",
    age: 16,
    course: ["mindX 01", "mindX 02", "mindX 03"],
  },
  {
    name: "NVB",
    age: 18,
    course: ["mindX 01", "mindX 02", "mindX 04"],
  },
  {
    name: "NVC",
    age: 17,
    course: ["mindX 01", "mindX 03", "mindX 04"],
  },
  {
    name: "NVD",
    age: 15,
    course: ["mindX 01", "mindX 02", "mindX 03"],
  },
];
student[0].course[1];
student[1].course[1];
student[2].course[1];
student[3].course[1];

/////////Tim hoc sinh///////////
// let ageStudent = prompt("Độ tuổi cần tìm?")

// function checkAge(age) {
//     for (let i = 0; i < student.length; i++) {
//         if (student[i].age ==age) {
//             alert(student[i].name)
//         }else{
//           alert("Khong tim thay")
//         }
//         break
//     }
// }
// checkAge(ageStudent)

///////Tim khoa hoc/////////
// let classSearch = prompt("Khóa học cần tìm?");

// function checkClass(code) {
//   for (let j = 0; j < student.length; j++) {
//     for (let i = 0; i < student[j].course.length; i++) {
//       if (student[j].course[i] == code) {
//         alert(student[j].name);
//       }else{
//         alert("Chua co lop hoc nay!")
//       }break
//     }
//   }
// }
// checkClass(classSearch);

// Cau2
let arr1 = [0,2,4,6,8]
let arr2 = [1,3,5,7]


let combinedArray = arr1.concat(arr2);

//1
// let filteredArray = combinedArray.filter(num => num > 3);


// if (filteredArray.length > 0) {
//     alert("Các số lớn hơn 3 là: " + filteredArray.join(", "));
// } else {
//     alert("Không có số nào lớn hơn 3");
// }

//2
combinedArray[arr1.length] = arr1[1]
console.log(combinedArray);

