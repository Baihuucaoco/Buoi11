let student = [
    {
        name: "Duong",
        age: 11,
        hobbies: ["video game","sleep","learn"]
    },
    {
        name: "Dong",
        age: 12,
        hobbies: ["video game","sick","study"]
    },
    {
        name: "Minh",
        age: 13,
        hobbies: ["video game","sick","learn"]
    },
    {
        name: "Thanh",
        age: 9,
        hobbies: ["play game","sleep","learn"]
    },
    {
        name: "Hung",
        age: 11,
        hobbies: ["play game","sick","study"]
    }
]

// cau 1
let ageStudent = prompt("Độ tuổi cần tìm?")

function checkAge(age) {
    for (let i = 0; i < student.length; i++) {
        if (student[i].age ==age) {
            alert(student[i].name)
        }

    }
}
checkAge(ageStudent)

// cau 2
// let studentHobbies = prompt("Sở thích cần tìm?")

// function checkHobbies(hobbies) {
//     for (let i = 0; i < student.length; i++) {
//         if (student[i].hobbies ==hobbies) {
//             console.log(student[i].name.hobbies)
//         }

//     }
// }
// checkHobbies(studentHobbies)

// cau 3
