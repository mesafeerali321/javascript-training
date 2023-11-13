// let family = {
//     brothrs1:{
//         name: 'Suresh',
//         age: 40,
//         child1: {
//             name: 'Rohit',
//             age: 17,
//         }
//     },
//     brothers2:{
//         name: 'Naresh',
//         age: 38,
//         child1: {
//             name: 'Mohit',
//             age: 15,
//         }
//     }

// }

// console.log(family)

let family = {
    brothers1: {
        name: 'Zafri',
        age: 22,
        qualification: 'Graduation',
        child1: {
            name: 'Sadik',
            age: 3,
        },
        child2: {
            name: 'Hadik',
            age: 1,
        }
    },
    brothers2: {
        name: 'Saklain',
        age: 20,
        child1: {
            name: 'Sakir',
            age: 4,
        },
        child2: {
            name: 'Sulman',
            age: 2,
        }
    }
}

console.log(family.brothers1)
console.log(family.brothers2.child1.age)