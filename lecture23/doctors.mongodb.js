use("Hospitaldb")

db.doctors.insertMany([
    {
        name: "Dr. Amit",
        age: 30,
        specialization: "Dermatologist",
        salary: 300000,
        fees: 2000,
        experience: 4
    },
    {
        name: "Dr. Pankaj",
        age: 36,
        specialization: "Cardiologist",
        salary: 600000,
        fees: 3000,
        experience: 10
    },
    {
        name: "Dr. Rahul",
        age: 45,
        specialization: "Cardiologist",
        salary: 400000,
        fees: 2500,
        experience: 25
    },
    {
        name: "Dr. Harsh",
        age: 35,
        specialization: "Cardiologist",
        salary: 900000,
        fees: 4000,
        experience: 15
    },
    {
        name: "Dr. shrey",
        age: 34,
        specialization: "Dermatologist",
        salary: 300000,
        fees: 2000,
        experience: 4
    },
    {
        name: "Dr. shree",
        age: 23,
        specialization: "Cardiologist",
        salary: 600000,
        fees: 3000,
        experience: 2
    },
    {
        name: "Dr. yash",
        age: 43,
        specialization: "Cardiologist",
        salary: 400000,
        fees: 2500,
        experience: 12
    },
    {
        name: "Dr.prasant",
        age: 34,
        specialization: "Cardiologist",
        salary: 900000,
        fees: 4000,
        experience: 3
    },
    {
        name: "Dr. kunal",
        age: 65,
        specialization: "Cardiologist",
        salary: 600000,
        fees: 3000,
        experience: 12
    },
    {
        name: "Dr. dikit",
        age: 33,
        specialization: "Cardiologist",
        salary: 600000,
        fees: 3000,
        experience: 5
    },
]);

// db.doctors.aggregate(
//     [
//         {
//             $match: {
//                 specialization: "Cardiologist"
//             }
//         },
//         {
//             $project: {
//                 name: 1,
//                 specialization: 1,
//                 _id: 0
//             }
//         },
//         {
//             $group: {
//                 _id: "$experience",
//                 totalSalary: { $sum: "$salary" },
//                 avgSalary: { $avg: "$salary" },
//                 maxSalary: { $max: "$salary" },
//                 minSalary: { $min: "$salary" },
//                 count: { $sum: 1 }
//             }
//         },
//         {
//             $sort: {
//                 totalSalary: -1
//             }
//         }
//     ]
// )