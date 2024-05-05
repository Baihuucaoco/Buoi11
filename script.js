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

// let ageStudent = prompt("Độ tuổi cần tìm?")

// function checkAge(age) {
//     for (let i = 0; i < student.length; i++) {
//         if (student[i].age ==age) {
//             alert(student[i].name)
//         }

//     }
// }
// checkAge(ageStudent)

let classSearch = prompt("Khóa học cần tìm?");

function checkClass(code) {
  for (let j = 0; j < student.length; j++) {
    for (let i = 0; i < student[j].course.length; i++) {
      if (student[j].course[i] == code) {
        alert(student[j].name);
      }
    }
  }
}
checkClass(classSearch);

// let foundStudents = student.filter(s => s.age == parseInt(ageStudent));

// if (foundStudents.length > 0) {
//     alert("Những người có độ tuổi " + ageStudent + " là:");
//     foundStudents.forEach(s => alert(s.name));
// } else {
//     alert("Không tìm thấy!");
// }
