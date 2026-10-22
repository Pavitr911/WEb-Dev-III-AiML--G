use("HospitalDB");

// CREATE 1 insert  2insertOne 3 insertMany
// db.doctors.insertMany([
//     {
//         name: "Dr. Amit",
//         age: 30,
//         specialization: "Dermatologist",
//         salary: 300000
//     },
//     {
//         name: "Dr. Rahul",
//         age: 35,
//         specialization: "Cardiologist",
//         salary: 500000
//     }
// ]);

// db.doctors.insertOne(
//     {
//         name: "Dr. Rahul",
//         age: 35,
//         specialization: "Cardiologist",
//         salary: 500000
//     }
// )

// READ Operations 1. find()  2. findOne()
// db.doctors.find();
// db.doctors.findOne()
// db.doctors.findOne({name: "Rakesh Sharma"})


//UPDATE Operations 1. updateOne() 2. updateMany()

// db.doctors.updateOne(
//     { name: "Dr. Amit" },
//     { $set: { salary: 350000 } }
//  )


// db.doctors.updateMany(
//     { specialization: "Cardiologist" },
//     { $set: { salary: 600000 } }
// )



//DELETE Operations 1. deleteOne() 2. deleteMany()

// db.doctors.deleteOne({ name: "Dr. Rahul" })
// db.doctors.deleteMany({ specialization: "Cardiologist" })    









